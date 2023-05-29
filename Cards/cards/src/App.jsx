import { useState } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <img src={Angular} alt="" /> */}
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslar</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum numquam quod illum consectetur maxime beatae? Corrupti, molestiae nemo porro impedit officiis voluptas laudantium natus et ratione aliquam accusamus doloremque.
"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum numquam quod illum consectetur maxime beatae? Corrupti, molestiae nemo porro impedit officiis voluptas laudantium natus et ratione aliquam accusamus doloremque.
"
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="C #"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum numquam quod illum consectetur maxime beatae? Corrupti, molestiae nemo porro impedit officiis voluptas laudantium natus et ratione aliquam accusamus doloremque.
"
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Komple Web"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum numquam quod illum consectetur maxime beatae? Corrupti, molestiae nemo porro impedit officiis voluptas laudantium natus et ratione aliquam accusamus doloremque.
"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
