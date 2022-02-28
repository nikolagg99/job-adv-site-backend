const express = require('express');
const router = express.Router();

const { 
    createApplication,
    getAllApplicaions,
    updateApplication
    
    } = require('../controllers/applicationsController');

    router.route('/applications').get(getAllApplicaions);

    router.route('/application/create').post(createApplication);

    router.route('/application-update/:id').put(updateApplication);

    module.exports = router;