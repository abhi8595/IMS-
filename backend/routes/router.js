const express = require('express');
const router = express.Router();

const {createUser} = require('../controllers/registerUser');
const {User} = require('../controllers/signUser');
const {addInventoryData}= require('../controllers/addInventoryData');
 const {getAllInventory} = require('../controllers/getInventory');
const {delQr} = require('../controllers/delQr');
const {updateInventoryData} = require('../controllers/updateInventory');
 const {getInventoryById} = require('../controllers/getInventoryById');
const {ReceivedUpdate}= require('../controllers/receivedUpdate');


router.post('/registerUser',createUser);
router.post('/login',User);
router.post('/addInventoryData',addInventoryData);
 router.get('/getInventoryData',getAllInventory);
router.delete('/remove/:id',delQr);
router.put('/edit/:id',updateInventoryData);
 router.get('/getdata/:id',getInventoryById);
router.put('/receivedupdate',ReceivedUpdate);


module.exports = router;