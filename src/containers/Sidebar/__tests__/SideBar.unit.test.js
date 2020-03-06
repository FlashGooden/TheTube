import React from 'react'
import {shallow} from 'enzyme'
import {SideBar} from '../SideBar'

test('should render Sidebar', ()=> {
  const wrapper = shallow(
    <SideBar />
  )
  expect(wrapper).toMatchSnapshot()
})
