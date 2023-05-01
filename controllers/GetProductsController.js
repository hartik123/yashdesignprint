import productInfoModel from "../models/productModel.js";

const GetProductsController = async (req, res)=>{

    const result = await productInfoModel.find();

    if(result.length==0){
        res.send({
            output: 0,
            status: "No Product",
            description: "No Product"
        })
    }
    else{
        res.send({
            output: 1,
            status: "Got Product",
            description: "Got Product",
            products: result
        })
    }
    
}


export default GetProductsController;