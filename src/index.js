import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
import Error from './error';
import UnControlled from './unControlled';
import ArrayMethods from './arrayMethods';
import Hooks from './hooks';
import Login from './Login';
const App = lazy(() => import("./App"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Suspense fallback={<div>Loading......</div>}><App /></Suspense>}></Route>
      <Route path='child1' element={<Child1 />}></Route>
      <Route path='child2' element={<Child2 />}></Route>
      <Route path='child3' element={<Child3 />}></Route>
      <Route path='unControlled' element={<UnControlled />}></Route>
      <Route path='arrayMethods' element={<ArrayMethods />}></Route>
      <Route path='hooks' element={<Hooks />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
