import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบชื่อ(name)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('บวรพงศ์')
  })

  it('ตรวจสอบนามสกุล(surname)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h2')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('นาคสุข')
  })

  it('ตรวจสอบรหัสนักศึกษา(studentid)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h3')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('6604101344')
  })

  it('ตรวจสอบชื่อเล่น(nikename)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h4')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('ตี๋')
  })
})
