const db = require("../db/dbTest");
const model = require("../models/modelTest");

const test = db.absd;

exports.create = (req, res) => {
  console.log("create method", req.body);
  const ab = test({
    name: req.body.name,
  });
  ab.save()
    .then((aaa) => {
      console.log("afdsfds");
      res.send({ message: "send Method", data: req.body });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Data Not Found !!",
      });
    });
};

exports.getAll = (req, res) => {
  console.log("getAll method");
  test.find().then(
    (asd) => {
      console.log("vvvvvvvvvv", asd);
      res.send({ data: asd });
    },
    (err) => {
      console.log("errorrrrrrr", err);
      res.send({ data: err });
    }
  );
};

exports.delete = (req, res) => {
  console.log("delete method", req.params);
  test.deleteOne({ _id: `${req.params._id}` }).then(
    (asd) => {
      console.log("delete", asd);
      res.send({ data: asd });
    },
    (err) => {
      console.log("errorrrrrrr delete", err);
      res.send({ data: err });
    }
  );
};
