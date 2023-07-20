import React from 'react'
import ReactDom from 'react-dom'

import 'uimini'

import './assets/css/main.css'

ReactDom.render(
  <React.StrictMode>
    <ResumeBuilder />
  </React.StrictMode>,
  document.getElementById('app')
)
