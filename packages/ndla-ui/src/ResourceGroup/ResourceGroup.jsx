/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ResourceShape } from '../shapes';
import ResourceList from './ResourceList';
import ResourceToggleFilter from './ResourceToggleFilter';
import ResourcesTitle from '../ResourcesWrapper/ResourcesTitle';

const classes = new BEMHelper({
  name: 'resource-group',
  prefix: 'c-',
});

class ResourceGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalResources: false,
    };
  }

  render() {
    const {
      title,
      icon,
      resources,
      messages,
      className,
      resourceToLinkProps,
    } = this.props;
    const { showAdditionalResources } = this.state;
    const additionalResources = resources.filter(res => res.additional);
    const normalResources = resources.filter(res => !res.additional);
    return (
      <section {...classes('', '', className)}>
        {additionalResources.length > 0 && (
          <ResourceToggleFilter
            checked={showAdditionalResources}
            label={messages.toggleFilterLabel}
            onClick={() =>
              this.setState(prevState => ({
                showAdditionalResources: !prevState.showAdditionalResources,
              }))
            }
          />
        )}
        <ResourcesTitle>{title}</ResourcesTitle>
        <ResourceList
          showAdditionalResources={showAdditionalResources}
          icon={icon}
          messages={messages}
          resourceToLinkProps={resourceToLinkProps}
          additionalResources={additionalResources}
          normalResources={normalResources}
        />
      </section>
    );
  }
}

ResourceGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(ResourceShape).isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  hideResourceToggleFilter: PropTypes.bool,
  messages: PropTypes.shape({
    toggleFilterLabel: PropTypes.string.isRequired,
    showMore: PropTypes.string.isRequired,
    showLess: PropTypes.string.isRequired,
  }),
};

ResourceGroup.defaultProps = {
  hideResourceToggleFilter: false,
};

export default ResourceGroup;
