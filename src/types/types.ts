export interface IUser {
  name: string;
  userName: string;
  password: string;
}

export interface IAnnouncement {
  _id: string;
  announcer: string;
  department: string;
  content: string;
  image: string;
}
export interface IExam {
  _id: string;
  title: string;
  course: { _id: string; title: string };
  topic: string;
  type: "quiz" | "assignment";
  dueTo: string;
}
