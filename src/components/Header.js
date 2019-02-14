import React from 'react';

import elektroLogo from '../assets/images/elektro-white.png';
import skoLogo from '../assets/images/trail-running-shoe-white.png';

const Header = () => (
  <header className="App-header">
    <img
      src={process.env.REACT_APP_SITE === 'site2' ? skoLogo : elektroLogo}
      className="App-logo"
      alt="logo"
    />
  </header>
);

export default Header;
