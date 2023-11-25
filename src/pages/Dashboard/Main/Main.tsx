import React from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import headerImg from "../../../assets/desktop.svg";
import "./style.scss";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { Announcement } from "../../../components/Announcement/Announcement";

export const Main = () => {
  let announcements = [
    {
      _id: "655d13b966efac37bdaed7ee",
      announcer: "Mr.Ahmed Mostafa",
      department: "Math 101",
      image: "https://placebear.com/500/500",
      content:
        "Hi my heros! I just want you ready to our exams and focus on remaining assesments to gain more grades. good luck my warriors!😁",
    },
    {
      _id: "655d13b966efac37bdaed7ef",
      announcer: "Mrs.Samia Ahmed",
      department: "Physics 02",
      image: "https://placebear.com/500/500",

      content:
        "Hello my students, I want to announce that the next quiz will be within 3 days and will cover the whole unit2: Add and subtract number, Study hard Good luck :)",
    },
    {
      _id: "655d13b966efac37bdaed7f0",
      announcer: "School Management",
      department: "Management",
      image: "https://placebear.com/500/500",

      content:
        "Goooooooooooood morning, Warriors! That get-ready-for-the-day call is heard each morning by 850 students at Goodwyn Junior High School in Tagamoo, Egypt. I just want you ready to our exams and focus on remaining assesments to gain more grades. good luck my warriors!😁",
    },
    {
      _id: "655d13b966efac37bdaed7f1",
      announcer: "Events Manager",
      department: "Events",
      image: "https://placebear.com/500/500",

      content:
        "Helloooo, Can't wait our upcoming trip on the next weekend, The trip will be to Dreampark and Pyramids :D to book your seat please contact your class teacher.",
    },
  ];
  // let exams = [
  //   {
  //     _id: "655d167466efac37bdaed7f2",
  //     title: "Unit 2 quiz",
  //     course: { _id: "655d0e7f66efac37bdaed7eb", title: "Physics 02" },
  //     topic: "unit 2 motion and forces",
  //     dueTo: "2023-12-31T00:00:00.000Z",
  //     type: "quiz",
  //   },
  //   {
  //     _id: "655d167466efac37bdaed7f3",
  //     title: "12-12 Assignment",
  //     course: { _id: "655d0e7f66efac37bdaed7ec", title: "Arabic 12" },
  //     topic: "الوحدة الثانية - الأفعال",
  //     dueTo: "2023-11-30T00:00:00.000Z",
  //     type: "assignment",
  //   },
  // ];
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
              {announcements.map((announcement) => (
                <Announcement key={announcement._id} {...announcement} />
              ))}
            </div>
          </div>
          <div className="exams">
            <SectionHeader
              title="What's due"
              description='Sometimes "LATER" becomes "NEVER", Go Now'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
