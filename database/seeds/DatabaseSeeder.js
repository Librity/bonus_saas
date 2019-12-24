'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Luisito',
      email: 'noone@cares.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'Coding Kikes',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
