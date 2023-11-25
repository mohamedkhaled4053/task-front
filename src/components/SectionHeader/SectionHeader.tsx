import React from "react";
import "./style.scss";

type Props = { title: string; description: string };

export const SectionHeader = ({ title, description }: Props) => {
  return (
    <div className="section-header">
      <div className="left">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="right">
        <span className="all">All</span>
      </div>
    </div>
  );
};
