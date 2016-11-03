import React from 'react';

import { storiesOf } from '@kadira/storybook';
import { Center } from './helpers';
import article from '../dummydata/article93.json';
import {Table} from '../src/table/Table';

/*
 * Example content
 */
const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.content[0].content;

const paragraph = articleHTML.getElementsByTagName('p')[0];
const table = articleHTML.getElementsByTagName('table')[0];
console.log(table);
const heading = (level) => {
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) return `<h${level}>Overskrift ${level}</${level}>`;
  return `<h${level}>${articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML}<h${level}>`;
};


storiesOf('Typography', module)
  .add('Headlines', () => (
    <Center>
      <div dangerouslySetInnerHTML={{ __html: heading(1) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(2) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(3) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(4) }} />
    </Center>
  ))
  .add('Paragraphs', () => (
    <Center>
      <div dangerouslySetInnerHTML={{ __html: paragraph.outerHTML }} />
    </Center>
  ))
  .add('Tables', () => (
    <Center>
      <Table>{<div dangerouslySetInnerHTML={{ __html: table.outerHTML }} />}</Table>
    </Center>
  ))
  .add('Lists', () => (
    <Center>
      <p>Un-ordered</p>
      <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
        <li>list item 4</li>
      </ul>

      <p>Ordered</p>
      <ol>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
        <li>list item 4</li>
      </ol>
    </Center>
  ))
  ;
