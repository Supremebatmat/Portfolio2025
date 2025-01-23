import "./homePage.css";
import MathieuPriez from "../../assets/images/moi.jpg";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import javascript from "../../assets/images/js.png";
import sql from "../../assets/images/mysql.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import scrum from "../../assets/images/scrum.png";
import express from "../../assets/images/express.png";
import react from "../../assets/images/react.png";
import node from "../../assets/images/node.png";

function HomePage() {
  return (
    <div>
      <div className="container">
        <img src={MathieuPriez} alt="Mathieu_Priez" className="mathieu-priez" />
        <p className="presentation">
          <strong> À propos de moi</strong> <br /> Après 12 ans en tant que
          Conseiller Clientèle, j’ai décidé de réorienter ma carrière vers le
          développement web pour relever des défis techniques et donner libre
          cours à ma créativité. Mon expérience m’a permis de développer des
          compétences clés : Écoute active, pour comprendre et répondre aux
          besoins. Résolution de problèmes, en proposant des solutions adaptées.
          Accompagnement personnalisé, pour atteindre des objectifs ambitieux.
          Actuellement en formation à la Wild Code School, j’ai acquis des bases
          solides en HTML, CSS, JavaScript, React, ainsi qu’en Node.js et bases
          de données. Je travaille sur des projets concrets et collaboratifs,
          renforçant mes compétences techniques et humaines. Je suis à la
          recherche d’une alternance en développement web pour mettre en
          pratique mes acquis, continuer d’apprendre et contribuer à des projets
          numériques innovants. Motivé, rigoureux et orienté utilisateur, je
          suis prêt à devenir un atout pour votre équipe
        </p>
      </div>
      <div className="image-container">
        <img src={css} alt="css" className="image-item-one" />

        <img src={html} alt="html" className="image-item-two" />

        <img src={javascript} alt="javascript" className="image-item-three" />

        <img src={sql} alt="sql" className="image-item-four" />

        <img src={git} alt="git" className="image-item-five" />

        <img src={github} alt="github" className="image-item-six" />

        <img src={scrum} alt="scrum" className="image-item-seven" />

        <img src={express} alt="express" className="image-item-eight" />

        <img src={react} alt="react" className="image-item-nine" />

        <img src={node} alt="node" className="image-item-ten" />
      </div>
    </div>
  );
}

export default HomePage;
