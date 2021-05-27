import React from 'react';

import renderer from 'react-test-renderer';
import Login from "../../containers/Login";
import Register from "../../containers/Register";


describe('Testiki', () => {

  test('Login screenshot',()=>{
    const tree = renderer
      .create(<Login login = {() => {}} isAuthenticated = {true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('Register screenshot',()=>{
    const tree = renderer
      .create(<Register register = {() => {}} isAuthenticated = {true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})