import { useState } from "react";

interface Name {
  name: string | undefined;
  nameCheck: string | undefined;
}
export function useNameCheck () {
    const [name, setName] = useState<Name['name']>();
    const [nameCheck, setNameCheck] = useState<Name['nameCheck']>('first');

    function handleNameInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        
        setName(e.target.value);
      }

      function handleNameCheck(e: React.FocusEvent<HTMLInputElement>): void {
        if (e.target.value.length <= 10 && e.target.value.length >= 1) setNameCheck('checked');
        else setNameCheck('notChecked');
      }

    return [name, nameCheck, handleNameInputChange, handleNameCheck];
}