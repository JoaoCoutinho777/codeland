import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Paper, Switch } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { MaterialUISwitch } from './utils/MaterialUISwitch';

const App = () => {
    
    const [mode, setMode] = useState(true);

    const theme = createTheme({
    palette: {
        mode: mode ? 'light' : 'dark'
    }
    })

    return (
    <BrowserRouter>
        <Box> 
            <Navbar/>
            <ThemeProvider theme={theme}>
                <Paper>
                    <MaterialUISwitch sx={{ position: 'sticky' }} onClick={() => setMode(!mode)}/>
                    <Routes>
                        <Route path='/' exact element={<Feed mode={mode}/>} />
                        <Route path='/video/:id' element={<VideoDetail mode={mode}/>}/>
                        <Route path='/channel/:id' element={<ChannelDetail mode={mode}/>}/>
                        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
                    </Routes>
                </Paper>
            </ThemeProvider>
        </Box>
    </BrowserRouter>
    
    );
}

export default App