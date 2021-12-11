
import React, { useState } from 'react';
import Loggined from './Loggined';
import style from './Profile.module.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState('Введите имя');
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const [submited, setSubmit] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError('Пароль должен быть длинее 3 и меньше 8');
    }
    if (!e.target.value) {
      setPasswordError('Пароль не может быть пустым');
    } else {
      setPasswordError('');
    }
  };
  const nameHandlet = (e) => {
    setName(e.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  };
  const submit = () => {
    setName('');
    setEmail('');
    setPassword('');
    setSubmit(true);
  };
  return (
    <div>
         {submited ? (
      <Loggined/>
      ) : (
        <form className={style.form}>
          <h2>Войти | Зарегистрироваться</h2>
          <div className={style.input}>
          <hr/>
            {nameDirty && nameError && <div>{nameError}</div>}
            <label for="name">Ваше имя</label>
            <input
              id="name"
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => nameHandlet(e)}
              name="name"
              type="text"
              placeholder="введите имя"
              value={name}
            />
             <hr/>
            {emailDirty && emailError && <div>{emailError}</div>}
            <label for="email">Ваш email</label>
            <input
              id="email"
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => emailHandler(e)}
              name="email"
              type="email"
              placeholder="email"
              value={email}
            />
              <hr/>
            {passwordDirty && passwordError && <div>{passwordError}</div>}
            <label for="password">Ваш пароль</label>
            <input
            id='password'
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => passwordHandler(e)}
              name="password"
              type="password"
              placeholder="введите пароль"
              value={password}
            />
   <hr className={style.hr}/>
            <button className={style.button} type="submit" onClick={submit}>
              Запомнить меня
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
