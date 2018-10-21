import React from 'react'
import './App.scss'

import { Switch, Route } from 'react-router-dom'
import { Main, Login } from './components'

// TODO: reduce glut once I know which icons I need
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route component={Main} />
      </Switch>
    </main>
  )
}