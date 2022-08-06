import './App.css';

import { Header } from '@components';
import { AboutPage, ContactPage, HomePage, ResourcesPage, WorkPage } from '@pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => (
  <Router>
    <div className="m-auto m-16">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/work" element={<WorkPage />}></Route>
        <Route path="/resources" element={<ResourcesPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  </Router>
);
