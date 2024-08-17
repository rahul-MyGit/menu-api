import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/category.routes";
import subCategoriesRoutes from "./routes/subcategory.routes";
import itemsRoutes from "./routes/item.routes"

const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoriesRoutes)
app.use('/api/items', itemsRoutes)

export default app;