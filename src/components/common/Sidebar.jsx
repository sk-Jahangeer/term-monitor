import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListItemIcon, Paper } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
// icons
import logo from "../../logo.svg";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import StarIcon from "@material-ui/icons/Star";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";

const options = [
    {
        id: 1,
        name: "Add keywords",
        icon: <HomeIcon className="list_icon" />,
        route: "/",
    },
    {
        id: 2,
        name: "Matches",
        icon: <PeopleIcon className="list_icon" />,
        route: "/matches",
    },
    {
        id: 3,
        name: "Manage sources",
        icon: <CreditCardIcon className="list_icon" />,
        route: "/manage-sources",
    },
    {
        id: 4,
        name: "Integration",
        icon: <CreditCardIcon className="list_icon" />,
        route: "/integration",
    },
    {
        id: 5,
        name: "Alerts",
        icon: <CreditCardIcon className="list_icon" />,
        route: "/alerts",
    },
];

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component={Paper} className="sidebar">
            <div className="flex logo">
                <img src={logo} className="logo_img" alt="logo_img" />
                <div className="logo_name">
                    Term
                    <span style={{ fontWeight: "500" }}>Monitor</span>
                </div>
            </div>
            {options.map((option) => (
                <ListItem
                    key={option.id}
                    button
                    component={NavLink}
                    to={option.route}
                    activeClassName="Mui-selected"
                    exact
                >
                    {option.icon}
                    <ListItemText primary={option.name} />
                </ListItem>
            ))}
            <ListItem button onClick={handleClick}>
                <StarIcon className="list_icon" />
                <ListItemText primary="Settings" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {open ? (
                <ListItem button style={{ paddingLeft: "40px" }}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            ) : null}
            <ListItem button>
                <ListItemText primary="Billing" />
            </ListItem>
        </List>
    );
};

export default Sidebar;
