import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createItemController = async (req: Request, res: Response) => {
    try {
        const { baseAmount, discount, ...rest } = req.body;
        const totalAmount = baseAmount - discount;
        const item = await prisma.item.create({
            data: { ...rest, baseAmount, discount, totalAmount },
        });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error while creating the items'});
    }
};

export const getAllItemsController = async (req: Request, res: Response) => {
    try {
      const items = await prisma.item.findMany();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching items' });
    }
}


export const getItemsUnderCategoryController = async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      const items = await prisma.item.findMany({
        where: { categoryId: parseInt(categoryId) },
      });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching items' });
    }
}

export const getItemsUnderSubCategoryController = async (req: Request, res: Response) => {
    try {
      const { subCategoryId } = req.params;
      const items = await prisma.item.findMany({
        where: { subCategoryId: parseInt(subCategoryId) },
      });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching items' });
    }
}

// export const getItemByNameController = async (req: Request, res: Response) => {
//     try {
//       const { name } = req.params;
//       const items = await prisma.item.findMany({
//         where: {
//           name: {
//             contains: name,
//             mode: 'insensitive',
//           },
//         },
//       });
//       res.json(items);
//     } catch (error) {
//       res.status(500).json({ error: 'Error searching items' });
//     }
// };


export const getItemByNameOrIdController =  async (req: Request, res: Response) => {
    try {
      const { identifier } = req.params;
      const item = await prisma.item.findFirst({
        where: {
          OR: [
            { id: parseInt(identifier) || undefined },
            { name: identifier },
          ],
        },
      });
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching item' });
    }
};

export const editItemController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, image, description, taxApplicability, tax, baseAmount, discount } = req.body;
      const totalAmount = baseAmount - discount;
      const updatedItem = await prisma.item.update({
        where: { id: parseInt(id) },
        data: { name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount },
      });
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: 'Error updating item' });
    }
}

export const getItemsByNameController = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const items = await prisma.item.findMany({
        where: {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        },
      });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error searching items' });
    }
}