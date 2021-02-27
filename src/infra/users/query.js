const query = ({ connects, models }) => {
  return Object.freeze({
    insertNewUser
  })

  async function insertNewUser (data) {
    try {
      const User = models.User
      console.log(data)
      const res = await User.create(data.body)
      return res
    } catch (e) {
      console.log('Error: ', e)
    }
  }
}

module.exports = query
