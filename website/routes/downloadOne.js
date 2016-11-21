var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res) {

    //send .apk files from public/files
    res.setHeader('Content-disposition', 'attachment; filename='+'Evergreen.apk');  //header name that the client will see
    res.setHeader('Content-type', 'application/vnd.android.package-archive'); // .apk files
    var file = fs.createReadStream('../public/files/testFile.apk');

    file.pipe(res);
});

module.exports = router;