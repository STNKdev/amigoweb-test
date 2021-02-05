import React, { useState } from 'react';
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

  const handleChangeEmail = (event) => {
    setEmail(event.target.email);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

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
        <Input label='Имя' placeholder='Введите Ваше Имя' error='' onChange={handleChangeName} value={name}/>
        <Input label='Email' placeholder='Введите ваш email' error='' onChange={handleChangeEmail} value={email}/>
        <Input label='Номер телефона' placeholder='Введите номер телефона' error='' onChange={handleChangePhone} value={phone}/>
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
