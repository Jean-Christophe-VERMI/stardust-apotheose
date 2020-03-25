const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404);
    }
  } catch (err) {
    console.error(err.message);
    throw new Error('User not found');
  }
});

router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { name, email });

    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('User not updated');
  }
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    res.send(deleteUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('User not deleted');
  }
});

module.exports = router;
