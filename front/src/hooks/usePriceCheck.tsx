import { useState } from "react";

export function usePriceCheck () {
    type Price = number | undefined;
    type PriceCheck = string | undefined;
    const [price, setPrice] = useState<Price>();
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

      return [price, priceCheck, handlePriceInputChange, handlePriceCheck];
}