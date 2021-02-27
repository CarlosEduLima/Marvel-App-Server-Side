const query = ({ connects, models }) => {
  return Object.freeze({
    insertNewUser,
    findUserByEmail
  })

  async function insertNewUser (data) {
    try {
      const User = models.User
      await User.create(data)
      return {
        success: true
      }
    } catch (e) {
      return { success: false, error: e }
    }
  }
  async function findUserByEmail (email) {
    const User = models.User
    const user = await User.findOne({
      where: { email: email }
    })
    return {
      user
    }
  }
}

module.exports = query
