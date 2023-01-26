import React from 'react';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Header from '../components/Header/Header';

export default function Error() {
  return (
    <main className="mainWrapper">
        <Header />
        <ErrorPage/>
    </main>
  )
}