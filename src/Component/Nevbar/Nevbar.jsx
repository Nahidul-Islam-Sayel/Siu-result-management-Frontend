import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import {
    FcDepartment,
    FcGraduationCap,
    FcHome,
    FcManager,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import Siulogo from "../../asset/Image/SIULOGO.png";
import "./Nevbar.css";
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Nevbar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (

        <span
            sx={{ textDecoration: "none" }}
            InputProps={{ disableUnderline: true }}
            style={{ borderBottom: "none !important" }}
            className="Box text-3xl "
        >
            <CssBaseline />
            <AppBar id="app" position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img className="siulogo" src={Siulogo} alt="" srcset="" />
                    <Typography variant="h6" noWrap component="div">
                        SIU RESULT
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to="/">
                        <ListItem button key="about">
                            <ListItemIcon>
                                <FcHome />
                            </ListItemIcon>
                            <ListItemText primary="Home"></ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button key="about">
                        <ListItemIcon>
                            <FcDepartment />
                        </ListItemIcon>
                        <ListItemText primary="Department"></ListItemText>
                    </ListItem>
                    <ListItem button key="about">
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="CSE"></ListItemText>
                    </ListItem>{" "}
                    <ListItem button key="about">
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="BBA"></ListItemText>
                    </ListItem>
                    <ListItem button key="about">
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="LLB"></ListItemText>
                    </ListItem>
                    <ListItem button key="about">
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="ECE"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button key="about">
                        <ListItemIcon>
                            <FcGraduationCap />
                        </ListItemIcon>
                        <ListItemText primary="Student"></ListItemText>
                    </ListItem>
                    <ListItem button key="about">
                        <ListItemIcon>
                            <FcManager />
                        </ListItemIcon>
                        <ListItemText primary="Teachers"></ListItemText>
                    </ListItem>
                    <Link to="/login">
                        <ListItem button key="about">
                            <ListItemIcon>
                                <AiOutlineLogin />
                            </ListItemIcon>
                            <ListItemText primary="Login"></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
            {/*   */}

        </span>

    );
};

export default Nevbar;
