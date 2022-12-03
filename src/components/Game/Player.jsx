/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { FaShieldAlt } from "react-icons/fa";
import {
  GiCardDiscard,
  GiDespair,
  GiPoisonBottle,
  GiDodging,
  GiFist,
  GiArmorUpgrade,
  GiHumanTarget,
  GiLifeBar,
  GiMagicSwirl,
  GiSwordsPower,
  GiHealthIncrease,
} from "react-icons/gi";
import "../../assets/css/Game/player.css";

export default function Player({ player, playerLifeChange }) {
  return (
    <div className="player-stat">
      <div className="Top-Player">
        <div className="block-player">
          <FaShieldAlt
            title={`|||||    ${player.tempBuff.block.toString()} points de Block`}
          />
          {player.tempBuff.block > 0 && `${player.tempBuff.block} `}
        </div>
        <div className="player-Name">
          <h3>joueur</h3>
        </div>
        <div
          className={
            playerLifeChange > 0 ? "playerLifeChange" : "playerinferieur"
          }
        >
          {" "}
          <span>
            <GiLifeBar title="|||||    Derniers dégats subis ou derniers soins reçus" />{" "}
            {playerLifeChange}
          </span>
        </div>
      </div>
      <div className="entoure-barredevie-player">
        <div className="vie-text-player">
          {player.currentLife} / {player.maxLife}
        </div>
        <div
          className="vie-player"
          style={{
            width: `${(player.currentLife / player.maxLife) * 100}%`,
          }}
        />
      </div>
      <div>
        {player.tempBuff.avoidAttack > 0 && (
          <span className="avoidAttack">
            <GiDodging title="|||||    Evite la prochaine attaque" />
            {player.tempBuff.avoidAttack > 0 &&
              `${player.tempBuff.avoidAttack}`}{" "}
          </span>
        )}
        {player.fullCombatBuff.attackBuff > 0 && (
          <span className="attackBuff">
            <GiFist
              title={`|||||    ${player.fullCombatBuff.attackBuff.toString()} points d'attaque supplémentaires`}
            />
            {player.fullCombatBuff.attackBuff > 0 &&
              `${player.fullCombatBuff.attackBuff}`}{" "}
          </span>
        )}
        {player.fullCombatBuff.blockBuff > 0 && (
          <span className="blockBuff">
            <GiArmorUpgrade
              title={`|||||    ${player.fullCombatBuff.blockBuff.toString()} points de Block supplémentaires`}
            />
            {player.fullCombatBuff.blockBuff > 0 &&
              `${player.fullCombatBuff.blockBuff}`}{" "}
          </span>
        )}
        {player.fullGameBuff.healBuff > 0 && (
          <span className="healPlusBuff" style={{ color: "orange" }}>
            <GiHealthIncrease
              title={`|||||    ${player.fullGameBuff.healBuff.toString()} points de Soin supplémentaires`}
            />
            {player.fullGameBuff.healBuff > 0 &&
              `${player.fullGameBuff.healBuff}`}{" "}
          </span>
        )}
        {player.fullGameBuff.magicBuff > 0 && (
          <span className="magicBuff" style={{ color: "orange" }}>
            <GiMagicSwirl
              title={`|||||    ${player.fullGameBuff.magicBuff.toString()} points de dégats magiques supplémentaires`}
            />
            {player.fullGameBuff.magicBuff > 0 &&
              `${player.fullGameBuff.magicBuff}`}{" "}
          </span>
        )}
        {player.fullGameBuff.physBuff > 0 && (
          <span className="blockBuff" style={{ color: "orange" }}>
            <GiSwordsPower
              title={`|||||    ${player.fullGameBuff.physBuff.toString()} points de dégats physiques supplémentaires`}
            />
            {player.fullGameBuff.physBuff > 0 &&
              `${player.fullGameBuff.physBuff}`}{" "}
          </span>
        )}
        {player.fullGameBuff.defenseBuff > 0 && (
          <span className="defenseBuff" style={{ color: "orange" }}>
            <GiArmorUpgrade
              title={`|||||    ${player.fullGameBuff.defenseBuff.toString()} points de Block supplémentaires`}
            />
            {player.fullGameBuff.defenseBuff > 0 &&
              `${player.fullGameBuff.defenseBuff}`}{" "}
          </span>
        )}
        {player.fullGameBuff.poisonBuff > 0 && (
          <span className="poisonBuff" style={{ color: "orange" }}>
            <GiPoisonBottle
              title={`|||||    ${player.fullGameBuff.poisonBuff.toString()} points de poison supplémentaires`}
            />
            {player.fullGameBuff.poisonBuff > 0 &&
              `${player.fullGameBuff.poisonBuff}`}{" "}
          </span>
        )}
        <div>
          {player.debuff.vulnerable > 0 && (
            <span className="vulnerable">
              <GiHumanTarget title="|||||    Subi 25% de dégats supplémentaires" />
              {player.debuff.vulnerable > 0 && `${player.debuff.vulnerable}`}{" "}
            </span>
          )}
          {player.debuff.weak > 0 && (
            <span className="weak">
              <GiDespair title="|||||    dégats réduits de 50%" />
              {player.debuff.weak > 0 && `${player.debuff.weak}`}{" "}
            </span>
          )}
          {player.debuff.poison > 0 && (
            <span className="poison">
              <GiPoisonBottle title="|||||    Subi des dégats de poison à chaque début de tour" />
              {player.debuff.poison > 0 && `${player.debuff.poison}`}{" "}
            </span>
          )}
          {player.debuff.distribDown > -1 && (
            <span className="distribDown">
              <GiCardDiscard title="|||||    Reçoit 1 carte de moins au début du tour" />
              {player.debuff.distribDown > -1 &&
                `${player.debuff.distribDown + 1}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    currentLife: PropTypes.number,
    maxLife: PropTypes.number,
    currentEnergy: PropTypes.number,
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
  playerLifeChange: PropTypes.number,
};

Player.defaultProps = {
  player: {
    currentLife: 0,
    maxLife: 0,
    currentEnergy: 0,
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
  playerLifeChange: 0,
};
