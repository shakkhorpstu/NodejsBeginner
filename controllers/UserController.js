const User = require('../models/user');

const index = (req, res) => {
    User.find().sort({ createdAt: -1 })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const show = (req, res) => {
    User.findById(req.params.id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

const store = (req, res) => {
    let data = req.body;
    let user = new User(req.body);
    user.save().then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

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

const destroy = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }).then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

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