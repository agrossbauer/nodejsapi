var records = require('../models/records');

function getRecords(req, res) {       
        //if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(records.findRecords());   
}



module.exports = {getRecords};