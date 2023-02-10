import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import BrowserRouter from 'react-router-dom'
import {  QueryClientProvider, QueryClient } from 'react-query'
import App from './App'
import './style/tailwind.css'


const root = document.getElementById('root') as HTMLElement
const queryClient = new QueryClient()
// createRoot(root).render(
//   <BrowserRouter>
//     <React.StrictMode>
//     <App />
//     </React.StrictMode>
//   </BrowserRouter>
// )
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
