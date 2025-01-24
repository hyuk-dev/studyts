import express from "express";
import testRouter from "./routingTest/controller";
import productRouter from "./product/controller";

const router = express.Router();

router.use("/test", testRouter);
router.use("/products", productRouter);

export default router;