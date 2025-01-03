import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addProduct, deleteProduct, getAllProduct, getUserProduct, updateProductImage, updateProductInfo, viewProduct } from "../controllers/product.controller.js"

const router=Router();

router.use(verifyJWT);

router.post('/addProduct',upload.single("productImage"),addProduct);
router.get('/getUserProduct',getUserProduct);
router.delete('/deleteProduct',deleteProduct);
router.patch('/updateProductInfo',updateProductInfo);
router.patch('/updateProductImage',upload.single("productImage"),updateProductImage);
router.get('/viewProduct',viewProduct);
router.get('/getAllProduct',getAllProduct);

export default router