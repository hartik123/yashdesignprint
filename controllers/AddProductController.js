import productModel from '../models/productModel.js';

const AddProductController = async (req, res) =>{

    const result = await productModel.find({productId: req.body.productId});

    if(result.length==0){

        const product =  productModel({
            image: req.file.buffer,
            productId: req.body.productId,
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            strikePriceFor4MM: req.body.strikePriceFor4MM,
            strikePriceFor5MM: req.body.strikePriceFor5MM,
            strikePriceFor8MM: req.body.strikePriceFor8MM,
            priceFor4MM: req.body.priceFor4MM,
            priceFor5MM: req.body.priceFor5MM,
            priceFor8MM: req.body.priceFor8MM,
        })

        await product.save()

        res.send({
            output: 1,
            status: "Product Added",
            description: "Product Added Successfully"
        })

    }
    else{
        res.send({
            output: 0,
            status: "Product exists",
            description: "Product is already present"
        })
    }
}

export default AddProductController;