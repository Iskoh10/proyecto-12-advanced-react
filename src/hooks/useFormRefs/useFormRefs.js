import { useRef } from 'react';

const useFormRefs = () => {
  const nameInput = useRef();
  const atkNameInput = useRef();
  const defNameInput = useRef();
  const descriptionTextarea = useRef();
  const attbrSelect = useRef();

  const resetForm = () => {
    nameInput.current.value = '';
    atkNameInput.current.value = '';
    defNameInput.current.value = '';
    descriptionTextarea.current.value = '';
    attbrSelect.current.value = '';
  };

  return {
    refs: {
      nameInput,
      atkNameInput,
      defNameInput,
      descriptionTextarea,
      attbrSelect
    },
    resetForm
  };
};

export default useFormRefs;
