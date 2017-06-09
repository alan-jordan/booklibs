import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('App container exists in App', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.app-container').exists(), true)
})

test('Header div exists in App', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.header').exists(), true)
})

test('Shallow test for H1 tag', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.contains(<h1></h1>), true)
})

test('Mount test for cover div', t => {
  const className = mount(<Cover />)
  const fooInner = wrapper.find('.frontPageInfo')
  t.is(fooInner.is('.frontPageInfo'), true)
})
