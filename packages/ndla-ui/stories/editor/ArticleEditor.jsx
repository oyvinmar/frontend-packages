/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { convertFromHTML } from 'draft-convert';
import { Entity, EditorState } from 'draft-js';
import { fetchArticleFromApi } from '../article/articleApi';
import SimpleSubmitForm from '../article/SimpleSubmitForm';
import { Button } from '../../src/';
import NDLAEditor from './NDLAEditor';

function findEmbedDataInContentState(constentState) {
  return constentState.getBlocksAsArray().filter(block => block.getEntityAt(0)).map((block) => {
    const key = block.getEntityAt(0);
    return Entity.get(key).getData();
  });
}

function updateEnitiesInContentState(constentState, embedsWithResources) {
  const blockMap = constentState.getBlockMap().map((block) => {
    const key = block.getEntityAt(0);
    if (key) {
      const id = Entity.get(key).getData().id;
      const embed = embedsWithResources.find(e => e.id === id);
      Entity.mergeData(key, { src: embed.image.imageUrl });
      return block.set('text', ' '); // Fix 'a' hack (See https://github.com/HubSpot/draft-convert/blob/master/src/convertFromHTML.js#L381-L388)
    }
    return block;
  });
  return constentState.set('blockMap', blockMap);
}

function reduceAttributesArrayToObject(attributes) {
  // Reduce attributes array to object with attribute name (striped of data-) as keys.
  return attributes.reduce((all, attr) => Object.assign({}, all, { [attr.nodeName.replace('data-', '')]: attr.nodeValue }), {});
}

function fetchEmbedData(embed) {
  if (embed.resource === 'image') {
    return fetch(embed.url)
          .then(res => res.json())
          .then(image => ({ ...embed, image }));
  }
  return embed;
}

function convertContentToContentState(content) {
  return convertFromHTML({
    htmlToBlock: (nodeName) => {
      if (nodeName === 'embed') {
        return 'atomic';
      }
      return undefined;
    },
    htmlToEntity: (nodeName, node) => {
      if (nodeName === 'embed' && node.attributes['data-resource'].nodeValue === 'image') {
        const data = reduceAttributesArrayToObject(Array.from(node.attributes));
        return Entity.create('image', 'IMMUTABLE', data);
      }
      return undefined;
    },
  })(content);
}

class ArticleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { articleId } = this.props;
    if (articleId) {
      this.handleSubmit(articleId);
    }
  }

  handleSubmit(articleId) {
    fetchArticleFromApi(articleId)
      .then((article) => {
        const contentState = convertContentToContentState(article.content);

        const embeds = findEmbedDataInContentState(contentState);

        Promise.all(embeds.map(fetchEmbedData)).then((embedsWithResources) => {
          const updatedContentState = updateEnitiesInContentState(contentState, embedsWithResources);
          this.setState({
            contentState: updatedContentState,
          });
        });
      })
    ;
  }

  render() {
    const { contentState, message } = this.state;
    const editorState = contentState ? EditorState.createWithContent(contentState) : undefined;
    return (
      <div>
        { editorState ? <Button style={{ float: 'right' }} onClick={() => this.setState({ contentState: undefined })}>Lukk</Button> : null}
        { editorState ? <NDLAEditor editorState={editorState} /> : <SimpleSubmitForm onSubmit={this.handleSubmit} errorMessage={message} labelText="Artikkel ID:" />}
      </div>
    );
  }
}

ArticleEditor.propTypes = {
};

export default ArticleEditor;