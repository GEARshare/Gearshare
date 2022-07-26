import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionSellBrowse.module.css';
import background from './images/IMG_1304.jpeg'
const SectionSellBrowse = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>    
      <article className={css.article}>
        <img className={css.picture} src={background}/>
        <div className={css.header}>
          <div className={css.title}>
            <FormattedMessage id="SectionSellBrowse.content" />
          </div>
          <NamedLink
          name="SearchPage"
          to={{
            search:
              '',
          }}
          className={css.button}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
        </div>

        
      </article>
      
    </div>
  );
};

SectionSellBrowse.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionSellBrowse.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionSellBrowse;
