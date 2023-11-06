import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Rosset Guillaume </span>,
            j'ai 28 ans et j'habite à<span className="purple"> Rouen.</span>
            <br /> Je viens de faire une formation openClassrooms avec le
            parcours "Intégrateur web".
            <br />
            J'ai également un BTS administrateur réseau et système avec une
            expérience de plus de 5 ans dans l'informatique.
            <br />
            Je suis actuellement à la recherche d'un premier emploi dans le
            domaine du développement Web.
            <br />
            <br />
            En dehors des technologies, voici quelques activitées que j'apprécie
            :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Magie
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Mécanique
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Le succès est la somme de petits efforts, répétés jour après jour.
            "{" "}
          </p>
          <footer className="blockquote-footer">Robert Collier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
