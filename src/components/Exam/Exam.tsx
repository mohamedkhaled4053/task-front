import React from "react";
import "./style.scss";
import { FaHourglassHalf } from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

type Props = {
  title: string;
  course: { _id: string; title: string };
  topic: string;
  dueTo: string;
  type: "quiz" | "assignment";
};

export const Exam = ({ title, course, topic, dueTo, type }: Props) => {
  return (
    <div className="exam">
      <div className="exam-title">
        {type === "quiz" ? (
          <FaHourglassHalf />
        ) : (
          <MdOutlineAssignmentTurnedIn />
        )}
        {title}
      </div>
      <div className="exam-course">course: {course.title}</div>
      <div className="exam-topic">topic: {topic}</div>
      <div className="exam-due-to">due to: {dueTo}</div>
      <button className="exam-start">
        {type === "quiz" ? "Start Quiz" : "Solve Assignment"}
      </button>
    </div>
  );
};
