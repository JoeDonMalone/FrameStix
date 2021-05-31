import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloudIcon from "@material-ui/icons/Cloud";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LockIcon from "@material-ui/icons/Lock";
import ExploreIcon from "@material-ui/icons/Explore";
import PersonIcon from '@material-ui/icons/Person';
import "./style.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const upperIcon = [<CloudIcon />, <LockIcon />,<PersonIcon/>];
  const lowerIcon = [<FastfoodIcon />, <LocalHospitalIcon />, <ExploreIcon />];
  const upperLink = [
    "https://joedonmalone.github.io/WeatherBee/",
    "https://joedonmalone.github.io/Password_Generator/",
    "https://github.com/JoeDonMalone/Employee-Directory-API"
  ];
  
  const lowerLink = [
    "https://joedonmalone.github.io/FoodFeed/",
    "https://github.com/JoeDonMalone/MedFix_Collaboration/",
  ];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // onClick= {() => {console.log('hello')}}
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem>
        <ListItemText>
          {" "}
          <b>Personal Projects</b>{" "}
        </ListItemText>
      </ListItem>
      <Divider />
      <List>
        {["WeatherBee", "Password Generator", "Employee Directory API"].map((text, index) => (
          <ListItem key={text} button>
            <ListItemIcon>{upperIcon[index]}</ListItemIcon>
            <a
              className={"garbage-item"}
              href={upperLink[index]}
              target="_blank"
              rel="noreferrer"
            >
              <ListItemText primary={text} />
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <br />
      <br />

      <ListItem>
        <ListItemText>
          {" "}
          <b> Collaborative Projects </b>{" "}
        </ListItemText>
      </ListItem>
      <Divider />
      <List>
        {["Food Feed", "Med Reminder", "Travel-App"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{lowerIcon[index]}</ListItemIcon>
            <a
              className={"garbage-item"}
              href={lowerLink[index]}
              target="_blank"
              rel="noreferrer"
            >
              <ListItemText primary={text} />
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <div className={`${classes.root} side-nav-container`}>
          <CssBaseline />
          <nav
            className={`${classes.drawer} side-nav-container`}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
