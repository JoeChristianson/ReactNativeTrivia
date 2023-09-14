import React, { useState } from 'react';
import Form, { Field } from '../../components/Form';
import Main from '../../components/Main';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { login } from '../../app/features/auth/authSlice';


const LoginPage: React.FC = () => {

  const dispatch:AppDispatch = useDispatch()

  const [formData, setFormData] = useState<any>({
    email: '',
    password: ''
  });

  const fields:Field[] = [
    { name: 'email', type: 'email' },
    { name: 'password', type: 'password' }
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formData))
  };

  return (
    <Main title="Login">
      <Form fields={fields} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </Main>
  );
}

export default LoginPage;
