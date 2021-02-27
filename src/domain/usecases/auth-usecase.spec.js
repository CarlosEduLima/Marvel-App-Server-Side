const { MissingParamError, InvalidParamError } = require('../../utils/errors')
class AuthUseCase {
  constructor (loadUserByEmailRepository) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
  }

  async auth (email, password) {
    if (!email) {
      throw new MissingParamError('email')
    }
    if (!password) {
      throw new MissingParamError('password')
    }
    if (!this.loadUserByEmailRepository) {
      throw new MissingParamError('loadUserByEmailRepository')
    }
    if (!this.loadUserByEmailRepository.load) {
      throw new InvalidParamError('loadUserByEmailRepository')
    }
    await this.loadUserByEmailRepository.load(email)
  }
}
const makeSut = () => {
  class LoadUserByEmailSpy {
    async load (email) {
      this.email = email
    }
  }
  const loadUserByEmailSpy = new LoadUserByEmailSpy()
  const sut = new AuthUseCase(LoadUserByEmailSpy)
  return {
    sut,
    loadUserByEmailSpy
  }
}
describe('Auth UseCase', () => {
  test('should throw if email is not provided ', async () => {
    const { sut } = makeSut()
    const promisse = sut.auth()
    expect(promisse).rejects.toThrow(new MissingParamError('email'))
  })

  test('should throw if password is not provided ', async () => {
    const { sut } = makeSut()
    const promisse = sut.auth('any_email@mail.com')
    expect(promisse).rejects.toThrow(new MissingParamError('password'))
  })

  test('should throw if no loadUserByEmailRepository is provided', async () => {
    const sut = new AuthUseCase()
    const promisse = sut.auth('email@mail.com', 'passord')
    expect(promisse).rejects.toThrow(new MissingParamError('loadUserByEmailRepository'))
  })
  test('should throw if no loadUserByEmailRepository has no method', async () => {
    const sut = new AuthUseCase({})
    const promisse = sut.auth('email@mail.com', 'passord')
    expect(promisse).rejects.toThrow(new InvalidParamError('loadUserByEmailRepository'))
  })
})
