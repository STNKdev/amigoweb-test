import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Checkbox from '../Chechbox';


export const Form = () => {
  const [activeButton, setActiveButton] = useState(true);
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState('');
  const [error, setError] = useState({});

  const languageList = ['Русский', 'Английский', 'Китайский', 'Испанский'];

  const toogleButton = () => {
    setActiveButton(!activeButton);
  };

  const toogleCheckbox = () => {
    setActiveCheckbox(!activeCheckbox);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const regexp = /^[a-zA-Zа-яА-Я -]+$/i;
    if (regexp.test(name)) {
      setError({...error, name: ''});
    } else {
      setError({...error, name: 'Введено не корректное значение'});
    }
    console.log('Name', error);
  }, [name]);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    const regexp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/i;
    if (regexp.test(email)) {
      setError({...error, email: ''});
    } else {
      setError({...error, email: 'Введено не корректное значение'});
    }
    console.log('Email', error);
  }, [email]);

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  useEffect(() => {
    const regexp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
    if (regexp.test(phone)) {
      setError({...error, phone: ''});
    } else {
      setError({...error, phone: 'Введено не корректное значение'});
    }
    console.log('Phone', error);
  }, [phone]);

  const handleChangeLanguage = (item) => {
    setLanguage(languageList[item]);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('Done');
  };

  return (
      <form className='reg-form' action='#' onSubmit={handleSubmitForm}>
        <header className='header-form'>
          <h2 className='header-form_title'>Регистрация</h2>
          <p className='header-form_description'>
            Уже есть аккаунт?
            <a href="#" className='link'>Войти</a>
          </p>
        </header>
        <Input label='Имя' placeholder='Введите Ваше Имя' error={error.name || ''} onChange={handleChangeName} value={name}/>
        <Input label='Email' placeholder='Введите ваш email' error={error.email || ''} onChange={handleChangeEmail} value={email}/>
        <Input label='Номер телефона' placeholder='Введите номер телефона' error={error.phone || ''} onChange={handleChangePhone} value={phone}/>
        <Dropdown name='Язык' items={languageList} onChange={handleChangeLanguage} />
        <label className='conditions'>
          <Checkbox active={activeCheckbox} onClick={toogleCheckbox}/>
          <span>
            Принимаю
            <a href="#" className='link'> условия </a>
            использования
          </span>
        </label>
        <Button text='Зарегистрироваться' disable={activeButton} type='submit' />
      </form>
  );
};
