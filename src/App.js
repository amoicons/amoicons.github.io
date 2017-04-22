import React, { Component } from 'react';
import Icon from './Icon';
import Amoicons from 'amoicons';

const files = require.context(
  '!svg-sprite!../node_modules/amoicons/build/svg',
  false,
  /.*\.svg$/
);
files.keys().forEach(files);

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Amoicons</h1>
        </div>
        <div className="intro">
          <p>A set of carefully designed and engineered icons.</p>
        </div>
        <section className="section">
          {Object.keys(Amoicons).map((file, index) => (
            <div className="icon-block" key={index}>
              <Icon
                type={file}
                height={Amoicons[file].height}
                width={Amoicons[file].width}
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
