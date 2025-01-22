import { useState } from "react";

interface Description {
  description: string | undefined;
  descriptionCheck: string | undefined;
}
export function useDescriptionCheck () {
      const [description, setDescription] = useState<Description['description']>();
      const [descriptionCheck, setDescriptionCheck] = useState<Description['descriptionCheck']>('first');

        
  function handleDescriptionInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setDescription(e.target.value);
  }

  function handleDescriptionCheck(e: React.FocusEvent<HTMLInputElement>) : void{
    if (e.target.value.length >= 10 && e.target.value.length <= 100) setDescriptionCheck('checked');
    else setDescriptionCheck('notChecked');
  }

  return [description, descriptionCheck, handleDescriptionInputChange, handleDescriptionCheck];
}