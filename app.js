const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });