const waiter = require("../models/waiter");
const database = require("../infra/database");
const prepareResponse = require("../infra/prepareResponse");

module.exports = {
  create(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      waiter(connection)
        .create({...data})
        .then(createdWaiter => {
          // // connection.close();
          callback(null, prepareResponse(createdWaiter));
        })
        .catch(err => {
          console.log("err", err);
        });
    });
  },

  list(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      // let data = JSON.parse(event.body);

      // menu(connection).find({ company: "Pizzaria Ibiza" })
      waiter(connection)
        .find({})
        .then((waiterList) => {
          // // connection.close();
          callback(null, prepareResponse(waiterList));
        })
        .catch(err => {
          console.log("err", err);
          callback(null, prepareResponse(err, 500));
        });
    });
  },


  delete(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      // menu(connection).find({ company: "Pizzaria Ibiza" })
      waiter(connection)
        .remove({_id: data._id})
        .then((res) => {
          // connection.close();
          callback(null, prepareResponse(res));
        })
        .catch(err => {
          console.log("err", err);
          callback(null, prepareResponse(err, 500));
        });
    });
  },
};
