const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

//add prefix of api to all the api routes 
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
