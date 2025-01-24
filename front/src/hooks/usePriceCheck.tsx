import { useState } from "react";

interface UsePriceCheckReturn {
  price: number;
  priceCheck: string;
  handlePriceInputChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceCheck : (e: React.FocusEvent<HTMLInputElement>) => void;
}
export function usePriceCheck (): UsePriceCheckReturn {
    type Price = number;
    type PriceCheck = string;
    const [price, setPrice] = useState<Price>(0);
    const [priceCheck, setPriceCheck] = useState<PriceCheck>('first');

    function handlePriceInputChange(e: React.ChangeEvent<HTMLInputElement>) : void {
        const inputVal = Number(e.target.value);
        setPrice(inputVal);
      }

      function handlePriceCheck(e: React.ChangeEvent<HTMLInputElement>) : void {
        const targetInput: number = Number(e.target.value);
        if (!isNaN(targetInput)) setPriceCheck('checked');
        else setPriceCheck('notChecked');
      }

      return {price, priceCheck, handlePriceInputChange, handlePriceCheck};
}