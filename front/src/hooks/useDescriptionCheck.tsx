import { useState, ChangeEventHandler, FocusEventHandler } from 'react';

interface Description {
  description: string;
  descriptionCheck: string;
}

interface UseDescriptionReturn {
  description: string;
  descriptionCheck: string;
  handleDescriptionInputChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleDescriptionCheck: FocusEventHandler<HTMLTextAreaElement>;
}

export function useDescriptionCheck(): UseDescriptionReturn {
  const [description, setDescription] = useState<Description['description']>('');
  const [descriptionCheck, setDescriptionCheck] = useState<Description['descriptionCheck']>('first');

  function handleDescriptionInputChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setDescription(e.target.value);
  }

  function handleDescriptionCheck(e: React.FocusEvent<HTMLTextAreaElement>): void {
    if (e.target.value.length >= 10 && e.target.value.length <= 100)
      setDescriptionCheck('checked');
    else setDescriptionCheck('notChecked');
  }

  return {
    description,
    descriptionCheck,
    handleDescriptionInputChange,
    handleDescriptionCheck,
  };
}
