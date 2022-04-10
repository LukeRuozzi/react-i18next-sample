import React from 'react';
import { useTranslation } from 'react-i18next';

export const Logout = ({ onLogout }) => {
  const { t } = useTranslation();

  return (
    <>
      <button onClick={onLogout}>{t('logout')}</button>
    </>
  );
};
