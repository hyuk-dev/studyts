import { useState } from "react";

interface Name {
  name: string;
  nameCheck: string;
}

interface UseNameCheckReturn {
  name: string;
  nameCheck: string;
  handleNameInputChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNameCheck : (e: React.FocusEvent<HTMLInputElement>) => void;
}
export function useNameCheck () : UseNameCheckReturn {
    const [name, setName] = useState<Name['name']>('');
    const [nameCheck, setNameCheck] = useState<Name['nameCheck']>('first');

    function handleNameInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        
        setName(e.target.value);
      }

      function handleNameCheck(e: React.FocusEvent<HTMLInputElement>): void {
        if (e.target.value.length <= 10 && e.target.value.length >= 1) setNameCheck('checked');
        else setNameCheck('notChecked');
      }

    return {name, nameCheck, handleNameInputChange, handleNameCheck};
}