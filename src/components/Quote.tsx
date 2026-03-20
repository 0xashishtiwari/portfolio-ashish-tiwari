'use client';

import { useEffect, useState } from 'react';
import { useQuoteStore } from '@/store/useQuoteStore';



const Quote = () => {
    const {quote , getRandomQuote} = useQuoteStore();

  useEffect(() => {
        getRandomQuote();
  }, [getRandomQuote]);

  return (
    <div className="max-w-2xl mx-auto flex items-center justify-center min-h-[200px] p-3">
      <div className="py-8 px-8 rounded-2xl shadow-2xs border-2 border-s-chart-5 w-full bg-background">
        <p className="text-lg font-mono italic text-muted-foreground mb-2 tracking-tight">
          "{quote.text}"
        </p>
        <p className="text-sm text-muted-foreground px-10 font-semibold italic text-right">
          – {quote.author}
        </p>
        
      </div>
    </div>
  );
};

export default Quote;