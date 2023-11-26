import React, { useEffect } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import headerImg from "../../../assets/desktop.svg";
import "./style.scss";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { Announcement } from "../../../components/Announcement/Announcement";
import { Exam } from "../../../components/Exam/Exam";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getAnnouncements, getExams } from "../../../features/dataSlice";
import { useTranslation } from "react-i18next";

export const Main = () => {
  let { announcements, announcementsLoading, exams, examsLoading } =
    useAppSelector((state) => state.data);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExams());
    dispatch(getAnnouncements());
    //eslint-disable-next-line
  }, []);

  let { t } = useTranslation();

  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <div className="header">
          <div className="text">
            <h2>{t("header.title")}</h2>
            <p>{t("header.description")}</p>
            <p className="quote">{t("header.quote")} </p>
            <button className="view-tips">{t("header.button")}</button>
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
