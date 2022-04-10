import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { LoginForm } from './LoginForm';
import { Logout } from './Logout';

export const EntryPoint = () => {
  const { t, i18n } = useTranslation();

  const login = () => {
    setTimeout(() => {
      localStorage.setItem('user', 1);

      //simulate BE call to set user locale
      const lng = 'fr';
      localStorage.setItem('userLng', lng);
      i18n.changeLanguage(lng);
    }, 500);
  };

  const logout = () => {
    setTimeout(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('userLng');

      //simulate BE call to set default locale
      const lng = 'en';
      localStorage.setItem('defLng', lng);
      i18n.changeLanguage(lng);
    }, 500);
  };

  const isUser = () => {
    const storageUser = localStorage.getItem('user');
    //console.log('isUser', storageUser);
    return storageUser;
  };

  return (
    <>
      <h1>{t('welcome')}</h1>
      {!isUser() ? <LoginForm onLogin={login} /> : <Logout onLogout={logout} />}
    </>
  );
};
