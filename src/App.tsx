import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components';

export const App = () => (
  <div className="container m-auto my-4">
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<div>About page</div>}></Route>
        <Route path="/work" element={<div>Work page</div>}></Route>
        <Route path="/resources" element={<div>Resources page</div>}></Route>
        <Route path="/contact" element={<div>Contact page</div>}></Route>
        <Route
          path="/"
          element={<h1 className="text-3xl font-bold underline">Welcome to my new website!</h1>}
        ></Route>
      </Routes>
    </Router>
  </div>
);
