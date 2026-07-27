import "./App.css";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">Gregory Lapit</a>
          </li>
          <li>
            <a href="mailto:greglapit@gmail.com">greglapit@gmail.com</a>
          </li>
          <li>
            <Button
              txt="Linkedin"
              link="https://www.linkedin.com/in/gregory-lapit/"
            ></Button>
          </li>
          <li>
            <Button txt="Github" link="https://github.com/greglapit"></Button>
          </li>
        </ul>
      </nav>
      <header>
        <div>
          <h1>My Portfolio</h1>
        </div>
        <div className="header-content">
          <img
            width="300px"
            height="375px"
            src="portfolio_picture.jpg"
            alt="portfolio_picture"
          />
          <div className="text-container">
            <h2>Hi, I'm Greg.</h2>
            <p>
              I'm an engineer (software and mechanical) with an extensive
              background in research. I studied Physics and CS at Harvard
              university. Curious about my formal experiences? Check out below!
            </p>
            <Button txt="Resume" link="./resume.pdf"></Button>
            <p>Otherwise, take a look at some of my larger projects!</p>
          </div>
        </div>
      </header>
      <div className="project-grid">
        <section id="first-project">
          <div>
            <div className="flex-container project-title">
              <h2>Solitude - Godot Software Development</h2>
              <h2>2026</h2>
            </div>
            <div className="flex-container project-figures">
              <img
                width="533px"
                height="300px"
                src="ace_idle.gif"
                alt="solitude_game_gif"
              />
            </div>
            <div className="text-container">
              <p>
                <i>Solitude</i> is a game I have been developing independently
                from concept to implementation, combining software engineering
                with gameplay design. The project centers on a card-based combat
                system where each Diamond card becomes a unique weapon,
                challenging me to design engaging combat mechanics while
                building a modular architecture capable of supporting rapid
                iteration and long-term scalability. Along the way, I have
                implemented custom rendering effects with GLSL shaders,
                engineered decoupled gameplay systems, and continuously refined
                the player experience through iterative development and
                playtesting.
              </p>
            </div>
            <div className="read-more">
              <p>Read more about the project on Github!</p>
              <a href="https://github.com/greglapit/solitude" target="_blank">
                https://github.com/greglapit/solitude
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex-container project-title">
              <h2>Multithreaded Output For Open-Source Software with HDF5</h2>
              <h2>2025</h2>
            </div>
            <div className="flex-container project-figures">
              <img
                width="330px"
                height="300px"
                src="100k_cube.png"
                alt="100k element cube tesselation"
              />
              <img
                width="300px"
                height="300px"
                src="new_run_times_250k_1-128.png"
                alt="runtime-graphs"
              />
            </div>
            <div className="text-container">
              <p>
                Authored a CS paper at the University of Alabama on my
                investigation of HDF5-based output systems for FEPX, an
                open-source finite element package used to simulate the
                deformation of polycrystalline materials on high-performance
                computing clusters. By designing and executing 840 large-scale
                simulations, I evaluated how modern parallel I/O techniques
                affected runtime, scalability, storage efficiency, and
                usability. The results demonstrated that HDF5 (dashed) retained
                the speed advantages of fully parallel writes while reducing
                storage requirements by roughly 50% and eliminating workflow
                bottlenecks caused by traditional ASCII (dotted-dash) output
                formats.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex-container project-title">
            <h2>
              Engineering Precursor Delivery System for Molecular Beam Epitaxy
            </h2>
            <h2>2023</h2>
          </div>
          <div className="flex-container project-figures">
            <iframe
              width="560px"
              height="315px"
              src="https://www.youtube.com/embed/YJ2XhwLB_mI?si=WKL5ylbvzFD-jJ31"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="text-container">
            <p>
              As an undergraduate researcher at Harvard, I designed a precursor
              inlet system for molecular beam epitaxy (MBE) to enable the
              controlled delivery of a high-vapor-pressure metal-organic
              precursor used in the growth of tungsten ditelluride (WTe₂). The
              project combined vacuum system design, materials science, and
              experimental engineering to overcome limitations of conventional
              deposition methods, culminating in a presentation at the 2023
              American Physical Society conference.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
