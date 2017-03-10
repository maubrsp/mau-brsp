import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchListIfNeeded} from "../actions/fetchList";

@connect(state => {
  return {
    apiList: state.apiList
  };
})
export class List extends Component {

  componentDidMount() {
    const {dispatch, params} = this.props;
    dispatch(List.fetchInitialComponentData(params));
  }

  static fetchInitialComponentData(params) {
    return fetchListIfNeeded(params);
  }

  render() {
    const {apiList} = this.props;
    const {items} = apiList;
    return (
      <article>
        <header>
          <h1>List Page</h1>
        </header>
        <section>
          This is the list page.
          <ul>
            {items.map(item => {
              return (
                <li key={item.id}>{item.text}</li>
              )
            })}
          </ul>
        </section>
      </article>
    )
  }
}