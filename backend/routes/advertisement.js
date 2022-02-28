const express = require('express');
const router = express.Router();

const { 
    getAdvertisements,
    createAdvertisement,
    getAdvertisement,
    updateAdvertisement,
    deleteAdvertisement 
    
    } = require('../controllers/advrtisementControllers');

router.route('/advertisements').get(getAdvertisements);
router.route('/advertisement/:id').get(getAdvertisement);

router.route('/advertisement/create').post(createAdvertisement);

router.route('/advertisement-update/:id').put(updateAdvertisement);

router.route('/advertisement-delete/:id').delete(deleteAdvertisement);

module.exports = router;