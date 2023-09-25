import React, { useState } from 'react';
import Form, { Field } from '../../components/Form';
import Main from '../../components/Wrapper';
import { useDispatch } from 'react-redux';
import { register } from '../../app/features/auth/authSlice';
import { AppDispatch } from '../../app/store';


const RegisterPage: React.FC = () => {

  const dispatch:AppDispatch = useDispatch()

  const [formData, setFormData] = useState<any>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const fields:Field[] = [
    { name: 'username', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'password', type: 'password' },
    { name: 'confirmPassword', type: 'password', label: 'Confirm Password' }
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("loggin in")
    dispatch(register(formData));
  };

  return (
    <Main title="Register">
      <Form fields={fields} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </Main>
  );
}

export default RegisterPage;
