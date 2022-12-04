import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import {
  GiDespair,
  GiPoisonBottle,
  GiDodging,
  GiHumanTarget,
  GiCardDiscard,
  GiBroadsword,
  GiHealing,
} from "react-icons/gi";
import ModalDisplay from "../components/Game/ModalDisplay";
import Deck from "../components/Game/Deck";
import Board from "../components/Game/Board";

import "../assets/css/Game.css";

export default function Game() {
  const [modalRulesOpen, setModalRulesOpen] = useState(false);
  const [render, setRender] = useState(false);
  const [deckJeu, setDeckJeu] = useState([]);
  const [lvlGame, setLvlGame] = useState(0);
  const [startPlayerTurn, setStartPlayerTurn] = useState(true);
  const [endPlayerTurn, setEndPlayerTurn] = useState(false);
  const [enemyActionsResolution, setEnemyActionsResolution] = useState(false);
  const [fightTurns, setFightTurns] = useState(1);
  const [totalTurns, setTotalTurns] = useState(1);
  const [playerLifeChange, setPlayerLifeChange] = useState(0);
  const [enemyLifeChange, setEnemyLifeChange] = useState(0);
  const [prevPlayerLife, setPrevPlayerLife] = useState(100);
  const [prevEnemyLife, setPrevEnemyLife] = useState(200);
  const [item, setItem] = useState({});
  // Objet représentant le joueur test
  const [playerStats, setPlayerStats] = useState({
    currentLife: 100,
    maxLife: 100,
    currentEnergy: 3,
    maxEnergy: 3,
    tempBuff: { block: 0, avoidAttack: 0 },
    fullCombatBuff: { attackBuff: 0, blockBuff: 0 },
    fullGameBuff: {
      magicBuff: 0,
      physBuff: 0,
      defenseBuff: 0,
      poisonBuff: 0,
      healBuff: 0,
    },
    debuff: { vulnerable: 0, weak: 0, poison: 0, distribDown: -1 },
    drawCard: 0,
    startDistrib: 5,
  });
  // Objet représentant l'ennemi combattu
  const [enemyStats, setEnemyStats] = useState({
    currentLife: 200,
    maxLife: 200,
    resistPhys: 0,
    resistMag: 0,
    resistPoison: 0,
    tempBuff: { block: 0, avoidAttack: 0 },
    fullCombatBuff: { attackBuff: 0, blockBuff: 0 },
    debuff: { vulnerable: 0, weak: 0, poison: 0 },
  });
  // Objet représentant les actions effectuées par l'ennemi pendant son tour
  const [enemyActions, setEnemyActions] = useState({
    attack: 25,
    poison: 0,
    block: 0,
    avoidAttack: 0,
    vulne: 0,
    weak: 0,
    attackBuff: 0,
    blockBuff: 0,
    drawDebuff: 0,
    leech: false,
    distribDown: -1,
    displayedActions: { text1: `25 `, icon1: GiBroadsword },
  });
  // Objet représentant la liste des actions possible de l'ennemi pendant le combat
  const [indexActionList, setIndexActionList] = useState(0);
  const [enemyActionList, setEnemyActionList] = useState([
    {
      attack: 25,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `25 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
      },
    },
    {
      attack: 0,
      poison: 0,
      block: 20,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: 2,
      displayedActions: {
        text1: `20 `,
        icon1: FaShieldAlt,
        class1: "FaShieldAlt",
        text2: ` 2 `,
        icon2: GiCardDiscard,
        class2: "GiCardDiscard",
      },
    },
    {
      attack: 20,
      poison: 0,
      block: 20,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `20 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 20 `,
        icon2: FaShieldAlt,
        class2: "FaShieldAlt",
      },
    },
    {
      attack: 20,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 2,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `20 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 2 `,
        icon2: GiDespair,
        class2: "GiDespair",
      },
    },
    {
      attack: 30,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `30 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
      },
    },
  ]);

  // objet représentant les stats de départ de l'ennemi 2
  const enemyLvl3 = {
    currentLife: 300,
    maxLife: 300,
    resistPhys: 5,
    resistMag: 0,
    resistPoison: 0,
    tempBuff: { block: 0, avoidAttack: 0 },
    fullCombatBuff: { attackBuff: 0, blockBuff: 0 },
    debuff: { vulnerable: 0, weak: 0, poison: 0 },
  };
  // objet représentant les stats de départ de l'ennemi 3
  const enemyLvl5 = {
    currentLife: 500,
    maxLife: 500,
    resistPhys: 10,
    resistMag: 10,
    resistPoison: 5,
    tempBuff: { block: 0, avoidAttack: 0 },
    fullCombatBuff: { attackBuff: 0, blockBuff: 0 },
    debuff: { vulnerable: 0, weak: 0, poison: 0 },
  };
  // objet représentant les actions possibles de l'ennemi 2
  const actionEnemyLvl3 = [
    {
      attack: 30,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: 1,
      displayedActions: {
        text1: `30 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 1 `,
        icon2: GiCardDiscard,
        class2: "GiCardDiscard",
      },
    },
    {
      attack: 25,
      poison: 0,
      block: 20,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `25 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 20 `,
        icon2: FaShieldAlt,
        class2: "FaShieldAlt",
      },
    },
    {
      attack: 0,
      poison: 0,
      block: 25,
      avoidAttack: 0,
      vulne: 1,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `25 `,
        icon1: FaShieldAlt,
        class1: "FaShieldAlt",
        text2: ` 1 `,
        icon2: GiHumanTarget,
        class2: "GiHumanTarget",
      },
    },
    {
      attack: 30,
      poison: 0,
      block: 10,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `30 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 10 `,
        icon2: FaShieldAlt,
        class2: "FaShieldAlt",
      },
    },
    {
      attack: 30,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: true,
      distribDown: -1,
      displayedActions: {
        text1: `30 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` Vol de vie `,
        icon2: GiHealing,
        class2: "GiHealing",
      },
    },
  ];
  // objet représentant les actions possibles de l'ennemi 3
  const actionEnemyLvl5 = [
    {
      attack: 30,
      poison: 0,
      block: 15,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `30 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 15 `,
        icon2: FaShieldAlt,
        class2: "FaShieldAlt",
      },
    },
    {
      attack: 0,
      poison: 5,
      block: 15,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `5 `,
        icon1: GiPoisonBottle,
        class1: "GiPoisonBottle",
        text2: ` 15 `,
        icon2: FaShieldAlt,
        class2: "FaShieldAlt",
      },
    },
    {
      attack: 40,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: true,
      distribDown: -1,
      displayedActions: {
        text1: `40 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 15 `,
        icon2: GiHealing,
        class2: "GiHealing",
      },
    },
    {
      attack: 0,
      poison: 0,
      block: 0,
      avoidAttack: 1,
      vulne: 0,
      weak: 1,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: -1,
      displayedActions: {
        text1: `1 `,
        icon1: GiDodging,
        class1: "GiDodging",
        text2: ` 1 `,
        icon2: GiDespair,
        class2: "GiDespair",
      },
    },
    {
      attack: 50,
      poison: 0,
      block: 0,
      avoidAttack: 0,
      vulne: 0,
      weak: 0,
      attackBuff: 0,
      blockBuff: 0,
      drawDebuff: 0,
      leech: false,
      distribDown: 1,
      displayedActions: {
        text1: `50 `,
        icon1: GiBroadsword,
        class1: "GiBroadsword",
        text2: ` 1 `,
        icon2: GiCardDiscard,
        class2: "GiCardDiscard",
      },
    },
  ];
  // fonctions--------------------------------------------------
  const startPlayerTurnActionsForPlayer = (player) => {
    const playerCopy = player;
    playerCopy.currentEnergy = playerCopy.maxEnergy;
    playerCopy.tempBuff.block = 0;
    playerCopy.currentLife -= playerCopy.debuff.poison;
    return playerCopy;
  };
  const startPlayerTurnActionsForEnemy = (enemy) => {
    const enemyCopy = enemy;
    if (enemyCopy.debuff.vulnerable > 0) {
      enemyCopy.debuff.vulnerable -= 1;
    }
    if (enemyCopy.debuff.weak > 0) {
      enemyCopy.debuff.weak -= 1;
    }
    if (enemyCopy.debuff.poison > 0) {
      enemyCopy.debuff.poison -= 1;
    }
    return enemyCopy;
  };
  const endPlayerTurnActionsForEnemy = (enemy) => {
    const enemyCopy = enemy;
    enemyCopy.tempBuff.block = 0;
    enemyCopy.currentLife -=
      enemyCopy.debuff.poison > enemyCopy.resistPoison
        ? enemyCopy.debuff.poison - enemyCopy.resistPoison
        : 0;
    if (lvlGame === 3 && fightTurns % 3 === 0) {
      enemyCopy.fullCombatBuff.attackBuff += 1;
    }
    if (lvlGame === 5 && fightTurns % 3 === 0) {
      enemyCopy.fullCombatBuff.attackBuff += 2;
      enemyCopy.resistMag += 2;
      enemyCopy.resistPhys += 2;
      enemyCopy.resistPoison += 2;
    }
    if (lvlGame === 5 && fightTurns === 11) {
      enemyCopy.fullCombatBuff.attackBuff += 50;
    }
    return enemyCopy;
  };
  const endPlayerTurnActionsForPlayer = (player) => {
    const playerCopy = player;
    if (playerCopy.debuff.vulnerable > 0) {
      playerCopy.debuff.vulnerable -= 1;
    }
    if (playerCopy.debuff.weak > 0) {
      playerCopy.debuff.weak -= 1;
    }
    if (playerCopy.debuff.poison > 0) {
      playerCopy.debuff.poison -= 1;
    }
    if (playerCopy.debuff.distribDown > -1) {
      playerCopy.debuff.distribDown -= 1;
    }
    return playerCopy;
  };
  // Delay function for enemy turn
  // eslint-disable-next-line no-promise-executor-return
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // fin des fonctions-----------------------------------------
  // tour du joueur
  useEffect(() => {
    if (startPlayerTurn) {
      const playerStatsCopy = playerStats;
      const enemyStatsCopy = enemyStats;
      const enemyActionsCopy = enemyActionList[indexActionList];
      if (indexActionList < 4) {
        setIndexActionList((prev) => prev + 1);
      } else setIndexActionList(0);
      setEnemyActions(enemyActionsCopy);
      setPlayerStats(startPlayerTurnActionsForPlayer(playerStatsCopy));
      setEnemyStats(startPlayerTurnActionsForEnemy(enemyStatsCopy));
      setStartPlayerTurn(false);
    }
  }, [startPlayerTurn]);
  // tour de l'ennemi
  // actions de début de tour enemy
  useEffect(() => {
    // changes
    async function delayStartEnemyTurn() {
      await delay(300);
      const playerStatsCopy = playerStats;
      const enemyStatsCopy = enemyStats;
      setPlayerStats(endPlayerTurnActionsForPlayer(playerStatsCopy));
      setEnemyStats(endPlayerTurnActionsForEnemy(enemyStatsCopy));
      setEndPlayerTurn(false);
      setEnemyActionsResolution(true);
      setEndPlayerTurn(false);
      setEnemyActionsResolution(true);
    }
    // fin changes
    if (endPlayerTurn) {
      delayStartEnemyTurn();
    }
  }, [endPlayerTurn]);

  // actions de enemy
  useLayoutEffect(() => {
    // changes
    async function delayStartEnemyAction() {
      await delay(1000);
      // changes
      const playerCopy = playerStats;
      const enemyCopy = enemyStats;
      /* Attack action */
      if (enemyActions.attack > 0) {
        if (playerCopy.tempBuff.avoidAttack === 0) {
          let damage = Math.round(
            (enemyActions.attack + enemyCopy.fullCombatBuff.attackBuff) *
              (playerCopy.debuff.vulnerable > 0 ? 1.25 : 1) *
              (enemyCopy.debuff.weak > 0 ? 0.5 : 1)
          );
          if (playerCopy.tempBuff.block > 0) {
            if (damage > playerCopy.tempBuff.block) {
              damage -= playerCopy.tempBuff.block;
              playerCopy.tempBuff.block = 0;
              playerCopy.currentLife -= damage;
              if (enemyActions.leech) {
                enemyCopy.currentLife += damage;
                if (enemyCopy.currentLife > enemyCopy.maxLife) {
                  enemyCopy.currentLife = enemyCopy.maxLife;
                }
              }
            } else {
              playerCopy.tempBuff.block -= damage;
            }
          } else {
            playerCopy.currentLife -= damage;
            if (enemyActions.leech) {
              enemyCopy.currentLife += damage;
              if (enemyCopy.currentLife > enemyCopy.maxLife) {
                enemyCopy.currentLife = enemyCopy.maxLife;
              }
            }
          }
        } else playerCopy.tempBuff.avoidAttack -= 1;
      }
      /* block action */
      if (enemyActions.block > 0) {
        enemyCopy.tempBuff.block +=
          enemyActions.block + enemyCopy.fullCombatBuff.blockBuff;
      }
      /* poison action */
      if (enemyActions.poison > 0) {
        playerCopy.debuff.poison += enemyActions.poison;
      }
      /* dodge action */
      if (enemyActions.avoidAttack > 0) {
        enemyCopy.tempBuff.avoidAttack += enemyActions.avoidAttack;
      }
      /* vulnerability action */
      if (enemyActions.vulnerability > 0) {
        playerCopy.debuff.vulnerable += enemyActions.vulnerability;
      }
      /* weak action */
      if (enemyActions.weak > 0) {
        playerCopy.debuff.weak += enemyActions.weak;
      }
      if (enemyActions.distribDown > -1) {
        playerCopy.debuff.distribDown += enemyActions.distribDown;
      }

      setPlayerStats(playerCopy);
      setEnemyStats(enemyCopy);
      setFightTurns((prev) => prev + 1);
      setTotalTurns((prev) => prev + 1);
      // fin changes
      setEnemyActionsResolution(false);
      setStartPlayerTurn(true);
    }
    // fin changes
    if (enemyActionsResolution && enemyStats.currentLife > 0) {
      delayStartEnemyAction();
    }
  }, [enemyActionsResolution]);

  // derniers dégats/heal subis par player
  useEffect(() => {
    if (lvlGame === 1 || lvlGame === 3 || lvlGame === 5) {
      setPlayerLifeChange(playerStats.currentLife - prevPlayerLife);
      setPrevPlayerLife(playerStats.currentLife);
    }
  }, [playerStats.currentLife]);

  useEffect(() => {
    if (lvlGame === 1 || lvlGame === 3 || lvlGame === 5) {
      setEnemyLifeChange(enemyStats.currentLife - prevEnemyLife);
      setPrevEnemyLife(enemyStats.currentLife);
    }
  }, [enemyStats.currentLife]);

  // victoire et level up
  useEffect(() => {
    if (enemyStats.currentLife < 1) {
      setLvlGame((prev) => prev + 1);
    }
  }, [enemyStats.currentLife]);
  // Game Over
  useEffect(() => {
    if (playerStats.currentLife < 1) {
      setLvlGame(7);
    }
  }, [playerStats.currentLife]);
  // affichage changement de vie pour le joueur et l'ennemi
  return (
    <div className="Game-Arena">
      {(lvlGame === 0 || lvlGame === 2 || lvlGame === 4 || lvlGame === 6) && (
        <ModalDisplay
          setDeckJeu={setDeckJeu}
          setLvlGame={setLvlGame}
          lvlGame={lvlGame}
          setStartPlayerTurn={setStartPlayerTurn}
          setEndPlayerTurn={setEndPlayerTurn}
          setEnemyActionsResolution={setEnemyActionsResolution}
          setFightTurns={setFightTurns}
          setPlayerLifeChange={setPlayerLifeChange}
          setEnemyLifeChange={setEnemyLifeChange}
          playerStats={playerStats}
          setPlayerStats={setPlayerStats}
          setEnemyStats={setEnemyStats}
          setIndexActionList={setIndexActionList}
          setEnemyActions={setEnemyActions}
          setEnemyActionList={setEnemyActionList}
          enemyLvl3={enemyLvl3}
          actionEnemyLvl3={actionEnemyLvl3}
          actionEnemyLvl5={actionEnemyLvl5}
          enemyLvl5={enemyLvl5}
          setPrevPlayerLife={setPrevPlayerLife}
          setPrevEnemyLife={setPrevEnemyLife}
          setItem={setItem}
          modalRulesOpen={modalRulesOpen}
          setModalRulesOpen={setModalRulesOpen}
        />
      )}
      {(lvlGame === 1 || lvlGame === 3 || lvlGame === 5) && deckJeu && (
        <div className={`lvl${lvlGame.toString()}`}>
          <Board
            player={playerStats}
            enemy={enemyStats}
            enemyDisplayedActions={enemyActions.displayedActions}
            setEndPlayerTurn={setEndPlayerTurn}
            fightTurns={fightTurns}
            playerLifeChange={playerLifeChange}
            enemyLifeChange={enemyLifeChange}
            item={item}
            lvlGame={lvlGame}
            enemyActionsResolution={enemyActionsResolution}
            endPlayerTurn={endPlayerTurn}
            modalRulesOpen={modalRulesOpen}
            setModalRulesOpen={setModalRulesOpen}
          />
          <Deck
            champions={deckJeu}
            startPlayerTurn={startPlayerTurn}
            setStartPlayerTurn={setStartPlayerTurn}
            setEnemyStats={setEnemyStats}
            setPlayerStats={setPlayerStats}
            playerStats={playerStats}
            enemyStats={enemyStats}
            setRender={setRender}
            render={render}
            enemyActionsResolution={enemyActionsResolution}
          />
        </div>
      )}
      {lvlGame === 7 && (
        <div className="Game-Over">
          <p
            style={{
              paddingTop: "2%",
              paddingLeft: "2%",
              color: "#c89d3e",
            }}
          >
            Vous avez échoué après {totalTurns} tours
          </p>
          <Link className="Modale-link" to="/">
            <button
              type="button"
              className="Modale-validate"
              style={{ marginLeft: "10%", marginTop: "5%" }}
            >
              Quitter
            </button>
          </Link>
          <button
            type="button"
            className="Modale-validate"
            style={{ marginLeft: "5%", marginTop: "5%" }}
            onClick={() => window.location.reload(false)}
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}
