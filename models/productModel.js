import mongoose from "mongoose";

const productInfoSchema = mongoose.Schema({
  image: {
    type: Buffer,
  },
  productId: {
    type: Number,
  },
  productName: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  strikePriceFor3MM: {
    type: String,
  },
  strikePriceFor5MM: {
    type: String,
  },
  strikePriceFor8MM: {
    type: String,
  },
  priceFor3MM: {
    type: String,
  },
  priceFor5MM: {
    type: String,
  },
  priceFor8MM: {
    type: String,
  },
});


const productInfoModel = mongoose.model("productinfo", productInfoSchema);

export default productInfoModel;