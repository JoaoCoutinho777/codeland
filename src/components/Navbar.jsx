import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { MaterialUISwitch } from '../utils/MaterialUISwitch'
import { logo } from "../utils/constants"



import SearchBar from './SearchBar'

const Navbar = ({mode, setMode}) => {

  return (
    <Stack direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      {/* <Link to='/' style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>
        Codeland
      </Link> */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <MaterialUISwitch onClick={() => setMode(!mode)}/>
    </Stack>

  )
} 

export default Navbar