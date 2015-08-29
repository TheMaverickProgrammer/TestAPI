var express = require('express');
var router = express.Router();

/**
 * @api {get} /userlist/ Request List of All User information
 * @apiName GetUserList
 * @apiGroup User
 *
 *
 * @apiSuccess {JSON} All user information.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/**
 * @api {post} /adduser Add a new user record
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {JSON} JSON object with user information {"username", "fullname", "gender", "location", "age", "email"}
 *
 * @apiSuccess Record is added to the database.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/**
 * @api {post} /updateuser Update User information with a matching _id
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiParam {JSON} JSON object with user information. {"username", "fullname", "gender", "location", "age", "email"}. Existing _id must exist in the DB.
 *
 * @apiSuccess Record is updated in the database.
 */
router.post('/updateuser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToUpdate = req.body._id;

    collection.update({ '_id' : userToUpdate }, req.body, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

/**
 * @api {delete} /deleteuser/:id Delete User record with matching id
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess User record is permanently deleted from the database.
 */
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;
