import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.module.css';
import background from './images/howitworkImage.jpg'
const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>    
      <article className={css.article}>
        <img className={css.picture} src={background}/>
        <div className={css.header}>
          <div className={css.title}>
            <FormattedMessage id="SectionHowItWorks.titleLineOne" />
            <br />
            <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
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

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
