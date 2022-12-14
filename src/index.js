import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Subs from './Pages/Subs';
import Pricing from './Pages/Pricing';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Features from './Pages/Features';
import NotFound from './Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="features" element={<Features/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="subs" element={<Subs/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
