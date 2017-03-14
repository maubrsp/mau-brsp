import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import MauPresentation from '../components/MauPresentation'
import styles from '../css/components/mau';

const cx = classNames.bind(styles);

class Mau extends Component {
  render() {
    let data = getJsonData();
    return (
      <div className={cx('area')}>
        teste
        <MauPresentation data={data} />
      </div>
    );
  }
}

function getJsonData(){
  return{
    text:'teste aqui'
  }
}
/**/

//
// function mapStateToProps(state) {
//   return {
//     presentation: state.presentation
//   };
// }


// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default Mau;
//export default connect(mapStateToProps)(Mau);
