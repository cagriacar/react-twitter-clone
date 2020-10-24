import React, { useState, useEffect } from "react";
import "./styles/Feed.css";
import TweetBox from "../tweetbox/TweetBox";
import Post from "../post/Post";
import db from "../firebase/firebase";

import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // sayfa yüklendiğinde useEffect post verilerini getirecek.
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
