import express from "express";
import { createItemController } from "../controllers/item.controller";
import { itemSchema} from "../utils/zod-schemas";
import { validateSchema } from "../middlewares/validation.middleware";

const router = express.Router();

router.post('/', validateSchema(itemSchema) ,createItemController);

export default router;