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
import { logoClasses } from './Logo';

export const SvgLogo = ({ name, color }) => (
  <svg
    {...logoClasses('graphic')}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 376 152"
    fill={color}
    fillRule="evenodd">
    <path d="M355 67h-84v51h102V51h-18v16zm0 14h-66v19h66V81zm-84-48v18h84V33h-84z" />
    <rect width="18" height="118" x="236" transform="matrix(-1 0 0 1 490 0)" />
    <path d="M201 100V51h-65v49h65zm18 18V0h-18v33h-83v85h101z" />
    <polygon points="18 51 18 118 0 118 0 33 101 33 101 118 83 118 83 51" />
    {name && (
      <path d="M.8 151v-16.28l9.94 9.58a24.54 24.54 0 0 1 1.7 1.9v-10.86h2.35v16.27l-10.14-9.74a13.47 13.47 0 0 1-1.51-1.76V151H.8zm20.9-6.15h4.35l-1.6-3.57a13.98 13.98 0 0 1-.59-1.78 14.35 14.35 0 0 1-.56 1.78l-1.6 3.57zm7.03 6.15l-1.78-4.03h-6.2L18.93 151h-2.67l7.58-16.28L31.41 151h-2.68zm3.26-3.13l2.03-.94c.2.7.55 1.23 1.06 1.6a3.3 3.3 0 0 0 1.97.55c.75 0 1.35-.22 1.8-.64.44-.42.67-.98.67-1.69 0-.91-.77-1.73-2.3-2.45l-.48-.24c-1.73-.84-2.88-1.6-3.45-2.28a3.74 3.74 0 0 1-.86-2.5 4 4 0 0 1 1.3-3.1c.86-.8 2-1.19 3.4-1.19 1.16 0 2.12.22 2.9.67a3.52 3.52 0 0 1 1.62 1.92l-2 1.03c-.3-.5-.65-.86-1.03-1.08-.37-.23-.8-.35-1.28-.35-.69 0-1.23.18-1.64.54-.4.36-.6.83-.6 1.43 0 .94.88 1.82 2.65 2.63l.32.15a9.43 9.43 0 0 1 3.19 2.1c.58.67.87 1.52.87 2.54a4.6 4.6 0 0 1-1.4 3.54 5.32 5.32 0 0 1-3.79 1.3c-1.33 0-2.43-.3-3.28-.91a4.3 4.3 0 0 1-1.67-2.63zm12.79.29c.26.3.52.54.76.68s.5.21.77.21c.5 0 .85-.16 1.05-.49.2-.33.3-.94.3-1.83v-11.39h2.53v12.22c0 1.32-.3 2.3-.88 2.92-.58.63-1.5.94-2.74.94a4.25 4.25 0 0 1-3.42-1.63l1.63-1.63zm22.15-4.96a5.95 5.95 0 0 0-1.67-4.16 5.52 5.52 0 0 0-4.04-1.7 5.61 5.61 0 0 0-4.05 1.7 5.66 5.66 0 0 0-1.24 1.9 6.05 6.05 0 0 0 1.24 6.4 5.62 5.62 0 0 0 8.09 0 5.87 5.87 0 0 0 1.67-4.14zm2.66 0a8.05 8.05 0 0 1-2.45 5.81 8.56 8.56 0 0 1-5.92 2.4 8.46 8.46 0 0 1-7.75-5.04 8.09 8.09 0 0 1-.62-3.17 8.14 8.14 0 0 1 5.16-7.6 8.56 8.56 0 0 1 3.21-.6 8.49 8.49 0 0 1 5.92 2.38 8.23 8.23 0 0 1 2.45 5.82zm2.92 7.8v-16.28l9.94 9.58a24.54 24.54 0 0 1 1.7 1.9v-10.86h2.35v16.27l-10.14-9.74a13.47 13.47 0 0 1-1.51-1.76V151H72.5zm20.9-6.15h4.35l-1.6-3.57a13.98 13.98 0 0 1-.59-1.78 14.35 14.35 0 0 1-.57 1.78l-1.6 3.57zm7.03 6.15l-1.78-4.03h-6.2L90.64 151h-2.67l7.58-16.28 7.57 16.28h-2.68zm4.16 0v-15.66h2.54v13.38h5.7V151h-8.24zm19.45-2.3h2.14c1.17 0 2.06-.08 2.64-.23.6-.16 1.1-.42 1.54-.8a4.7 4.7 0 0 0 1.33-1.88c.3-.76.44-1.63.44-2.63s-.14-1.87-.44-2.62a4.7 4.7 0 0 0-1.33-1.9 3.94 3.94 0 0 0-1.59-.78c-.62-.16-1.58-.24-2.9-.24h-1.83v11.08zm-2.55 2.3v-15.66h3.44c2.23 0 3.8.12 4.7.34a6.36 6.36 0 0 1 4.45 3.8 9.3 9.3 0 0 1 .7 3.7c0 1.4-.23 2.62-.7 3.7a6.65 6.65 0 0 1-2.05 2.66c-.69.52-1.47.9-2.34 1.12-.87.23-2.23.34-4.08.34h-4.12zm16.26 0v-15.66h2.54V151h-2.54zm14.87-8.02h6.2l.01.45c.03.5.04.85.04 1.03 0 2.2-.63 3.9-1.9 5.13-1.26 1.22-3.04 1.83-5.33 1.83a9.7 9.7 0 0 1-3.43-.57c-1.01-.38-1.89-.95-2.65-1.71a7.77 7.77 0 0 1-1.7-2.66 8.96 8.96 0 0 1-.6-3.28c0-1.18.2-2.27.6-3.27.41-1 1-1.88 1.8-2.64a7.72 7.72 0 0 1 2.68-1.71 9.15 9.15 0 0 1 3.3-.59c1.23 0 2.33.23 3.3.68a7.38 7.38 0 0 1 2.61 2.06l-1.86 1.4a5.15 5.15 0 0 0-1.79-1.37c-.66-.3-1.4-.45-2.22-.45-1.7 0-3.08.55-4.15 1.63a5.78 5.78 0 0 0-1.61 4.24c0 1.77.53 3.2 1.6 4.3a5.57 5.57 0 0 0 4.18 1.66 5.3 5.3 0 0 0 3.43-1.02 3.38 3.38 0 0 0 1.26-2.77v-.22h-3.77v-2.15zm8.96 8.02v-15.66h2.55V151h-2.55zm11.26-13.5V151h-2.54v-13.5h-4.16v-2.16h10.84v2.16h-4.14zm9.4 7.35h4.35l-1.6-3.57a13.98 13.98 0 0 1-.59-1.78 14.35 14.35 0 0 1-.56 1.78l-1.6 3.57zm7.03 6.15l-1.78-4.03h-6.2l-1.82 4.03h-2.67l7.58-16.28 7.57 16.28h-2.68zm4.16 0v-15.66h2.54v13.38h5.7V151h-8.24zm16.9 0v-15.66h2.55v13.38h5.69V151h-8.24zm13.6-6.15h4.52l-1.32-3.57a19.6 19.6 0 0 1-.76-2.6 10.28 10.28 0 0 1-.79 2.38l-1.64 3.8zm9.12-9.5l.9 2.15h-5.74l1.38 3.84h5.25l.84 2.24h-5.24l1.91 5.14h5.75l.86 2.28h-8.26l-1.48-4.03H223L221.2 151h-2.68l7.32-15.66h7.23zm10.08 6.67h.46c1.35 0 2.24-.16 2.68-.47.45-.32.67-.87.67-1.67 0-.86-.24-1.47-.71-1.82-.48-.36-1.36-.53-2.64-.53h-.46v4.49zm-.16 1.98v7h-2.38v-15.66h3.55c1.04 0 1.84.07 2.42.2a3.8 3.8 0 0 1 1.47.68c.48.38.86.87 1.12 1.47.26.6.4 1.25.4 1.96a4.4 4.4 0 0 1-.91 2.95 4 4 0 0 1-2.69 1.28l5.4 7.12h-2.88l-5.21-7h-.29zm9.92 7v-15.66h2.55V151h-2.55zm6.2 0v-16.28l9.95 9.58a24.54 24.54 0 0 1 1.7 1.9v-10.86h2.35v16.27l-10.15-9.74a13.47 13.47 0 0 1-1.5-1.76V151h-2.34zm26.27-8.02h6.2l.01.45.03 1.03c0 2.2-.63 3.9-1.89 5.13-1.26 1.22-3.04 1.83-5.34 1.83a9.7 9.7 0 0 1-3.43-.57c-1-.38-1.88-.95-2.64-1.71a7.77 7.77 0 0 1-1.7-2.66 8.96 8.96 0 0 1-.6-3.28c0-1.18.2-2.27.6-3.27.4-1 1-1.88 1.8-2.64a7.72 7.72 0 0 1 2.68-1.71 9.15 9.15 0 0 1 3.3-.59c1.23 0 2.33.23 3.3.68a7.38 7.38 0 0 1 2.6 2.06l-1.85 1.4a5.15 5.15 0 0 0-1.79-1.37c-.66-.3-1.4-.45-2.22-.45-1.7 0-3.08.55-4.16 1.63a5.78 5.78 0 0 0-1.6 4.24c0 1.77.53 3.2 1.6 4.3a5.57 5.57 0 0 0 4.18 1.66 5.3 5.3 0 0 0 3.43-1.02 3.38 3.38 0 0 0 1.25-2.77v-.22h-3.76v-2.15zm8.02 4.89l2.03-.94c.2.7.55 1.23 1.06 1.6a3.3 3.3 0 0 0 1.97.55c.75 0 1.35-.22 1.8-.64.44-.42.67-.98.67-1.69 0-.91-.77-1.73-2.3-2.45l-.48-.24c-1.73-.84-2.88-1.6-3.45-2.28a3.74 3.74 0 0 1-.86-2.5 4 4 0 0 1 1.3-3.1c.86-.8 2-1.19 3.4-1.19 1.16 0 2.12.22 2.9.67a3.52 3.52 0 0 1 1.61 1.92l-1.98 1.03c-.32-.5-.66-.86-1.04-1.08-.37-.23-.8-.35-1.29-.35-.68 0-1.22.18-1.63.54-.4.36-.6.83-.6 1.43 0 .94.88 1.82 2.65 2.63l.32.15a9.43 9.43 0 0 1 3.19 2.1c.58.67.87 1.52.87 2.54a4.6 4.6 0 0 1-1.4 3.54 5.32 5.32 0 0 1-3.8 1.3c-1.32 0-2.42-.3-3.27-.91a4.3 4.3 0 0 1-1.67-2.63zm16.22-3.02h4.36l-1.6-3.57a13.98 13.98 0 0 1-.59-1.78 14.35 14.35 0 0 1-.57 1.78l-1.6 3.57zm7.04 6.15l-1.78-4.03h-6.2l-1.82 4.03h-2.67l7.58-16.28 7.57 16.28h-2.68zm6.7-8.98h.46c1.35 0 2.24-.16 2.68-.47.45-.32.67-.87.67-1.67 0-.86-.24-1.47-.71-1.82-.48-.36-1.36-.53-2.64-.53h-.46v4.49zm-.16 1.98v7h-2.38v-15.66h3.55c1.04 0 1.84.07 2.42.2a3.8 3.8 0 0 1 1.47.68c.48.38.86.87 1.12 1.47.27.6.4 1.25.4 1.96a4.4 4.4 0 0 1-.91 2.95 4 4 0 0 1-2.69 1.28l5.4 7.12h-2.88l-5.21-7h-.29zm9.88 7v-15.66h8.74v2.16h-6.2v3.93h6.2v2.23h-6.2v5.06h6.2V151h-8.74zm11.66 0v-16.28l9.94 9.58a24.54 24.54 0 0 1 1.7 1.9v-10.86h2.35v16.27l-10.14-9.74a13.47 13.47 0 0 1-1.51-1.76V151h-2.34zm20.9-6.15h4.35l-1.6-3.57a13.98 13.98 0 0 1-.59-1.78 14.35 14.35 0 0 1-.56 1.78l-1.6 3.57zm7.03 6.15l-1.78-4.03h-6.2l-1.82 4.03h-2.67l7.58-16.28 7.57 16.28h-2.68z" />
    )}
  </svg>
);

SvgLogo.propTypes = {
  name: PropTypes.bool,
  color: PropTypes.string,
};

SvgLogo.defaultProps = {
  name: true,
  color: '#000000',
};

export default SvgLogo;
