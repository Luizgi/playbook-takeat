import React from 'react';
import Index from './Pages/Home/page.tsx';

import OurProduct from './Pages/About/OurProduct/page.tsx';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App()
{

  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about/ourProduct' element={<OurProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;