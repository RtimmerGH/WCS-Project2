/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { FaShieldAlt } from "react-icons/fa";
import {
  GiCardDiscard,
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
  GiMagicSwirl,
  GiSwordsPower,
  GiHealthIncrease,
  GiBroadsword,
} from "react-icons/gi";
import "../../../assets/css/Game/ModalRules.css";

function ModalRules({ setModalRulesOpen, lvlGame }) {
  return (
    <button
      type="button"
      className="modalRulesLibBackground"
      onClick={() => {
        setModalRulesOpen(false);
      }}
    >
      <div
        className="modalRulesLibContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalRulesLibTitleCloseBtn">
          {(lvlGame === 1 || lvlGame === 3 || lvlGame === 5) && (
            <button
              type="button"
              className="Modale-validate"
              style={{ marginTop: "0" }}
              onClick={() => window.location.reload(false)}
            >
              Quitter la partie
            </button>
          )}
          <div
            type="button"
            onClick={() => {
              setModalRulesOpen(false);
            }}
          >
            X
          </div>
        </div>
        {lvlGame === 0 && (
          <div className="modalRulesLibTitle">
            Règles du jeu
            <br />
          </div>
        )}
        <div className="modalRulesText">
          {lvlGame === 0 && (
            <div className="modalRulesPhases">
              <h2>Phase 1: Draft</h2>
              <p>
                Choisis 1 carte parmis les 3 proposées et crée ton Deck de 12
                cartes pour affronter tes ennemis
              </p>
              <h2>Phase 2: Combat</h2>
              <p>
                Fait glisser tes cartes sur l'ennemi pour lui infliger des
                dégats ou générer des effets négatifs ou positifs.
                <br />
                Chaque carte coûte des points d'Energy, lorsque tu n'as plus
                assez d'Energy pour jouer, clique sur le bouton "End Turn".
                <br />
                Tu récupères toute ton Energy au début de ton tour.
                <br />
                Si la pile de pioche est vide, toutes les cartes du cimetierre
                sont mélangées pour la remplir de nouveau.
                <br />
                Pour gagner le combat tu dois vider totalement la barre de vie
                ennemi.
                <br />
                Si ta barre de vie est vide alors c'est Game Over.
              </p>
            </div>
          )}
          <br />
          <h3>Effets Positifs</h3>
          <p>
            <FaShieldAlt color="cadetblue" /> Block : permet de bloquer les
            dégats reçus. (remis à zéro au début du tour)
          </p>
          <p>
            <GiDodging color="cadetblue" /> Evite Attack : la prochaine attaque
            reçue n'inflige aucun dégat.
          </p>
          <p>
            <GiFist color="cadetblue" /> Attaques augmentées : les attaques
            infligent des dégat supplémentaires. (remis à zéro après le combat)
          </p>
          <p>
            <GiArmorUpgrade color="cadetblue" /> Défense augmentée : les cartes
            Block donnent du block supplémentaire. (remis à zéro après le
            combat)
          </p>
          <p>
            <GiMagicSwirl color="orange" /> Bonus magique : les attaques
            magiques infligent des dégat supplémentaires.(bonus permanent)
          </p>
          <p>
            <GiSwordsPower color="orange" /> Bonus physique : les attaques
            physiques infligent des dégat supplémentaires.(bonus permanent)
          </p>
          <p>
            <GiArmorUpgrade color="orange" /> Bonus défensif : les cartes Block
            donnent du block supplémentaire.(bonus permanent)
          </p>
          <p>
            <GiPoisonBottle color="orange" /> Bonus de poison : les cartes
            Poison infligent des poisons supplémentaires.(bonus permanent)
          </p>
          <p>
            <GiHealthIncrease color="orange" /> Bonus de soin : les cartes soins
            redonnent plus de points de vie.(bonus permanent)
          </p>
          <p>
            <GiAbdominalArmor color="pink" /> Resistance physique : permet de
            bloquer les dégats physique reçus.(ennemi seulement)
          </p>
          <p>
            <GiMagicShield color="pink" /> Resistance magique : permet de
            bloquer les dégats magiques reçus.(ennemi seulement)
          </p>
          <p>
            <GiHeartBottle color="pink" /> Resistance au poison : permet de
            bloquer les dégats de poison.(ennemi seulement)
          </p>
          <h3>Effets Négatifs</h3>
          <p>
            <GiHumanTarget color="rgb(248, 94, 94)" /> Vulnérable : dégats reçus
            augmentés de 25%. (perd 1 charge à la fin du tour)
          </p>
          <p>
            <GiDespair color="rgb(248, 94, 94)" /> Affaibli : dégats infligés
            réduits de 50%. (perd 1 charge à la fin du tour)
          </p>
          <p>
            <GiPoisonBottle color="rgb(248, 94, 94)" /> Empoisonné : au début du
            tour reçoit autant de dégats que de charge de poison. (ignore le
            Block / perd 1 charge à la fin du tour)
          </p>
          <p>
            <GiCardDiscard color="rgb(248, 94, 94)" /> Malus distribution : le
            joueur reçoit 1 carte de moins au début du tour (perd 1 charge à la
            fin du tour)
          </p>
          <h3>Autres</h3>
          <p>
            <GiLifeBar color="red" /> <GiLifeBar color="green" /> Variation des
            points de vie: repésente la dernière perte de vie (rouge) ou les
            derniers soins reçus (vert)
          </p>
          <p>
            <GiBroadsword color="red" /> Attaque: indique les dégats de la
            prochaine attaque de l'ennemi (ennemi seulement)
          </p>
          <p>
            <GiHealing color="red" /> Vol de vie: récupère des points de vie
            équivalents aux dégats infligés (ennemi seulement)
          </p>
        </div>
      </div>
    </button>
  );
}

export default ModalRules;

ModalRules.propTypes = {
  setModalRulesOpen: PropTypes.func,
  lvlGame: PropTypes.number,
};

ModalRules.defaultProps = {
  setModalRulesOpen: () => {},
  lvlGame: 0,
};
