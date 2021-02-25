class EmailValidator {
  isValid (email) {
    return true
  }
}
describe('Email Validator', () => {
  test('Shout return true if validato returns tue', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })
})
