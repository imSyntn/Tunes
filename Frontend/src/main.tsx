import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ContextProvider} from './Context/ContextProvider.tsx'
import './App.css'
// import '../public/style.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>

  // </StrictMode>,
)
