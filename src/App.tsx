import React from 'react';
import Index from './Pages/Home/page.tsx';

import OurProduct from './Pages/About/OurProduct/page.tsx';
import OurHistory from './Pages/About/OurHistory/page.tsx';

import { HashRouter, Route, Routes } from 'react-router-dom';

function App()
{
  return(
    <HashRouter>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about/ourProduct' element={<OurProduct/>} />
          <Route path='/about/ourHistory' element={<OurHistory/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
