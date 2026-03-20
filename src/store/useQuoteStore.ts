import {create} from 'zustand'

type QuoteType = {
    text : string;
    author: string;
}

type QuoteStore = {
    quotes : QuoteType[];
    quote : QuoteType;
    getRandomQuote : ()=>void
}

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  quotes: [
  { text: "Do not wait for the perfect moment—take the moment and make it perfect.", author: "Zoey Sayward" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "Small steps in the right direction can turn out to be the biggest step of your life.", author: "Naeem Callaway" },
  { text: "Believe you can, and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C. S. Lewis" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "What lies within us is far greater than what lies before us.", author: "Ralph Waldo Emerson" }
],

  quote: { text: "", author: "" },

  getRandomQuote: () => {
    const { quotes } = get();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    set({ quote: quotes[randomIndex] });
  }
}));