/**
 * @module react
 */
import React from 'react'

/**
 * @module SampleButton
 */
import Button from 'components/buttons/Button/Button'

/**
 * @module test
 */
import { SAMPLE_TEXT } from 'texts/test'

/**
 * Testing utilities
 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { spy } from 'sinon'

chai.use(chaiEnzyme())

describe('Components - Button', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})

describe('Components - Button - Events', () => {
  const itemSpy = spy()
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button onClick={itemSpy}/>)
    wrapper.simulate('click')
  })

  it('should trigger the onClick event when it is clicked while not disabled', () => {
    expect(itemSpy.calledOnce).to.be.true
  })

  it('should be active by default when the prop "onClick" is passed', () => {
    wrapper.setProps({onClick: null})
    expect(wrapper).to.have.attr('disabled')
    wrapper.setProps({onClick: () => {}})
    expect(wrapper).to.not.have.attr('disabled')
  })
})

