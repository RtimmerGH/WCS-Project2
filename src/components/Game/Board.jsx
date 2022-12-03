/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/Game/Board.css";
import Enemy from "./Enemy";
// eslint-disable-next-line import/no-unresolved
import Player from "./Player";

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
