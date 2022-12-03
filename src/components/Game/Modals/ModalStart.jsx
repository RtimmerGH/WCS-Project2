import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../../assets/css/Game/ModalDraft.css";
import ModalRules from "./ModalRules";

export default function ModalStart({
  setStartGame,
  lvlGame,
  modalRulesOpen,
  setModalRulesOpen,
}) {
  return (
    <div className="Modale-start">
      <button
        type="button"
        className="Modale-validate"
        onClick={() => setStartGame(1)}
      >
        START GAME
      </button>
      <Link className="Modale-link" to="/">
        <button type="button" className="Modale-validate">
          QUIT GAME
        </button>
      </Link>
      <button
        type="button"
        className="Modale-validate"
        onClick={() => setModalRulesOpen(true)}
      >
        REGLES DU JEU
      </button>
      {modalRulesOpen && (
        <ModalRules setModalRulesOpen={setModalRulesOpen} lvlGame={lvlGame} />
      )}
    </div>
  );
}
ModalStart.propTypes = {
  setStartGame: PropTypes.func,
  lvlGame: PropTypes.number,
  modalRulesOpen: PropTypes.bool,
  setModalRulesOpen: PropTypes.func,
};

ModalStart.defaultProps = {
  setStartGame: () => {},
  lvlGame: 0,
  modalRulesOpen: true,
  setModalRulesOpen: () => {},
};
