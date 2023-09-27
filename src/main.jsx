import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'


const octocatData =  {
    avatar_url:'https://seeklogo.com/images/G/github-logo-9BBCA663A4-seeklogo.com.png',
    name: 'GitHub',
    created_at: '2008-4-10T17:09:48Z',
    login: 'github'
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App initialData = {octocatData}/>
  </React.StrictMode>
)