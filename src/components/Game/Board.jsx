import "../../assets/css/Game/Board.css";
import PropTypes from "prop-types";
import Enemy from "./Enemy";
import Player from "./Player";
import ModalRules from "./Modals/ModalRules";

export default function Board({
  enemy,
  player,
  setEndPlayerTurn,
  fightTurns,
  playerLifeChange,
  enemyLifeChange,
  enemyDisplayedActions,
  lvlGame,
  enemyActionsResolution,
  endPlayerTurn,
  modalRulesOpen,
  setModalRulesOpen,
}) {
  return (
    <div className="board-container">
      <Enemy
        enemy={enemy}
        enemyLifeChange={enemyLifeChange}
        enemyDisplayedActions={enemyDisplayedActions}
        lvlGame={lvlGame}
      />
      <Player player={player} playerLifeChange={playerLifeChange} />
      <div className="energy-fdt">
        <div className="energy-div">
          <h2 className="energy-text">Energy</h2>
          <div className="mana-game">
            {player.currentEnergy}/{player.maxEnergy}
          </div>
        </div>
        <button
          className="findetour-game"
          type="button"
          onClick={() => setEndPlayerTurn(true)}
        >
          {" "}
          Tour: {fightTurns}
          <br />
          END TURN{" "}
        </button>
        <button
          className="menu-game"
          type="button"
          onClick={() => setModalRulesOpen(true)}
        >
          Menu
        </button>
        {modalRulesOpen && (
          <ModalRules setModalRulesOpen={setModalRulesOpen} lvlGame={lvlGame} />
        )}
      </div>
      <div className="">
        {(enemyActionsResolution || endPlayerTurn) && (
          <div>
            <h2
              style={{ position: "fixed", top: "30%", left: "42%", zIndex: 2 }}
            >
              Tour de l'ennemi
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

Board.propTypes = {
  player: PropTypes.shape({
    currentEnergy: PropTypes.number,
    maxEnergy: PropTypes.number,
    tempBuff: PropTypes.shape({
      block: PropTypes.number,
      avoidAttack: PropTypes.number,
    }),
    fullCombatBuff: PropTypes.shape({
      attackBuff: PropTypes.number,
      blockBuff: PropTypes.number,
    }),
    fullGameBuff: PropTypes.shape({
      magicBuff: PropTypes.number,
      physBuff: PropTypes.number,
      defenseBuff: PropTypes.number,
      poisonBuff: PropTypes.number,
      healBuff: PropTypes.number,
    }),
    debuff: PropTypes.shape({
      vulnerable: PropTypes.number,
      weak: PropTypes.number,
      poison: PropTypes.number,
      distribDown: PropTypes.number,
    }),
    drawCard: PropTypes.number,
    startDistrib: PropTypes.number,
  }),
  enemy: PropTypes.shape({
    currentLife: PropTypes.number,
    maxLife: PropTypes.number,
    resistPhys: PropTypes.number,
    resistMag: PropTypes.number,
    tempBuff: PropTypes.shape({
      block: PropTypes.number,
      avoidAttack: PropTypes.number,
    }),
    fullCombatBuff: PropTypes.shape({
      attackBuff: PropTypes.number,
      blockBuff: PropTypes.number,
    }),
    debuff: PropTypes.shape({
      vulnerable: PropTypes.number,
      weak: PropTypes.number,
      poison: PropTypes.number,
    }),
  }),
  enemyLifeChange: PropTypes.number,
  enemyActionsResolution: PropTypes.bool,
  enemyDisplayedActions: PropTypes.string,
  endPlayerTurn: PropTypes.bool,
  playerLifeChange: PropTypes.number,
  fightTurns: PropTypes.number,
  lvlGame: PropTypes.number,
  setEndPlayerTurn: PropTypes.func,
  modalRulesOpen: PropTypes.bool,
  setModalRulesOpen: PropTypes.func,
};

Board.defaultProps = {
  player: {
    currentEnergy: 0,
    maxEnergy: 0,
    tempBuff: {
      block: 0,
      avoidAttack: 0,
    },
    fullCombatBuff: {
      attackBuff: 0,
      blockBuff: 0,
    },
    fullGameBuff: {
      magicBuff: 0,
      physBuff: 0,
      defenseBuff: 0,
      poisonBuff: 0,
      healBuff: 0,
    },
    debuff: {
      vulnerable: 0,
      weak: 0,
      poison: 0,
      distribDown: -1,
    },
    drawCard: 0,
    startDistrib: 0,
  },
  enemy: {
    currentLife: 1000,
    maxLife: 1000,
    resistPhys: 0,
    resistMag: 0,
    tempBuff: {
      block: 0,
      avoidAttack: 0,
    },
    fullCombatBuff: {
      attackBuff: 0,
      blockBuff: 0,
    },
    debuff: {
      vulnerable: 0,
      weak: 0,
      poison: 0,
    },
  },
  fightTurns: 0,
  playerLifeChange: 0,
  enemyLifeChange: 0,
  enemyActionsResolution: false,
  enemyDisplayedActions: "",
  endPlayerTurn: false,
  lvlGame: 0,
  setEndPlayerTurn: () => {},
  modalRulesOpen: true,
  setModalRulesOpen: () => {},
};
