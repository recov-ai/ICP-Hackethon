import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import '../../scss/Dashboard/PostCard.scss';

const PostCard = ({ username, time, content, image, likes, comments, profile }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profile} alt="User" className="avatar" />
        <div>
          <h4>{username}</h4>
          <p>{time}</p>
        </div>
      </div>
      <p className="post-content">{content}</p>
      {image && <img src={image} alt="Post" className="post-image" />}
      <div className="post-footer">
        <div className='btns-post'>
          <span><FaHeart className='icon-post' /> {likes} Likes</span>
          <span><FaComment className='icon-post' /> {comments} Comments</span>
        </div>
        <input type="text" placeholder='Write your message...' />
      </div>
    </div>
  );
};

export default PostCard;
