/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SvgLogo from './SvgLogo';
import LinkLogo from './LinkLogo';

export const logoClasses = new BEMHelper({
  name: 'logo',
  prefix: 'c-',
});

export const Logo = ({ name, cssModifier, to }) => {
  if (to) {
    return <LinkLogo name={name} to={to} cssModifier={cssModifier} />;
  }
  return (
    <h1 {...logoClasses('', cssModifier)}>
      <SvgLogo name={name} />
    </h1>
  );
};

Logo.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  altText: PropTypes.string.isRequired,
  cssModifier: PropTypes.string,
  name: PropTypes.bool,
};

Logo.defaultProps = {
  name: true,
};

export default Logo;
