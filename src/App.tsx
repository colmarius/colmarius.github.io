import './App.css';

import { Footer, Header } from '@components';
import { AboutPage, ContactPage, HomePage, ResourcesPage, WorkPage } from '@pages';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => (
  <Router>
    <div className="m-auto my-20 mx-16 lg:mx-28">
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
