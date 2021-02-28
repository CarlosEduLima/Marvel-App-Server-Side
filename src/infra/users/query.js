const query = ({ connects, models }) => {
  return Object.freeze({
    insertNewUser,
    findUserByEmail,
    findUserById,
    getUserPassword,
    deleteUser,
    updateUserName,
    updateUserEmail,
    updateUserPassword
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
  async function findUserById (userId) {
    const User = models.User
    const user = await User.findOne({
      where: { id: userId }
    })
    return {
      user
    }
  }
  async function getUserPassword (userId) {
    const User = models.User
    const { password } = await User.findOne({
      where: { id: userId }
    })
    return {
      password
    }
  }
  async function deleteUser (user) {
    try {
      await user.destroy()
      return {
        success: true
      }
    } catch (e) {
      return { success: false, error: e }
    }
  }

  async function updateUserName (user, newName) {
    try {
      user.name = newName
      await user.save()
      return {
        success: true
      }
    } catch (e) {
      return { success: false, error: e }
    }
  }
  async function updateUserPassword (user, password) {
    try {
      user.password = password
      await user.save()
      return {
        success: true
      }
    } catch (e) {
      return { success: false, error: e }
    }
  }
  async function updateUserEmail (user, newEmail) {
    try {
      user.email = newEmail
      await user.save()
      return {
        success: true
      }
    } catch (e) {
      return { success: false, error: e }
    }
  }
}

module.exports = query
