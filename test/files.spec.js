/* global describe, it */
import expect from 'expect.js'
import { checkFileSize, makeFileObj } from '../utils/files'

const fileObjFromFileAPI = {
  lastModified: 1530855747912,
  lastModifiedDate: "Fri Jul 06 2018 01: 42: 27 GMT - 0400(Eastern Daylight Time)",
  name: "jacket.jpg",
  path: "jacket.jpg",
  size: 450533,
  type: "image/jpeg",
}

describe('File object checking and creation', () => {
  it('should check the file is under 10mb', () => {
    expect(checkFileSize(fileObjFromFileAPI)).to.be(true)
  })

  it('should return a file object with a certain shape', () => {
    expect(makeFileObj(fileObjFromFileAPI).id).to.be.finite
    expect(makeFileObj(fileObjFromFileAPI).type).to.be.a('string')
    expect(makeFileObj(fileObjFromFileAPI).name).to.be.a('string')
    expect(makeFileObj(fileObjFromFileAPI).size).to.be.finite
  })
})
