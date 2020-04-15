const mongoose = require("mongoose");
let connection = null;

module.exports.connect = async () => {
  if (connection === null) {
    connection = await mongoose.createConnection(
      // Data Base Hosang
      //"mongodb+srv://omnistack:omnistack@omnistack-u2wzm.mongodb.net/restaurantemoderno?retryWrites=true&w=majority",

      // Data Base Jonas -> Base de Teste
      //
      "mongodb+srv://jonas:test01234@cluster0-wmhmj.mongodb.net/restaurante?retryWrites=true&w=majority",
      {
        bufferMaxEntries: 0,
        bufferCommands: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  }

  return connection;
};
