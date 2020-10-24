import React from 'react'
import './styles/Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";



function Widgets() {
  return (
    <div className="widgets">
    <div id="demo" className="widgets__input" >
      <SearchIcon className="widgets__searchIcon" />
      <input 

      placeholder="Twitter'da Ara" type="text" />
    </div>

    <div className="widgets__widgetContainer">
        <h2>İlgini çekebilecek gündemler</h2>

        <TwitterTweetEmbed tweetId={"1317431804790493186"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="chagriacar"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/chagriacar"}
          options={{ text: "#denemeTweet test ediyoruz!!!", via: "chagriacar" }}
        />
      </div>

    </div>
  )
}

export default Widgets
