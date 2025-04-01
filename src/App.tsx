import React from 'react';
import Index from './Pages/Home/page.tsx';

import OurProduct from './Pages/About/OurProduct/page.tsx';
import OurHistory from './Pages/About/OurHistory/page.tsx';
import OurCulture from './Pages/About/OurCulture/page.tsx';
import OurPartners from './Pages/About/Partners/page.tsx';
 
import { HashRouter, Route, Routes } from 'react-router-dom';

function App()
{
  return(
    <HashRouter>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about/ourProduct' element={<OurProduct/>} />
          <Route path='/about/ourHistory' element={<OurHistory/>} />
          <Route path='/about/ourCulture' element={<OurCulture/>} />
          <Route path='/about/partners'   element={<OurPartners/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
