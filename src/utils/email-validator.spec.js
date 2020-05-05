const EmailValidator = require('./email-validator')
const validator = require('validator')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('munhozfontana@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return fasle if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_emailmail.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any_emailmail.com')
    expect(validator.email).toBe('any_emailmail.com')
  })
})
