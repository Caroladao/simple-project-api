const express     = require( 'express' )
const routes      = express.Router()

const projectsController = require( './controllers/projectsController' )

routes.post( '/projects', projectsController.create )
routes.get( '/projects', projectsController.list )
routes.put( '/projects/:id', projectsController.checkProjectExists, projectsController.update )
routes.delete( '/projects/:id', projectsController.checkProjectExists,projectsController.delete )
routes.post('/projects/:id/tasks', projectsController.checkProjectExists,projectsController.newTask )

module.exports = routes