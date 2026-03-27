const express = require('express');
const router = express.Router();

// Example route — replace with your app's routes
router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

module.exports = router;
