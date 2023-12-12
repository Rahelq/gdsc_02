import { useState } from "react";
import App from "./App";
function GroupMembers() {
  const members = [
    "Osman Hassan",
    "Rahel Belay",
    "Rediet Belay",
    "Nathan Israel",
    "Natinael Wondimagegnehu ",
    "Olbia Letta ",
    "Temesgen Getye",
    "Robel Teshome",
    "Ruth Tadesse",
    "solomon sheleme",
    "surafel nigusie",
    "Ruth Zenabu",
    "Salahuddin Hafiz",
    "Salem Habte",
    "samual keleb",
    "Seid Yesuf ",
  ];
  const Studentsmap = members.map(function (name, index) {
    return (
      <p>
        student {index + 1} {name}
      </p>
    );
  });
  return (
    <>
      <div className="stud">{Studentsmap}</div>
    </>
  );
}

export default GroupMembers;
