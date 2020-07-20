// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const clearForm = e => {
        setValues(initialValues);
    }

    return [values, handleChanges, clearForm ];
};