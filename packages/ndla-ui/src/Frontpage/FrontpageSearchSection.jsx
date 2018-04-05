import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { SearchField } from '../Search';

const classes = BEMHelper('c-frontpage-search-section');

const FrontpageSearchSection = ({
  heading,
  searchFieldValue,
  onSearchFieldChange,
}) => (
  <section {...classes()}>
    <h1 {...classes('heading')}>{heading}</h1>
    <SearchField
      placeholder="Søk i fagstoff, oppgaver og aktiviteter eller læringsstier"
      value={searchFieldValue}
      onChange={onSearchFieldChange}
      messages={{
        searchFieldTitle: 'Søk',
      }}
      resourceToLinkProps={() => {}}
    />
  </section>
);

FrontpageSearchSection.propTypes = {
  searchFieldValue: PropTypes.string.isRequired,
  onSearchFieldChange: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FrontpageSearchSection;
