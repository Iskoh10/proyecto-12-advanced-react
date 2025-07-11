import './CreationForm.css';
import { useState } from 'react';
import useSubmitAndErrors from '../../hooks/useSubmitAndErrors/useSubmitAndErrors';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import Textarea from '../../components/Textarea/Textarea';
import Input from '../../components/Input/Input';
import { useCreaturesContext } from '../../Providers/CreaturesContext';
import NewCard from '../../components/NewCard/NewCard';

const CreationForm = () => {
  const { addCreature } = useCreaturesContext();
  const { refs, errors, submit } = useSubmitAndErrors();
  const [formState, setFormState] = useState({
    name: '',
    atkName: '',
    defName: '',
    description: '',
    selectValue: ''
  });
  const [showModal, setShowModal] = useState(false);

  return (
    <main className='creation-form flex-container'>
      <div className='form-container flex-container'>
        <div className='image-form'>
          <img src='/form.png' alt='image-form' />
        </div>
        <form
          className='creation-beast-form flex-container'
          onSubmit={(e) =>
            submit(e, (data) => {
              setFormState(data);
              setShowModal(true);
              console.log('Datos recibidos:', data);
            })
          }
        >
          <fieldset>
            <legend>Creación de Criaturas</legend>
            <Input
              id='name'
              refs={refs}
              labelText='Nombre Criatura'
              errors={errors}
              errorKey='name'
            />
            <Input
              id='atk-name'
              refs={refs}
              labelText='Nombre Ataque Ofensivo'
              errors={errors}
              errorKey='atkName'
            />
            <Input
              id='def-name'
              refs={refs}
              labelText='Nombre Ataque Defensivo'
              errors={errors}
              errorKey='defName'
            />
            <Textarea
              id='description-textarea'
              labelText='Descripción'
              refs={refs}
            />
            <Select refs={refs} errors={errors} />
            <Button className='create-btn' text='Crear' />
          </fieldset>
        </form>
      </div>

      {Object.entries(errors).length > 0 && (
        <div className='error-panel flex-container'>
          {Object.entries(errors).map(([key, error]) => (
            <p key={key} className='error-message'>
              {error.message}
            </p>
          ))}
        </div>
      )}
      {formState.name !== '' ? (
        <NewCard
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          name={formState.name}
          atkName={formState.atkName}
          defName={formState.defName}
          description={formState.description}
          mainAttribute={formState.selectValue}
          onCreatureGenerated={(creature) => {
            addCreature(creature);
          }}
        />
      ) : null}
    </main>
  );
};

export default CreationForm;
