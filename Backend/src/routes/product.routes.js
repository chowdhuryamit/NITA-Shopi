import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addProduct, deleteProduct, getUserProduct } from "../controllers/product.controller.js"

const router=Router();

router.use(verifyJWT);

router.post('/addProduct',upload.single("productImage"),addProduct);
router.get('/getUserProduct',getUserProduct);
router.delete('/deleteProduct',deleteProduct);

export default router