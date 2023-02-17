const Product = require("../../Models/Product");
const status = require("../../Common/Constants/status");

module.exports.store = async (req, res) => {
  try {
    let product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      picture: req.files,
      status: req.body.status,
    });

    product
      .save()
      .then((result) => {
        res.status(status.code.HTTP_201_CREATED).json({
          message: status.message.PRODUCT_ADDED_SUCCESS,
        });
      })
      .catch((error) => {
        res.status(status.code.HTTP_400_BAD_REQUEST).json({
          error,
        });
      });
  } catch (error) {
    res.status(status.code.HTTP_400_BAD_REQUEST).json({
      message: status.message.INVALID_REQUEST_PAYLOAD,
    });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    await Product.find({}).then((result) => {
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};
