// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// it('should render withut crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App/>, div)
// });

// ---------------------------------------------------

import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
})
