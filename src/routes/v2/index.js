const patientsRoutes = require('./patients-routes');
const exercisesRoutes = require('./exercises-routes');
const musclesRoutes = require('./muscles-routes');

module.exports = (app) => {
  app.use('/api/v2/patients', patientsRoutes);
  app.use('/api/v2/exercises', exercisesRoutes);
  app.use('/api/v2/muscles', musclesRoutes);
};
