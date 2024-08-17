import express from "express";
import { createSubCategoryController } from "../controllers/subcategory.controller";
import { subCategorySchema  } from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(subCategorySchema) ,createSubCategoryController);

export default router;