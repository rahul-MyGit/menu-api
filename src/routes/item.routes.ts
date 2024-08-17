import express from "express";
import { createItemController,getAllItemsController, getItemsUnderCategoryController, getItemsUnderSubCategoryController, getItemByNameOrIdController, editItemController, getItemsByNameController } from "../controllers/item.controller";
import { itemSchema} from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(itemSchema) ,createItemController);
router.get('/', getAllItemsController);
router.get('/:categoryId', getItemsUnderCategoryController);
router.get('/:subCategoryId', getItemsUnderSubCategoryController);
router.get('/:identifier', getItemByNameOrIdController);
router.put('/:id', validateSchema(itemSchema) ,editItemController );
router.get('/search/:name', getItemsByNameController);

export default router;