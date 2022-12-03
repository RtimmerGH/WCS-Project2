import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "../../../assets/css/Game/ModalDraft.css";
import ModalRules from "./ModalRules";

export default function ModalStart({ setStartGame }) {
  const [modalRulesOpen, setModalRulesOpen] = useState(false);
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
      {modalRulesOpen && <ModalRules setModalRulesOpen={setModalRulesOpen} />}
    </div>
  );
}
ModalStart.propTypes = {
  setStartGame: PropTypes.func,
};

ModalStart.defaultProps = {
  setStartGame: () => {},
};
