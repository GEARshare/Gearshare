import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';
import cameraImage from './images/cameraImage.JPG';
import lenseImage from './images/lenseImage.JPG';
import audioImage from './images/Audio.jpg';
import lightingImage from './images/istockphoto-182758050-612x612.jpg';
import studioImage from './images/Studio Space.jpg';
import cinecameraImage from './images/CineCamera.jpg';
import cinelenseImage from './images/Cine Lenses.jpg';
import hybridcameraImage from './images/Hybrid Cameras.jpg';
import photographyLenseImage from './images/Photography Lenses.jpg';
import setImage from './images/Set Locations.jpg';
import actionCameraImage from './images/Action Cameras.jpg';
import mobilepackageImage from './images/Mobile Packages .jpg';
import computerImage from './images/Computers.jpg';
import gamingImage from './images/Gaming Consoles.jpg';
import droneImage from './images/Drones.jpg';
import vrImage from './images/Virtual Reality.jpg';
import allImage from './images/View All Categories.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.scroll}>
        <div className={css.locations}>
          {locationLink(
            'Cine Cameras',
            cinecameraImage,
            '?pub_category=cinecamera'
          )}
          {locationLink(
            'Cine Lenses',
            cinelenseImage,
            '?pub_category=cinelense'
          )}
          {locationLink(
            'Hybrid Cameras',
            hybridcameraImage,
            '?pub_category=hybridcamera'
          )}
          {locationLink(
            'Photography Lenses',
            photographyLenseImage,
            '?pub_category=photographylense'
          )}
          {locationLink(
            'Audio',
            audioImage,
            '?pub_category=audio'
          )}
          {locationLink(
            'Lighting & Electrics',
            lightingImage,
            '?pub_category=lighting'
          )}
          {locationLink(
            'Studio Space',
            studioImage,
            '?pub_category=studio'
          )}
          {locationLink(
            'Set Locations',
            setImage,
            '?pub_category=set'
          )}
            {locationLink(
            'Drones',
            droneImage,
            '?pub_category=drone'
          )}
          {locationLink(
            'Action Cameras',
            actionCameraImage,
            '?pub_category=actioncamera'
          )}
          {locationLink(
            'Mobile package',
            mobilepackageImage,
            '?pub_category=mobilepackage'
          )}
          {locationLink(
            'Computers',
            computerImage,
            '?pub_category=computer'
          )}
          {locationLink(
            'Gaming systems',
            gamingImage,
            '?pub_category=gaming'
          )}        
          {locationLink(
            'Virtual reality',
            vrImage,
            '?pub_category=vr'
          )}       
            {locationLink(
            'View all categories',
            allImage,
            '?pub_category='
          )}              
          </div>
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
