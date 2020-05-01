module.exports = class UnathorizedError extends Error {
  constructor () {
    super('Unathorized')
    this.name = 'UnathorizedError'
  }
}
