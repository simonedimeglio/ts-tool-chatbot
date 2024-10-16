import { tool } from "ai";
import { z } from "zod";
import { products } from "./products";

// Tool per ottenere i dettagli di un prodotto
export const getProductDetails = tool({
  description: "Get details about a product by its ID",
  parameters: z.object({
    productId: z.number(),
  }),
  execute: async ({ productId }) => {
    const product = products.find((p) => p.id === productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  },
});

// Tool per elencare tutti i prodotti
export const listAllProducts = tool({
  description: "List all products",
  parameters: z.object({}),
  execute: async () => {
    return products;
  },
});

// Tool per trovare il prodotto che costa meno
export const getCheapestProduct = tool({
  description: "Get the cheapest product",
  parameters: z.object({}),
  execute: async () => {
    return products.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
  },
});

// Tool per trovare il prodotto che costa di più
export const getMostExpensiveProduct = tool({
  description: "Get the most expensive product",
  parameters: z.object({}),
  execute: async () => {
    return products.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    );
  },
});

// Tool per trovare prodotti esauriti
export const getOutOfStockProducts = tool({
  description: "Get products that are out of stock",
  parameters: z.object({}),
  execute: async () => {
    return products.filter((product) => product.stock === 0);
  },
});

// Tool per trovare il prodotto con maggiore disponibilità
export const getProductWithMostStock = tool({
  description: "Get the product with the most stock",
  parameters: z.object({}),
  execute: async () => {
    return products.reduce((prev, current) =>
      prev.stock > current.stock ? prev : current
    );
  },
});
