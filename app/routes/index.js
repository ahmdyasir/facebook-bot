const express = require('express');
const router = express.Router();

const ResponseMiddleware = require('../middlewares/ResponseMiddleware');
const chatBotController = require('../controllers/chatBotController');

/* GET home page. */
router.get('/', chatBotController.index, ResponseMiddleware);
router.get('/webhook', chatBotController.getWebHook, ResponseMiddleware);
router.post('/webhook', chatBotController.postWebHook, ResponseMiddleware);

module.exports = router;
