import React, { useState } from 'react'
import { useLocation, Link } from '@reach/router'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import SearchIcon from '@material-ui/icons/Search'
import AssessmentIcon from '@material-ui/icons/Assessment'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/about',
    name: 'About',
    icon: InfoIcon,
  },
  {
    path: '/search',
    name: 'Search',
    icon: SearchIcon,
  },
  {
    path: '/podcasts',
    name: 'Podcasts',
    icon: AssessmentIcon,
  },
  {
    path: '/articles',
    name: 'Articles',
    icon: CollectionsBookmarkIcon,
  },
]

const useStyles = makeStyles(() => ({
  base: {
    position: 'sticky',
    bottom: 0,
  },
}))

export function Bottombar() {
  const classes = useStyles()
  const location = useLocation()
  const [value, setValue] = useState(location.pathname)

  function handleValueChange(_event, val) {
    setValue(val)
  }

  return (
    <BottomNavigation
      className={classes.base}
      showLabels
      value={value}
      onChange={handleValueChange}
    >
      {routes.map(({ name, path, icon: Icon }) => (
        <BottomNavigationAction
          key={name}
          component={Link}
          to={path}
          label={name}
          value={path}
          icon={<Icon />}
        />
      ))}
    </BottomNavigation>
  )
}
