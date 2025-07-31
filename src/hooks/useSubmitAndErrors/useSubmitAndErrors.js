import { useCallback, useState } from 'react';
import useFormRefs from '../useFormRefs/useFormRefs';

const useSubmitAndErrors = () => {
  const { refs, resetForm } = useFormRefs();
  const [errors, setErrors] = useState({});

  const submit = useCallback((e, onSuccess) => {
    e.preventDefault();

    const newErrors = {};

    if (refs.nameInput.current.value.length === 0) {
      newErrors.name = {
        message: 'El nombre es requerido',
        ref: refs.nameInput.current
      };
    }

    if (refs.atkNameInput.current.value.length === 0) {
      newErrors.atkName = {
        message: 'El nombre de un ataque ofensivo es requerido',
        ref: refs.atkNameInput.current
      };
    }

    if (refs.defNameInput.current.value.length === 0) {
      newErrors.defName = {
        message: 'El nombre de un ataque defensivo es requerido',
        ref: refs.defNameInput.current
      };
    }

    if (refs.attbrSelect.current.value === '') {
      newErrors.selectValue = {
        message: 'Debes seleccionar alguna cualidad de la lista',
        ref: refs.attbrSelect.current
      };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const data = {
      name: refs.nameInput.current.value,
      atkName: refs.atkNameInput.current.value,
      defName: refs.defNameInput.current.value,
      description:
        refs.descriptionTextarea.current.value.length === 0
          ? 'Se desconocen las cualidades de esta criatura'
          : refs.descriptionTextarea.current.value,
      selectValue: refs.attbrSelect.current.value
    };

    setErrors({});
    if (onSuccess) onSuccess(data);
  });
  return {
    refs,
    errors,
    submit,
    setErrors,
    resetForm
  };
};

export default useSubmitAndErrors;
