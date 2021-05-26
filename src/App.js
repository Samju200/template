import './App.css';
import Alert from './components/Alert';
import Form from './components/Form';
import Template from './components/Template';
import React from 'react';
import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <Form />
      <Alert />
      <Template />
      <Pagination />
    </div>
  );
}

export default App;
