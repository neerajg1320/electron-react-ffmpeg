const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('media'));

const storage = multer.diskStorage({
  destination: (req, file, callback ) => {
    callback(null, 'media');

  },
  filename: (req, file, callback) => {
    callback(null, Date.now()+'-'+file.originalname);
  }
});

const upload = multer({storage}).array('files');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.files);
  })
});

app.listen(8000, () => {
  console.log('App is running on port 8000');
});
