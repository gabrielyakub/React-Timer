const React = require('react');
const Nav = require('Nav');

var Main = (props) => (
      <div>
        <div>
          <Nav/>
          <div>
            {props.children}
          </div>
        </div>
      </div>
);


module.exports = Main;
