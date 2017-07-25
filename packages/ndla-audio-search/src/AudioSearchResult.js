/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { Button, LicenseIconList } from 'ndla-ui';
import AudioComponent from './AudioComponent';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-',
});

export default function AudioSearchResult({
  audio,
  fetchAudio,
  onError,
  locale,
}) {
  const license = getLicenseByAbbreviation(audio.license, locale);
  return (
    <div key={audio.id} {...classes('list-item', 'search-result')}>
      <div {...classes('list-item-inner')}>
        <h2>
          {audio.title}
        </h2>
        <AudioComponent
          audio={audio}
          fetchAudio={fetchAudio}
          onError={onError}
        />
        <div {...classes('license')}>
          {license.rights
            ? <LicenseIconList licenseRights={license.rights} noText />
            : license}
          <Button {...classes()}>Bruk lyden</Button>
        </div>
      </div>
    </div>
  );
}

AudioSearchResult.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  fetchAudio: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
