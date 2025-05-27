import { useState } from "react";
import type { ChangeEvent } from "react";

export const useForm = <T extends Record<string, unknown>>(initialForm: T) => {
    
    const [formState, setFormState] = useState<T>(initialForm);
    
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = (): void => {
        setFormState(initialForm);
    };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
