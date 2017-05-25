import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>HOME</h1>
        <Footer />
      </div>
    );
  }
}


export default connect()(Home);