import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link className='btn' to='/classlist/MATH1010'>Math 1010</Link>
        <Link className='btn' to='/classlist/ENG2010'>English 2010</Link>
        <Link className='btn' to='/classlist/BIO2020'>Biology 2020</Link>
      </div>
    );
  }
}
