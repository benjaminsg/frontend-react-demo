const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const React = require('react');

React.useLayoutEffect = React.useEffect;

Enzyme.configure({ adapter: new Adapter() });