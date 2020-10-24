import React, { useState } from 'react'
import './styles/TweetBox.css';
import { Avatar, Button } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import EventIcon from '@material-ui/icons/Event';
import db from '../firebase/firebase'

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Çağrı Acar",
      username: "chagriacar",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1315802998552002560/1mpIKno__400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };
   

  return (
    <div className="tweetBox">

      <form>
        <div className="tweetBox__input">
        <Avatar src="https://pbs.twimg.com/profile_images/1315802998552002560/1mpIKno__400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Neler oluyor?"
            type="text"
          />
   </div>
   <div className="Icons">
   <ImageOutlinedIcon  className="tweetBox__Icons" />
   <GifOutlinedIcon  className="tweetBox__Icons"  />
   <EmojiEmotionsOutlinedIcon className="tweetBox__Icons" />
   <EventIcon className="tweetBox__Icons" />
   </div>
   <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Yükle: Resim URL bilgisi girin"
          type="text"
        />
      

     
        <Button 
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
