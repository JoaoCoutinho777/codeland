import React, { useState } from 'react'
import { Stack, Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

import SearchBar from './SearchBar'

const Navbar = () => {

  

  return (
    <Stack direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
        Codeland
      </Link>
      <SearchBar />
      
    </Stack>

  )
} 

export default Navbar