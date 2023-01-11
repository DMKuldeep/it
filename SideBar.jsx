import React from "react";
import { Article, Home, Settings } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupIcon from "@mui/icons-material/Group";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import ReportIcon from "@mui/icons-material/Report";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const SideBar = () => {
  return (
    <div>
    <div className="sidebar_crm">
    <ListItem disablePadding className="active">
      <ListItemButton href="#home">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Article />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email/Web Ticket" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Knowledge Base" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="QMS" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <SdStorageOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Call/IVR Reports" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="CRM Reports" />
    </ListItemButton>
    </ListItem>
  </div>
    </div>
  );
};

export default SideBar;
