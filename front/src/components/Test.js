import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import { Link, useHistory } from 'react-router-dom'
import logo from './img/MD1.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background : '#F22E2E'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position: 'relative',
    flexGrow: 1,
    color: 'white',
  },
  subtitle: {
    fontSize: 'subtitle',
    color: 'white',
    align: 'center',
    justifyContent: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  imagen: {
    width: '8%',
    height: '8%',
    margin: theme.spacing(2)
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const token = localStorage.usertoken
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut =(e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    history.push('/')
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        {token && (
            <div>
            <MenuItem onClick={handleMenu}>
              <IconButton
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Perfil</p>
              </MenuItem>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logOut}>Salir</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            </div>
          )}
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div >
      <AppBar position="static" className={classes.root}>
        
        <Toolbar>
          <img src={logo} className={classes.imagen} onClick={event =>  window.location.href='/'}alt="logo"/>
          <Link to='./login'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               Login
           </Typography>
          </MenuItem>
          </Link>
          <Link to='./history'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               History
           </Typography>
          </MenuItem>
          </Link>
          <Link to='./register'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               Register
           </Typography>
          </MenuItem>
          </Link>
          <Link to='./test'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               Test
           </Typography>
          </MenuItem>
          </Link>
          <Link to='./formpi'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               Formpi
           </Typography>
          </MenuItem>
          </Link><Link to='./card'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               Card
           </Typography>
          </MenuItem>
          </Link>
          <Link to='./profile'>
          <MenuItem>
           <Typography className={classes.subtitle}>
               Profile
           </Typography>
          </MenuItem>
          </Link>
          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
          {token && (
            <div>
              <IconButton
                aria-label="account of current user"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logOut}>Salir</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          </div>
          <div className={classes.sectionMobile}>
              
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}