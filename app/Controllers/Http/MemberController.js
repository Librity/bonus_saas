'use strict'

const UserTeam = use('App/Models/UserTeam')

class MemberController {
  async index({ request }) {
    const members = await UserTeam.query()
      .where('team_id', request.team.id)
      .with('user')
      .with('roles')
      .fetch()

    return members
  }

  async update({ request, params }) {
    const roles = request.input('roles')

    const teamJoins = await UserTeam.find(params.id)

    await teamJoins.roles().sync(roles)
  }
}

module.exports = MemberController
