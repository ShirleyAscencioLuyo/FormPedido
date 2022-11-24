var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dbRestaurante",
  });

  conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });