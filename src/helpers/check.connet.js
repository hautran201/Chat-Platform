"use strict";

const mongoose = require("mongoose");

// Count connection
const countConnect = () => {
  const numConnect = mongoose.connections.length;
  console.log(`Number of connections: ${numConnect}`);
};

module.exports = {
  countConnect,
};
