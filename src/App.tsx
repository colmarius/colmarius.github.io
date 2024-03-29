import './App.css';

import { Footer, Header } from '@components';
import { setupGoogleAnalytics } from '@config';
import { AboutPage, ContactPage, HomePage, ResourcesPage, WorkPage } from '@pages';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  useEffect(() => setupGoogleAnalytics());
  return (
    <Router>
      <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col h-[80vh] justify-between">
          <Header />
          <Routes>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/work" element={<WorkPage />}></Route>
            <Route path="/resources" element={<ResourcesPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};
