import "./Project.css";
import wildex from "../../assets/images/wildex.gif";
import flandresto from "../../assets/images/FlandResto.gif";
import feedgood from "../../assets/images/feedgood.gif";

function Project() {
    return (
      <div>
        <div className="container-project">
          <h1 className="titre">Le Projet FeedGood</h1>
          <img src={feedgood} alt="Mathieu_Priez" className="gif" />
        </div>
        <p className="presentation">
          Après 12 ans en tant que Conseiller Clientèle, j’ai décidé de donner
          un nouvel élan à ma carrière en me formant au développement web, prêt
          à relever des défis techniques et à explorer ma créativité. Mon
          expérience dans la relation client m’a permis de développer des
          qualités précieuses : une écoute attentive, la capacité de résoudre
          des problèmes complexes et l’habitude d’accompagner les clients dans
          la réalisation de leurs projets. Désormais, je mets ces compétences au
          service de la technologie et de l’innovation, avec l’ambition de créer
          des solutions numériques qui font la différence. Actuellement, je suis
          à la recherche d’une alternance dans le développement Web. Cette
          opportunité me permettrait de mettre en pratique mes acquis,
          d’enrichir
        </p>
        <div className="container-project">
          <h1 className="titre">Le Projet FlandResto</h1>
          <img src={flandresto} alt="Mathieu_Priez" className="gif" />
        </div>
        <p className="presentation">
          Après 12 ans en tant que Conseiller Clientèle, j’ai décidé de donner
          un nouvel élan à ma carrière en me formant au développement web, prêt
          à relever des défis techniques et à explorer ma créativité. Mon
          expérience dans la relation client m’a permis de développer des
          qualités précieuses : une écoute attentive, la capacité de résoudre
          des problèmes complexes et l’habitude d’accompagner les clients dans
          la réalisation de leurs projets. Désormais, je mets ces compétences au
          service de la technologie et de l’innovation, avec l’ambition de créer
          des solutions numériques qui font la différence. Actuellement, je suis
          à la recherche d’une alternance dans le développement Web. Cette
          opportunité me permettrait de mettre en pratique mes acquis,
          d’enrichir
        </p>
        <div className="container-project">
          <h1 className="titre">Le Projet WILDEX</h1>
          <img src={wildex} alt="Mathieu_Priez" className="gif" />
        </div>
        <p className="presentation">
          Après 12 ans en tant que Conseiller Clientèle, j’ai décidé de donner
          un nouvel élan à ma carrière en me formant au développement web, prêt
          à relever des défis techniques et à explorer ma créativité. Mon
          expérience dans la relation client m’a permis de développer des
          qualités précieuses : une écoute attentive, la capacité de résoudre
          des problèmes complexes et l’habitude d’accompagner les clients dans
          la réalisation de leurs projets. Désormais, je mets ces compétences au
          service de la technologie et de l’innovation, avec l’ambition de créer
          des solutions numériques qui font la différence. Actuellement, je suis
          à la recherche d’une alternance dans le développement Web. Cette
          opportunité me permettrait de mettre en pratique mes acquis,
          d’enrichir
        </p>
      </div>
    );
}

export default Project;