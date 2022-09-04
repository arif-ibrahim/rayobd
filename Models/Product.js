const mongoose = require("mongoose");

// imports end

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "name field is required!"],
    },

    price: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },

    picture: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["", "available", "sold_out"],
      default: "",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
