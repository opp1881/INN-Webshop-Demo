import React from 'react';

const site1Url = 'https://inn-webshop-demo.capra.tv';
const site2Url = 'https://inn-webshop-demo-2.capra.tv';

const getCurrentLocation = () =>
  `${window.location.protocol}//${window.location.hostname}`;

const Footer = () => (
  <footer className="App-footer">
    <small>This is just a demo store</small>
    <br />
    <a
      className="text-white"
      href={getCurrentLocation() === site1Url ? site2Url : site1Url}>
      Go to another demo store
    </a>
  </footer>
);

export default Footer;
