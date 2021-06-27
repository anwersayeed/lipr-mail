// // routes/api/mail.js

// const express = require('express');
// const router = express.Router();

// // Load mails model
// const Mail = require('../../models/Mail');

// // @route GET api/mails/test
// // @description tests mailss route
// // @access Public
// router.get('/test', (req, res) => res.send('mails route testing!'));

// // @route GET api/mails
// // @description Get all mailss
// // @access Public
// router.get('/', (req, res) => {
//   Mail.find()
//     .then((mails) => res.json(mails))
//     .catch((err) => res.status(404).json({ noMailsfound: 'No Mails found' }));
// });

// // @route GET api/mails/:id
// // @description Get single mails by id
// // @access Public
// router.get('/:id', (req, res) => {
//   Mail.findById(req.params.id)
//     .then((mails) => res.json(mails))
//     .catch((err) => res.status(404).json({ nomailsfound: 'No mails found' }));
// });

// // @route GET api/mails
// // @description add/save mails
// // @access Public
// router.post('/', (req, res) => {
//   Mail.create(req.body)
//     .then((mails) => res.json({ msg: 'mails added successfully' }))
//     .catch((err) =>
//       res.status(400).json({ error: 'Unable to add this mails' })
//     );
// });

// // @route GET api/mails/:id
// // @description Update mails
// // @access Public
// router.put('/:id', (req, res) => {
//   Mail.findByIdAndUpdate(req.params.id, req.body)
//     .then((mails) => res.json({ msg: 'Updated successfully' }))
//     .catch((err) =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });

// // @route GET api/mails/:id
// // @description Delete mails by id
// // @access Public
// router.delete('/:id', (req, res) => {
//   Mail.findByIdAndRemove(req.params.id, req.body)
//     .then((mails) => res.json({ mgs: 'mails entry deleted successfully' }))
//     .catch((err) => res.status(404).json({ error: 'No such a mails' }));
// });

// module.exports = router;

// routes/api/mail.js
var cron = require('node-cron');
const express = require('express');
const router = express.Router();

// Load mails model
const Mail = require('../../models/Mail');

const cronStr = {
  0: '*/30 * * * * *',
  1: '* * * * * 0-7',
  2: '* * * * 1-12 *',
  3: '* * * * 1-12 *',
};

export let data;

// @route GET api/mails/test
// @description tests mailss route
// @access Public
router.get('/test', (req, res) => res.send('mails route testing!'));

// @route GET api/mails
// @description Get all mailss
// @access Public
router.get('/', (req, res) => {
  Mail.find()
    .then((mails) => res.json(mails))
    .catch((err) => res.status(404).json({ noMailsfound: 'No Mails found' }));
});

// @route GET api/mails/:id
// @description Get single mails by id
// @access Public
router.get('/:id', (req, res) => {
  Mail.findById(req.params.id)
    .then((mails) => res.json(mails))
    .then((mail) => (data = mail))
    .catch((err) => res.status(404).json({ nomailsfound: 'No mails found' }));
});

// @route GET api/mails
// @description add/save mails
// @access Public
router.post('/', (req, res) => {
  Mail.create(req.body)
    .then((mails) => res.json({ msg: 'mails added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this mails' })
    );
});

// @route GET api/mails/:id
// @description Update mails
// @access Public
router.put('/:id', (req, res) => {
  Mail.findByIdAndUpdate(req.params.id, req.body)
    .then((mails) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/mails/:id
// @description Delete mails by id
// @access Public
router.delete('/:id', (req, res) => {
  Mail.findByIdAndRemove(req.params.id, req.body)
    .then((mails) => res.json({ mgs: 'mails entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a mails' }));
});

module.exports = {
  router,
};
