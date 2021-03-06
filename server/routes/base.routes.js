import { ShowRoutes } from './show.routes'
import { UserRoutes } from './user.routes'

export class BaseRoutes {
  static createRoutes (app, passport) {
    const showRoutes = new ShowRoutes()
    const userRoutes = new UserRoutes(passport)
    app.use('/ping', (req, res) => res.json('pong'))
    app.use('/api/shows', showRoutes.createRoutes())
    app.use('/user', userRoutes.createRoutes())
  }

  static authenticate (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.status(401).json({
      msg: 'Unauthorized'
    })
  }
}
