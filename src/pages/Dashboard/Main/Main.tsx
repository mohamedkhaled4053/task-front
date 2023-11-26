import React, { useEffect } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import headerImg from "../../../assets/desktop.svg";
import "./style.scss";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { Announcement } from "../../../components/Announcement/Announcement";
import { Exam } from "../../../components/Exam/Exam";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getAnnouncements, getExams } from "../../../features/dataSlice";

export const Main = () => {
  let { announcements, announcementsLoading, exams, examsLoading } =
    useAppSelector((state) => state.data);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExams());
    dispatch(getAnnouncements());
    //eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <div className="header">
          <div className="text">
            <h2>exams time</h2>
            <p>
              Here we are, Are ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </p>
            <p className="quote">
              "nothing happens until something moves" - Albert Einstein
            </p>
            <button className="view-tips">View exams tips</button>
          </div>
          <div className="header-img">
            <img src={headerImg} alt="header" />
          </div>
        </div>
        <div className="body">
          <div className="announcements">
            <SectionHeader
              title="Announcements"
              description="We educate warriors! Keep updated :)"
            />
            <div className="announcements-list">
              {announcementsLoading
                ? "loading..."
                : announcements?.length
                ? announcements.map((announcement) => (
                    <Announcement key={announcement._id} {...announcement} />
                  ))
                : "no announcements"}
            </div>
          </div>
          <div className="exams">
            <SectionHeader
              title="What's due"
              description='Sometimes "LATER" becomes "NEVER", Go Now'
            />
            <div className="exams-list">
              {examsLoading
                ? "loading..."
                : exams?.length
                ? exams!.map((exam) => <Exam key={exam._id} {...exam} />)
                : "no Exams"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
