import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NavBar from './routing/NavBar';
import { ContextProvider } from './centralState/Context';
import { BrowserRouter } from "react-router";
import Routing from './routing/Routing';
import { Toaster } from 'react-hot-toast';

function App() {
 
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <BrowserRouter>
        <ContextProvider>
          
          <Routing />
          
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
