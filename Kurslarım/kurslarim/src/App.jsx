import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = async (id) => {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  };
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            {courses.length === 0 ? (
              <div className="refreshDiv">
                <h2>Kursların Hepsini Sildiniz !</h2>
                <button className="cardDeleteBtn" onClick={fetchCourses}>
                  Yenile
                </button>
              </div>
            ) : (
              <Courses courses={courses} removeCourse={deleteCourse} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
