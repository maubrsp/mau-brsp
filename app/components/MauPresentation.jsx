import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/scoreboard';

const cx = classNames.bind(styles);

const MauPresentation = ({data}) => {
  //let data = {text:'teste aqui'}

  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('header')}>{data.text}</h3>
    </div>
  );
};

//{ data === undefined ? (<a>no data</a>) : (<a>has data {data}</a> )}

MauPresentation.propTypes = {
  data: PropTypes.object
};

export default MauPresentation;
