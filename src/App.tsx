import React from 'react';
import Index from './Pages/Home/page.tsx';

import OurProduct from './Pages/About/OurProduct/page.tsx';
import OurHistory from './Pages/About/OurHistory/page.tsx';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App()
{

  return(
    <BrowserRouter>
      <Routes>
          <Route path='/Home' element={<Index/>}/>
          <Route path='/about/ourProduct' element={<OurProduct/>} />
          <Route path='/about/ourHistory' element={<OurHistory/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;