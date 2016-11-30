import React, { PropTypes } from 'react';
import format from 'date-fns/format';

export const Center = ({ children, style }) =>
  <div style={{ margin: '0 auto', padding: '10px', maxWidth: '900px', ...style }}>{ children }</div>;

Center.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export const InlineContainer = ({ children }) => <div className="inline-container">{ children }</div>;

InlineContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DottedContainer = ({ children }) => <div className="dotted-container">{children}</div>;

DottedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const articleUrl = id => <span>Hentet fra <a href={`http://api.test.ndla.no:8082/article/${id}`}>{`http://api.test.ndla.no:8082/article/${id}`}</a></span>;

export default function formatDate(date, locale) {
  if (locale === 'nb' || locale === 'nn') {
    return format(date, 'DD.MM.YYYY');
  }
  return format(date, 'MM/DD/YYYY');
}
