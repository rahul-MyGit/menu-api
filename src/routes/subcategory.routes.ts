import express from "express";
import { createSubCategoryController,  getAllSubCategoriesController, getAllSubCategoryController, getSubCategoryByIdOrNameController, editSubCategoryController } from "../controllers/subcategory.controller";
import { subCategorySchema  } from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(subCategorySchema) ,createSubCategoryController);
router.get('/', getAllSubCategoriesController); //Get All Sub-category exists
router.get('/:categoryId', getAllSubCategoryController); // Get all sub-category under a category
router.get('/:idOrName', getSubCategoryByIdOrNameController); // search subcategory using id or name
router.put('/:id', validateSchema(subCategorySchema), editSubCategoryController);

export default router;