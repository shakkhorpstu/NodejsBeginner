const User = require('../models/user');
const Joi = require('@hapi/joi');

const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required()
});

/** 
 * Get all users
*/
const index = (req, res) => {
    if(req.session.cart) {
        console.log(req.session.cart);
    } else {
        req.session.cart = [
            {id: 1, name: 'Shakkhor'},
            {id: 2, name: 'Yousuf'}
        ];
    }
    User.find().sort({ createdAt: -1 })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

/** 
 * Get single user instance
*/
const show = (req, res) => {
    if(req.session.cart) {
        console.log(req.session.cart);
    }
    User.findById(req.params.id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

/** 
 * Store user
*/
const store = (req, res) => {
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).send(error.details[0].message);
    }
    
    let user = new User(req.body);
    user.save().then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

/** 
 * Update user instance 
*/
const update = (req, res) => {
    let data = req.body;
    User.findOneAndUpdate(
        { _id: req.params.id },
        data
    ).then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

/** 
 * Delete user
*/
const destroy = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }).then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

/** 
 * File upload
*/
const fileUpload = (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.sampleFile;
    
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv('public/images/filename.jpg', function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.send('File uploaded!');
      });
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
    fileUpload
}