import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const randomCourse = () => {
    let randomIndex = Math.floor(Math.random() * courses.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    setIndex(randomIndex);
  };

  return (
    <div className="courseMainDiv">
      <div className="courseTitleandButton">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={randomCourse}>
          {" "}
          Rastgele Kurs Ata!
        </button>
      </div>

      <div className="cardDiv">
        <button className="prevNextBtn">
          <FaChevronLeft
            onClick={() =>
              index !== 0 ? setIndex(index - 1) : setIndex(courses.length - 1)
            }
          />
        </button>

        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNextBtn">
          <FaChevronRight
            onClick={() =>
              index !== courses.length - 1 ? setIndex(index + 1) : setIndex(0)
            }
          />
        </button>
      </div>
    </div>
  );
}

export default Courses;
