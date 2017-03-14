import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <div>
        <Link
          to="/"
          className={cx('logo')}
          activeClassName={cx('active')}>Maurício César</Link>

          <ul>
            <li><Link to="/mau" className={cx('item')} activeClassName={cx('active')}>curriculum</Link></li>
            <li><Link to="/about" className={cx('item')} activeClassName={cx('active')}>contato</Link></li>
            { user.authenticated ? (
              <li><Link
                onClick={logOut}
                className={cx('item')} to="/">Logout</Link></li>
            ) : (
              <li><Link className={cx('item')} to="/login">Log in</Link></li>
            )}
            <li><Link className={cx('item')} to="/vote">labs</Link></li>
          </ul>
        </div>
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
