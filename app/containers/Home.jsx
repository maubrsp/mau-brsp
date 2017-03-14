import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/home';
import imageBkg from '../images/home_bkg.jpg';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Home = () => {
  return (
    <div className={cx('mau')}>
      <a><img className={cx('img_bkg')} alt="loading" src={imageBkg} /></a>
      <h1 className={cx('header')}>Maurício César dfafg asdg asdg re trjytejtrbregqreg erhewdfbfdb</h1>
    </div>
  );
};

export default Home;
