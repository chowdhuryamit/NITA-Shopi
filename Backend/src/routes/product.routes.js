import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addProduct } from "../controllers/product.controller.js"

const router=Router();

router.use(verifyJWT);

router.post('/addProduct',upload.single("productImage"),addProduct);

export default router