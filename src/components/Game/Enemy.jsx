/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { FaShieldAlt } from "react-icons/fa";
import {
  GiDespair,
  GiAbdominalArmor,
  GiMagicShield,
  GiHeartBottle,
  GiPoisonBottle,
  GiDodging,
  GiFist,
  GiArmorUpgrade,
  GiHumanTarget,
  GiLifeBar,
  GiHealing,
  GiCardDiscard,
  GiBroadsword,
} from "react-icons/gi";
import "../../assets/css/Game/Enemy.css";

export default function Enemy({
  enemy,
  enemyLifeChange,
  enemyDisplayedActions,
  lvlGame,
  fightTurns,
}) {
  const enemyPassives = (lvl) => {
    switch (lvl) {
      case 3:
        return "Tous les 3 tours l'Herald gagne 1 point de dégat";
      case 5:
        return "Tous les 3 tours Nashor gagne 2 points de dégats et 2 point en resistance Physique, Magique et Poison / Tour 12: Enrage";
      default:
        return "";
    }
  };
  const enemyName = (lvl) => {
    switch (lvl) {
      case 1:
        return "Dragon";
      case 3:
        return "Herald";
      case 5:
        return "Nashor";
      default:
        return "";
    }
  };
  return (
    <div className="enemy-stat">
      <div className="Top-Enemy">
        <div
          className="block-enemy"
          title={`|||||    ${enemy.tempBuff.block.toString()} points de Block`}
        >
          {" "}
          <FaShieldAlt />
          {enemy.tempBuff.block > 0 && `${enemy.tempBuff.block}  `}
        </div>
        <div>
          <h3>
            {enemyName(lvlGame)}
            {lvlGame === 5 && fightTurns > 11 && ` enragé`}
          </h3>
        </div>
        <div
          className={enemyLifeChange > 0 ? "enemyLifeChange" : "enemyinferieur"}
        >
          <span>
            <GiLifeBar title="|||||    Derniers dégats subis ou derniers soins reçus" />{" "}
            {enemyLifeChange}
          </span>
        </div>
      </div>
      <div className="entoure-barredevie-enemy">
        <div className="vie-text-enemy">
          {enemy.currentLife} / {enemy.maxLife}
        </div>
        <div
          className="vie-enemy"
          style={{
            width: `${(enemy.currentLife / enemy.maxLife) * 100}%`,
          }}
        />
      </div>

      <div>
        {enemy.tempBuff.avoidAttack > 0 && (
          <span className="avoidAttack">
            {" "}
            <GiDodging title="|||||    Evite la prochaine attaque" />
            {enemy.tempBuff.avoidAttack > 0 &&
              `${enemy.tempBuff.avoidAttack}`}{" "}
          </span>
        )}

        {enemy.fullCombatBuff.attackBuff > 0 && (
          <span className="AttackBuff">
            {" "}
            <GiFist
              title={`|||||    ${enemy.fullCombatBuff.attackBuff.toString()} points d'attaque supplémentaires`}
            />
            {enemy.fullCombatBuff.attackBuff > 0 &&
              `${enemy.fullCombatBuff.attackBuff}`}{" "}
          </span>
        )}
        {enemy.fullCombatBuff.blockBuff > 0 && (
          <span className="blockBuff">
            {" "}
            <GiArmorUpgrade
              title={`|||||    ${enemy.fullCombatBuff.blockBuff.toString()} points de Block supplémentaires`}
            />
            {enemy.fullCombatBuff.blockBuff > 0 &&
              ` ${enemy.fullCombatBuff.blockBuff}`}{" "}
          </span>
        )}
        {enemy.resistPhys > 0 && (
          <span
            className="resist-phys"
            title="|||||    Réduit les dégats physiques reçus"
          >
            {" "}
            <GiAbdominalArmor />
            {enemy.resistPhys > 0 && ` ${enemy.resistPhys}`}{" "}
          </span>
        )}
        {enemy.resistMag > 0 && (
          <span className="resist-magic">
            {" "}
            <GiMagicShield title="|||||    Réduit les dégats magiques reçus" />
            {enemy.resistMag > 0 && ` ${enemy.resistMag}`}{" "}
          </span>
        )}
        {enemy.resistPoison > 0 && (
          <span className="resist-poison">
            {" "}
            <GiHeartBottle title="|||||    Réduit les dégats de poison reçus" />
            {enemy.resistPoison > 0 && ` ${enemy.resistPoison}`}{" "}
          </span>
        )}
        <div>
          {enemy.debuff.vulnerable > 0 && (
            <span className="vulnerable">
              {" "}
              <GiHumanTarget title="|||||    Subi 25% de dégats supplémentaires" />
              {enemy.debuff.vulnerable > 0 && `${enemy.debuff.vulnerable}`}{" "}
            </span>
          )}
          {enemy.debuff.weak > 0 && (
            <span className="weak">
              <GiDespair title="|||||    dégats réduits de 50%" />
              {enemy.debuff.weak > 0 && `${enemy.debuff.weak}`}{" "}
            </span>
          )}
          {enemy.debuff.poison > 0 && (
            <span className="poison">
              {" "}
              <GiPoisonBottle title="|||||    Subi des dégats de poison à chaque début de tour" />
              {enemy.debuff.poison > 0 && `${enemy.debuff.poison}`}
            </span>
          )}
        </div>
        <div className="Boss-Description-container">
          <div className="Boss-Intents">
            {/* <p className="Boss-Description">Prochaine Attaque: </p> */}
            <p className={enemyDisplayedActions.class1}>
              {enemyDisplayedActions.text1}
              <enemyDisplayedActions.icon1 />
            </p>
            <p
              className={
                enemyDisplayedActions.class2 ? enemyDisplayedActions.class2 : ""
              }
            >
              {"  "}
              {enemyDisplayedActions.text2 &&
                `. ${enemyDisplayedActions.text2}`}
              {enemyDisplayedActions.icon2 && <enemyDisplayedActions.icon2 />}
            </p>
          </div>
          <p className="Boss-Description">{enemyPassives(lvlGame)}</p>
        </div>
      </div>
    </div>
  );
}

Enemy.propTypes = {
  enemy: PropTypes.shape({
    currentLife: PropTypes.number,
    maxLife: PropTypes.number,
    resistPhys: PropTypes.number,
    resistMag: PropTypes.number,
    resistPoison: PropTypes.number,
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
  enemyDisplayedActions: PropTypes.string,
  lvlGame: PropTypes.number,
  fightTurns: PropTypes.number,
};

Enemy.defaultProps = {
  enemy: {
    currentLife: 200,
    maxLife: 200,
    resistPhys: 0,
    resistMag: 0,
    resistPoison: 0,
    tempBuff: { block: 0, avoidAttack: 0 },
    fullCombatBuff: { attackBuff: 0, blockBuff: 0 },
    debuff: { vulnerable: 0, weak: 0, poison: 0 },
  },
  enemyLifeChange: 0,
  enemyDisplayedActions: "",
  lvlGame: 0,
  fightTurns: 1,
};
