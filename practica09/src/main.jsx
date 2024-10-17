import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MiFieldSet from './MiFieldSet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <MiFieldSet p1= "título" ids1= "1" p2 ="nombre " ids2 ="2" p3 ="password"/>
  </StrictMode>,
)
