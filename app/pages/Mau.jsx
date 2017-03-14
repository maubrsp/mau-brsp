import React, { Component } from 'react';
import Page from '../pages/Page';
import MauContainer from '../containers/Mau';

class Mau extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Mau | reactGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A reactGo example of life' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <MauContainer {...this.props} />
      </Page>
    );
  }
}

export default Mau;
