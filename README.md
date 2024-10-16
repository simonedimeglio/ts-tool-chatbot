# AI Chatbot with Vercel AI SDK

This project is a chatbot built with Vercel AI SDK and TypeScript, capable of answering questions about products, such as "What is the most expensive product?" or "Are there any out-of-stock products?"

## Prerequisites

- Node.js (_v16 or higher_)
- pnpm or yarn (_optional, you can use npm_)

## Execution

To start the chatbot, run the command:

```bash
pnpm tsx src/index.ts
```

If you're using **npm**, run:

```bash
npx tsx src/index.ts
```

## Functionality

The chatbot can answer questions about products. You can ask questions like:

- **"What products do we have in store?"**
  - The chatbot will list all available products.
- **"Tell me the details of the product with ID 1."**
  - The chatbot will provide details of the product with the specified ID.
- **"What is the cheapest product?"**
  - The chatbot will return the product with the lowest price.
- **"What is the most expensive product?"**
  - The chatbot will return the product with the highest price.
- **"Are there any out-of-stock products?"**
  - The chatbot will check if there are any products with zero stock.
- **"Which product has the highest availability?"**
  - The chatbot will return the product with the highest number of units in stock.

## Main Files

- **`src/index.ts`**: The main file that runs the chatbot and manages the conversation.
- **`src/products.ts`**: Contains the list of products, with information on name, price, availability, and stock.
- **`src/tools.ts`**: Defines the various tools that the chatbot can use to answer questions about products.

## Example Questions

- "What products do we have in store?"
- "Tell me the details of the product with ID 1."
- "What is the cheapest product?"
- "What is the most expensive product?"
- "Are there any out-of-stock products?"
- "Which product has the highest availability?"

## Customization

You can add new products to the `products.ts` file or create new tools in the `tools.ts` file to answer specific questions about products.

---

This chatbot uses [Vercel AI SDK](https://vercel.com/ai) to integrate OpenAI's artificial intelligence and manage tools.
