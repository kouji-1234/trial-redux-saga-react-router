import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <p>ヘッダー</p>
        <nav>
          <Link to='/home'>home</Link>
          / <Link to='/counter'>counter</Link>
          / <Link to='/content1'>content1</Link>
          / <Link to='/async'>Async</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
