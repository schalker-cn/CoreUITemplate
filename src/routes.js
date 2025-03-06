import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Calendar = React.lazy(() => import('./views/base/accordion/Accordion'))
const Contacts = React.lazy(() => import('./views/base/cards/Cards'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Analysis = React.lazy(() => import('./views/charts/Charts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/calendar', name: 'Calendar', element: Calendar },
  { path: '/contacts', name: 'Contacts', element: Contacts },
  { path: '/progress', name: 'Progress', element: Progress },
  { path: '/analysis', name: 'Analysis', element: Analysis },
]

export default routes
