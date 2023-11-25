import React from "react";
import './style.scss'

type Props = {
  announcer: string;
  content: string;
  department: string;
  image: string;
};

export const Announcement = ({
  announcer,
  content,
  department,
  image,
}: Props) => {
  return (
    <div className="announcement">
      <div className="announcer">
        <img className="announcer-img" src={image} alt="announcer" />
        <div>
          <div className="announcer-name">{announcer}</div>
          <div className="department">{department}</div>
        </div>
      </div>
        <div className="line"></div>
      <div className="announcement-content">{content}</div>
    </div>
  );
};
