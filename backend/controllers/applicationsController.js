const Application = require('../models/applicationsModel');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create new application
exports.createApplication = catchAsyncErrors (async(req, res, next) => {
    
    const application = await Application.create(req.body);

    res.status(201).json({
        success: true,
        application
    })
})

// Get all applications => API/applications
exports.getAllApplicaions = catchAsyncErrors (async(req, res, next) => {

    const applications = await Application.find();

    res.status(200).json({
        success: true,
        count: applications.length,
        applications
    })
})

// Update application => API/application-update/:id
exports.updateApplication = catchAsyncErrors(async(req, res, next) => {
    let application = await Application.findById(req.params.id);

    if(!application) {
        return next(new ErrorHandler('Application not found', 404));
    }
    application = await Application.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        application
    })
})