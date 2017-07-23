/** Including packages**/
const express = require('express');
const router = express.Router();

/**For any incoming req **/
router.get('/', function (req, res) {
  res.send('Api Works');
});

/**We need to export the module router**/
module.exports = router;

