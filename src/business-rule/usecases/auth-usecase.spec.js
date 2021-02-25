const MissingParamError = require('../../utils/errors/missing-param-error')
class AuthUseCase {
  async auth (email, password) {
    if (!email) {
      throw new MissingParamError('email')
    }
    if (!password) {
      throw new MissingParamError('password')
    }
  }
}

describe('Auth UseCase', () => {
  test('should throw if email is provided ', () => {
    const sut = new AuthUseCase()
    const promisse = sut.auth()
    expect(promisse).rejects.toThrow(new MissingParamError('email'))
  })
  test('should throw if password is provided ', () => {
    const sut = new AuthUseCase()
    const promisse = sut.auth('email@mail.com')
    expect(promisse).rejects.toThrow(new MissingParamError('password'))
  })
})
