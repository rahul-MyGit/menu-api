import express from "express";
import { createSubCategoryController,  getAllSubCategoriesController, getAllSubCategoryController} from "../controllers/subcategory.controller";
import { subCategorySchema  } from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(subCategorySchema) ,createSubCategoryController);
router.get('/', getAllSubCategoriesController);
router.get('/:categoryId', getAllSubCategoryController);

export default router;