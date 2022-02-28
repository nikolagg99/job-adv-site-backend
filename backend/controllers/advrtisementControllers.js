const Advertisement = require('../models/advertisement');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create new advertisement
exports.createAdvertisement = catchAsyncErrors (async(req, res, next) => {
    
    const advertisement = await Advertisement.create(req.body);

    res.status(201).json({
        success: true,
        advertisement
    })
})


// Get single advertisement details => API/advertisement/:id
exports.getAdvertisement = catchAsyncErrors (async(req, res, next) => {
    
    const advertisement = await Advertisement.findById(req.params.id);
    
    if(!advertisement){
        return next(new ErrorHandler('Advertisement not found', 404));
    }

    res.status(200).json({
        success: true,
        advertisement
    })
})

// Get all advertisements => API/advertisements
exports.getAdvertisements = catchAsyncErrors (async(req, res, next) => {

    const advertisements = await Advertisement.find();

    res.status(200).json({
        // success: true,
        // count: advertisements.length,
        advertisements
    })
})

// Update advertisement => API/advertisement-update/:id
exports.updateAdvertisement = catchAsyncErrors (async(req, res, next) => {
    let advertisement = await Advertisement.findById(req.params.id);

    if(!advertisement){
        return next(new ErrorHandler('Advertisement not found', 404));
    }

    advertisement = await Advertisement.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        advertisement
    })
})

// Delete advertisement => API/advertisement-delete/:id
exports.deleteAdvertisement = catchAsyncErrors (async(req, res, next) => {
    let advertisement = await Advertisement.findById(req.params.id);

    if(!advertisement){
        return next(new ErrorHandler('Advertisement not found', 404));
    }

    await advertisement.remove();

    res.status(200).json({
        success: true,
        message: 'Advertisement is deleted'
    })
})

// ------ Auxiliary functions ------ //
