import { AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BetterYou
          
        </Typography>
       
        <Typography  variant="body1" component="div" sx={{alignItems: 'center',flexGrow: 1, justifyContent: 'center' }}>
          <Button sx={{color: 'white'}} style={{ margin: '0 100px' }}>Link 1</Button>
          <Button sx={{color: 'white'}} style={{ margin: '0 100px' }}>Link 2</Button>
          <Button sx={{color: 'white'}} style={{ margin: '0 100px' }}>Link 3</Button>
          <Button sx={{color: 'white'}} style={{ margin: '0 100px' }}>Link 4</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;