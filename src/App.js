import React, { Suspense } from 'react';
import './style.css';
import { EntryPoint } from './EntryPoint';

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <EntryPoint />
    </Suspense>
  );
}
