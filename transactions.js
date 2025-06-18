const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
  const { from, to, amount } = req.body;
  const tax = amount * 0.15;
  const net = amount - tax;
  res.json({ status: 'success', sent: net, tax });
});

module.exports = router;