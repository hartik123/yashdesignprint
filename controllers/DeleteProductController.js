import productInfoModel from "../models/productModel.js";

const DeleteProductController = async (req, res)=>{
console.log(req.body)
    const result = await productInfoModel.find({productId: req.body.productId});
    
    if(result.length==0){
        res.send({
            output: 0,
            status: "Product Not there",
            description: "Product Not there"
        })
    }
    else{

        await productInfoModel.deleteOne({productId: req.body.productId});

        res.send({
            output: 1,
            status: "Product Deleted",
            description: "Product Deleted"
        })
    }

}

export default DeleteProductController;