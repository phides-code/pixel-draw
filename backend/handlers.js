"use strict";
require("dotenv").config();
const assert = require('assert');
const { resolveSoa } = require('dns');
const CryptoJS = require("crypto-js");
const { v4: uuidv4 } = require("uuid");

/// request-promise stuff //////////////////////////////////////////////////////
const request = require('request-promise');
// const { YELP_TOKEN } = process.env;
// const YelpApiHeader = { "Authorization": `Bearer ${YELP_TOKEN}`};
//////////////////////////////////////////////////////////////////////////////

/// mongo stuff //////////////////////////////////////////////////////////////
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
////////////////////////////////////////////////////////////////////////////

/// handler functions here
/////////////////////////////////////////////////////////////////////////


/// export handler functions
// module.exports = {
  
  
// };