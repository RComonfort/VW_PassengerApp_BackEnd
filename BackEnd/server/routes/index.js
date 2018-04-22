const authMiddleware = require('../middlewares/authentication');


const projectsController = require('../controllers').projects;
const craftersController = require('../controllers').crafters;
const stationsController = require('../controllers').stations;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the VW Passenger App API!',
  }));

  //Autentication routes
  app.post('/api/login', authenticationController.login);

  //Routes for the Project table
  app.post('/api/projects', projectsController.create);  
  app.get('/api/projects', projectsController.list);
  app.get('/api/projects/:id', projectsController.retrieve);
  app.put('/api/projects/:id', projectsController.update);
  app.delete('/api/projects/:id', projectsController.destroy);

  //Routes for the Crafter table
  app.post('/api/crafters', craftersController.create);  
  app.get('/api/crafters', craftersController.list);
  app.get('/api/crafters/:id', craftersController.retrieve);
  app.put('/api/crafters/:id', craftersController.update);
  app.delete('/api/crafters/:id', craftersController.destroy);

  //Routes for the Station table
  app.post('/api/stations', stationsController.create);  
  app.get('/api/stations', stationsController.list);
  app.get('/api/stations/:id', stationsController.retrieve);
  app.put('/api/stations/:id', stationsController.update);
  app.delete('/api/stations/:id', stationsController.destroy);
};