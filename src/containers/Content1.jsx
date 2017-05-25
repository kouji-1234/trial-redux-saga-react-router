import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Content1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Content1</h1>
        <Footer />
      </div>
    );
  }
}


export default connect()(Content1);