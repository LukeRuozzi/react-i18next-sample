import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LoginForm = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const { t } = useTranslation();

  return (
    <>
      <div className="form-group">
        <label>{t('user')}</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>{t('pwd')}</label>
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button onClick={onLogin}>{t('login')}</button>
    </>
  );
};
