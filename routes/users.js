const { Router } = require('express');
const router = Router();
const User = require('../models/User')

router.get('/users', (req, res) => {
  User.find().then((result) => {
    res.send(result)
}).catch((e) => {
    console.log(e)
})
})

router.post('/add-user/:email/:password', function(req, res) {    
  const user = new User({
      email: req.params.email,
      password: req.params.password
  });
  user.save().then((result) => {
      res.send(result)
  }).catch((e) => {
      console.log(e)
  })
});

router.delete('/delete-user/:id', function(req, res) {    
  User.findById(req.params.id).deleteOne().then((result) => {
      res.send(result)
  }).catch((e) => {
      console.log(e)
  })
});

module.exports = router;