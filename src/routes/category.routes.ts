import express from "express";
import { createCategoryController, getAllCategoryController, getCategoryByIdOrNameController, editCategoryController } from "../controllers/category.controller";
import { categorySchema  } from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(categorySchema) ,createCategoryController);
router.get('/', getAllCategoryController);
router.get('/:identifier', getCategoryByIdOrNameController)
router.put('/:id', validateSchema(categorySchema), editCategoryController)
export default router;