import * as React from 'react';
import './App.css';
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {NotFound} from "./Pages/NotFound";
import { BookLayout } from './BookLayout';
import { BookRoutes } from './BookRoutes';

function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/NotFound">Not Found</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path= "/" element= {<Home />} />
      <Route path= "/about" element= {<About />} />
      <Route path= "/book/*" element={<BookRoutes />} />
      <Route path= "*" element= {<NotFound />} />
    </Routes>
    </>
  )
}

export default App