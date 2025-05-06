import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NavBar from './routing/NavBar'
import { ContextProvider } from './centralState/Context'
import { BrowserRouter } from "react-router";
import Routing from './routing/Routing'

function App() {

  return (
    <div>
      <BrowserRouter>
      <ContextProvider>
      <NavBar/>
      <Routing />
      </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
