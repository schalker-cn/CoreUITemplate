import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavGroup,
    name: 'Workspace',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Calendar',
        to: '/calendar',
      },
      {
        component: CNavItem,
        name: 'Contacts',
        to: '/contacts',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/progress',
      },
      {
        component: CNavItem,
        name: 'Analysis',
        to: '/analysis'
      }
    ],
  },
]

export default _nav
