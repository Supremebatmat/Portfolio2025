import "./Project.css";
import flandresto from "../../assets/images/FlandResto.gif";
import feedgood from "../../assets/images/feedgood.gif";
import wildex from "../../assets/images/wildex.gif";

function Project() {
  return (
    <div className="container-projects">
      <div className="container-project-titre-presentation">
        <div className="container-project">
          <h1 className="titre">Le Projet FeedGood</h1>
          <img src={feedgood} alt="Projet FeedGood" className="gif" />
        </div>
        <div className="container-presentation">
          <p className="presentation-project">
            Le projet FEEDGOOD est né d’une collaboration passionnée et rapide,
            où chaque membre de notre équipe a mis son énergie, sa créativité et
            son cœur dans la conception d'un site dédié à la bienveillance. En
            seulement 24 heures, nous avons créé un espace numérique où la
            positivité et la gentillesse sont les maîtres-mots. FEEDGOOD incarne
            notre conviction que chaque petit geste de bienveillance peut avoir
            un impact profond sur notre quotidien. Ce site est bien plus qu’une
            simple plateforme : c’est un appel à partager des messages positifs,
            à encourager l’empathie et à cultiver des relations authentiques. En
            travaillant ensemble, nous avons démontré que, même dans un délai
            aussi court, l’union de nos forces et de nos idées peut créer
            quelque chose de véritablement beau et significatif. Ce projet est
            une preuve que, lorsque nous choisissons d'agir avec bienveillance,
            nous pouvons non seulement enrichir nos vies, mais aussi celles des
            autres, et ensemble, semer les graines d’un monde plus chaleureux.
            <br />
            <strong> Technologies , outils et méthodes utilisées :</strong>
            React, TypeScript, Node.js, CSS, Javascript, Git, GitHub, Figma,
            VScode, Jira, Canva, methode agile
          </p>
        </div>
      </div>

      <div className="container-project-titre-presentation">
        <div className="container-project">
          <h1 className="titre">Le Projet FlandResto</h1>
          <img src={flandresto} alt="Projet FlandResto" className="gif" />
        </div>
        <div className="container-presentation">
          <p className="presentation-project">
            Le projet FLANDRESTO représente bien plus qu’un simple site de
            référencement de restaurants fictifs sur Lille : il incarne
            l’essence de la collaboration et de l’innovation. Réalisé par une
            équipe de quatre personnes en seulement trois semaines, ce projet a
            été une aventure technique et créative où chaque membre a apporté
            son expertise pour donner vie à une plateforme fluide et intuitive.
            En utilisant React pour la structure et en intégrant des APIs pour
            enrichir l’expérience utilisateur, nous avons conçu un site moderne
            et dynamique, capable de répondre aux besoins des passionnés de
            gastronomie. Ce projet nous a permis non seulement de mettre en
            pratique nos compétences en développement web, mais aussi de relever
            des défis de coordination et de gestion de projet. FLANDRESTO est le
            fruit d'une vision commune : créer une plateforme simple et efficace
            pour découvrir les meilleures adresses culinaires de Lille, tout en
            explorant les puissantes capacités offertes par les technologies
            modernes. Au-delà de l’aspect technique, ce projet est une belle
            illustration de ce que l’on peut accomplir quand une équipe unie par
            la même passion se lance dans une aventure ambitieuse, avec
            détermination et créativité.
            <br />
            <strong> Technologies , outils et méthodes utilisées :</strong>
            React, TypeScript, Node.js, CSS, Javascript, Git, GitHub, Figma,
            VScode, Jira, Canva, methode agile
          </p>
        </div>
      </div>

      <div className="container-project-titre-presentation">
        <div className="container-project">
          <h1 className="titre">Le Projet WILDEX</h1>
          <img src={wildex} alt="Projet WILDEX" className="gif" />
        </div>
        <div className="container-presentation">
          <p className="presentation-project">
            Le projet WILDEX est un portfolio simple et efficace qui regroupe
            tous les élèves de la WILD Code School de Lille. L'objectif était de
            créer une plateforme où chaque étudiant peut être présenté de
            manière claire et concise, avec sa photo, son nom et sa formation.
            Inspiré par l'univers Pokémon, le design du site apporte une touche
            ludique et colorée, tout en restant pratique et professionnel.
            WILDEX permet ainsi de donner une visibilité à chaque élève, tout en
            montrant la diversité des parcours au sein de la WILD Code School.
            Ce projet est une belle façon de rassembler la communauté et de
            mettre en avant les étudiants dans un cadre agréable et dynamique.
            <br />
            <strong> Technologies , outils et méthodes utilisées :</strong>{" "}
            HTML, CSS, Javascript, Git, GitHub, Figma, VScode
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
