import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

export class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}