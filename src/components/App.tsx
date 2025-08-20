import '../App.css';

import { Footer, Header } from '@components';
import { setupGoogleAnalytics } from '@config';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutPage } from '../pages/_AboutPage';
import { ContactPage } from '../pages/_ContactPage';
import { HomePage } from '../pages/_HomePage';
import { ResourcesPage } from '../pages/_ResourcesPage';
import { WorkPage } from '../pages/_WorkPage';

export const App = () => {
  useEffect(() => setupGoogleAnalytics());
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/work" element={<WorkPage />}></Route>
        <Route path="/resources" element={<ResourcesPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};
