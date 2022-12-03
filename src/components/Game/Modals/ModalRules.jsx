/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import "../../../assets/css/Game/ModalRules.css";

function ModalRules({ setModalRulesOpen }) {
  return (
    <button
      type="button"
      className="modalLibBackground"
      onClick={() => {
        setModalRulesOpen(false);
      }}
    >
      <div
        className="modalLibContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalLibTitleCloseBtn">
          <div
            type="button"
            onClick={() => {
              setModalRulesOpen(false);
            }}
          >
            X
          </div>
        </div>
        <div className="modalLibTitle">Règles du jeu</div>
        <div className="modalRulesDraft">
          <h2>Phase 1: Draft</h2>
          <p>
            Choisis 1 carte parmis les 3 proposées et crée ton Deck de 12 cartes
            pour affronter tes ennemis
          </p>
          <h2>Phase 2: Combat</h2>
          <p>
            Fait glisser tes cartes sur l'ennemi pour lui infliger des dégats ou
            générer des effets négatifs ou positifs.
            <br />
            Chaque carte coûte des points d'Energy, lorsque tu n'as plus assez
            d'Energy pour jouer, clique sur le bouton "End Turn".
            <br />
            Tu récupères toute ton Energy au début de ton tour.
            <br />
            Si la pile de pioche est vide, toutes les cartes du cimetierre sont
            mélangées pour la remplir de nouveau.
          </p>
          <h3>Effets Positifs</h3>
          <p>icones a mettre ici</p>
          <h3>Effets Négatifs</h3>
          <p>icones a mettre ici</p>
        </div>
      </div>
    </button>
  );
}

export default ModalRules;

ModalRules.propTypes = {
  setModalRulesOpen: PropTypes.func,
};

ModalRules.defaultProps = {
  setModalRulesOpen: () => {},
};
