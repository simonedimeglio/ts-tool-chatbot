# Chatbot AI con Vercel AI SDK

Questo progetto è un chatbot costruito con Vercel AI SDK e TypeScript, in grado di rispondere a domande sui prodotti, come "_Qual è il prodotto che costa di più?_" o "_Ci sono prodotti esauriti?_".

## Prerequisiti

- Node.js (v16 o superiore)
- pnpm o yarn (opzionale, puoi usare npm)

## Esecuzione

Per avviare il chatbot, esegui il comando:

```bash
pnpm tsx src/index.ts
```

Se usi **npm**, esegui:

```bash
npx tsx src/index.ts
```

## Funzionamento

Il chatbot è in grado di rispondere a domande sui prodotti. Puoi fare domande come:

- **"Che prodotti abbiamo in store?"**

  - Il chatbot elencherà tutti i prodotti disponibili.

- **"Dimmi i dettagli del prodotto con ID 1."**

  - Il chatbot fornirà i dettagli del prodotto con l'ID specificato.

- **"Qual è il prodotto che costa meno?"**

  - Il chatbot restituirà il prodotto con il prezzo più basso.

- **"Qual è il prodotto che costa di più?"**

  - Il chatbot restituirà il prodotto con il prezzo più alto.

- **"Ci sono prodotti esauriti?"**

  - Il chatbot verificherà se ci sono prodotti con stock pari a zero.

- **"Qual è il prodotto con maggiore disponibilità?"**
  - Il chatbot restituirà il prodotto con il maggior numero di unità in stock.

## File Principali

- **`src/index.ts`**: Il file principale che esegue il chatbot e gestisce la conversazione.
- **`src/products.ts`**: Contiene l'elenco dei prodotti, con informazioni su nome, prezzo, disponibilità e stock.
- **`src/tools.ts`**: Definisce i vari tool che il chatbot può utilizzare per rispondere alle domande sui prodotti.

## Esempi di domande

- "Che prodotti abbiamo in store?"
- "Dimmi i dettagli del prodotto con ID 1."
- "Qual è il prodotto che costa meno?"
- "Qual è il prodotto che costa di più?"
- "Ci sono prodotti esauriti?"
- "Qual è il prodotto con maggiore disponibilità?"

## Personalizzazione

Puoi aggiungere nuovi prodotti al file `products.ts` o creare nuovi tool nel file `tools.ts` per rispondere a domande specifiche sui prodotti.

---

Questo chatbot utilizza [Vercel AI SDK](https://vercel.com/ai) per integrare l'intelligenza artificiale di OpenAI e gestire i tool.
