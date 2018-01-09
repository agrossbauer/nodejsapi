// Get the packages we need
var express = require('express');
var records = require('./routes/records');
// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'dummy' });
});


var recordsRoute = router.route('/records');
recordsRoute.get(records.getRecords);


var recordRoute = router.route('/records/:record_id');
recordRoute.get(function(req, res) {
  res.json({ message: 'record' });
});


// Register all our routes with /api
app.use('/api', router);



// Start the server
app.listen(port);
console.log('listening on port: ' + port);

module.exports = app;
