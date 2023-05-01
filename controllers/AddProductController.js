import productModel from '../models/productModel.js';

const AddProductController = async (req, res) =>{
    console.log(req.file)
    console.log(req.body)

    const result = await productModel.find({productId: req.body.productId});

    if(result.length==0){

        const product =  productModel({
            image: req.file.buffer,
            productId: req.body.productId,
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            strikePriceFor3MM: req.body.strikePriceFor3MM,
            strikePriceFor5MM: req.body.strikePriceFor5MM,
            strikePriceFor8MM: req.body.strikePriceFor8MM,
            priceFor3MM: req.body.priceFor3MM,
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