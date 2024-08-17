import express from "express";
import { createCategoryController } from "../controllers/category.controller";
import { categorySchema  } from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(categorySchema) ,createCategoryController);

export default router;