import express from "express";
import multer from "multer";
const router = express.Router();

import AddProductController from "../controllers/AddProductController.js";
import GetProductsController from "../controllers/GetProductsController.js";
import GetProductController from "../controllers/GetProductController.js";
import DeleteProductController from "../controllers/DeleteProductController.js";



var upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})

router.post('/hello',AddProductController)

router.post('/addproduct',upload.single('image'), AddProductController)
router.get('/getproducts', GetProductsController)
router.get('/getproduct', GetProductController)
router.post('/deleteproduct', DeleteProductController)

export default router;
