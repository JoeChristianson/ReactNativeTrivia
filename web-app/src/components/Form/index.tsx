import React, { ChangeEvent, FormEvent } from 'react';
import './index.scss';

export interface Field {
    name: string;
    type: 'text' | 'email' | 'password' | 'number' | 'date' | 'checkbox' | 'radio' | 'file' | 'hidden' | 'image' | 'button';
    label?: string; 
}

interface Props {
  fields: Field[];
  formData: {
    [key: string]: string;
  };
  setFormData: (updatedData: { [key: string]: string }) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FormComponent: React.FC<Props> = ({ fields, formData, setFormData, handleSubmit }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newFormData = {...formData}
    newFormData[name] = value
    setFormData(newFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="input-group" key={field.name}>
          <label htmlFor={field.name}>{field.label || field.name.charAt(0).toUpperCase() + field.name.slice(1)}:</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className="submit-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormComponent;
