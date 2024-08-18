//Imports the necessary modules from the React library. React is imported for JSX syntax, and ReactDOM is imported from the react-dom/client
//module for rendering React components.
import React from 'react'
import ReactDOM from 'react-dom/client'
//imports CSS file to apply the CSS styles to React components
import './index.css'
//imports App from App.js
import App from './App'

//creates root using ReactDOM.createRoot() and specifies DOM element when id 'root'
//as container for react components.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(//renders react app inside root
//strictmode is tool for highlighting potential problems  with app during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//sets up React app and imports dependancies
