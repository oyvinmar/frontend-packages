/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, PropTypes } from 'react';
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addAsideClickListener,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';
import { presets } from 'react-motion';
import ReactCollapse from 'react-collapse';
import Icon from '../icons/Icon';

import Article from '../article/Article';
import Button from '../button/Button';
import ArticleFootNotes from '../article/ArticleFootNotes';
import { ArticleShape } from '../shapes';


class TopicArticle extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentDidMount() {
    addEventListenerForResize();
    updateIFrameDimensions();
    addAsideClickListener();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { article, openTitle, closeTitle } = this.props;
    const { isOpen } = this.state;

    return (
      <Article>
        <h1>{article.title}</h1>
        <Article.Introduction introduction={article.introduction} />
        <ReactCollapse isOpened={isOpen} springConfig={presets.wobble} >
          <div style={{ overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: article.content }} />
        </ReactCollapse>
        { article.footNotes && isOpen ? <ArticleFootNotes footNotes={article.footNotes} /> : null }
        <Button className="c-topic-article_toggle-button" onClick={this.toggleOpen} stripped>{ isOpen ? closeTitle : openTitle } <Icon.ArrowDown /></Button>
      </Article>
    );
  }
}


TopicArticle.propTypes = {
  article: ArticleShape.isRequired,
  openTitle: PropTypes.node.isRequired,
  closeTitle: PropTypes.node.isRequired,
};

export default TopicArticle;
