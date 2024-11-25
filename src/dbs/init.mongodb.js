"use strict";
const mongoose = require("mongoose");

const {
  db: { host, port, name },
} = require("../configs/config.mongodb");
const { countConnect } = require("../helpers/check.connet");

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then(() => {
        console.log("Connected to MongoDB successfully");
        countConnect();
      })
      .catch((err) => {
        console.log("Connected to MongoDB failed: " + err.message);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongDB = Database.getInstance();

module.exports = instanceMongDB;
