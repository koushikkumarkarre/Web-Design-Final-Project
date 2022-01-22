import react from "react";
import "./Main.scss";
import MainCourses from "./MainCourses";

//This code is display the carousel theme in the landing page

class Main extends react.Component {
  render() {
    return (
      <main className="mainClass">
        <div className="navigator"></div>
        <section class="section-about">
          <MainCourses />
          <div class="align-center">
            <h2 class="heading-secondary">Learn the Latest Technologies Here</h2>
          </div>
          <div class="most-pop-course flex-col">
            <div class="textComponent flex-col">
              <p class="paragraph">
                We bring to you the latest courses to stay up to date with today's fast evolving world. 
                Curated by community members spread across the world, we aim to provide you with the best knowledge, 
                so you can make our own.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;