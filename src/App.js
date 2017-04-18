import React, { Component } from 'react';
import Icon from './Icon';
const files = require.context(
  '!svg-sprite!../node_modules/amoicons/build/svg',
  false,
  /.*\.svg$/
);
files.keys().forEach(files);
import Amoicons from 'amoicons';

class App extends Component {
  render() {
    console.log(Amoicons);
    return (
      <div>
        <div className="header">
          <h1>Amoicons</h1>
        </div>
        <div className="intro">
          <p>A set of carefully designed and engineered icons.</p>
        </div>
        {Object.keys(Amoicons).map((file, index) => {
          return <Icon type={file} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
