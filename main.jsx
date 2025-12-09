import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display2 from './Display2.jsx'
import Display3 from './Display3.jsx'
import Display4 from './Display4.jsx'
import Display5 from './Display5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Display1 /> */}
    {/* <Display2/> */}
    {/* <Display3/> */}
    {/* <Display4/> */}
    <Display5/>
  </StrictMode>,
)
