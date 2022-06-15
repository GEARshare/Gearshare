import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionSellGear.module.css';
import background from './images/IMG_1302.jpeg'
const SectionSellGear = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>    
      <article className={css.article}>
        <img className={css.picture} src={background}/>
        <div className={css.header}>
          <div className={css.title}>
            <FormattedMessage id="SectionSellGear.content" />
          </div>
                  <NamedLink
          name="AboutPage"
          className={css.button}
        >
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
        </div>

        
      </article>
      
    </div>
  );
};

SectionSellGear.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionSellGear.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionSellGear;
