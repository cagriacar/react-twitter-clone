import React from "react";
import "./styles/Sidebar.css";
import SidebarOption from "./sidebaroption/SidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Button } from "@material-ui/core";




export default function Sidebar() {
  return (
    <div className="sidebar">


      {/* Twitter Icon */}

      <TwitterIcon className="sidebar__twitterIcon" />
    
      {/* Sidebar Option */}
      <SidebarOption active Icon={HomeIcon} text="Anasayfa" />
      <SidebarOption Icon={SearchIcon} text="Keşfet" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Bildirimler" />
      <SidebarOption Icon={MailOutlineIcon} text="Mesajlar" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Yer İşaretleri" />
      <SidebarOption Icon={ListAltIcon} text="Listeler" />
      <SidebarOption Icon={PermIdentityIcon} text="Profil" />
      <SidebarOption Icon={MoreHorizIcon} text="Daha fazla" />
 
      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}
