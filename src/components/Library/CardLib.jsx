import { matchPath, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "../../assets/css/CardLib.css";

function CardLib({
  cardChampion,
  setModalOpen,
  setModalChamp,
  setCardSelected,
  setIdSelectedCard,
  idSelectedCard,
}) {
  const manaCost = (champ) => {
    // console.log(cardChampion.info.difficulty);
    switch (champ) {
      case 0:
      case 1:
      case 2:
      case 3:
        return "0";
      case 4:
      case 5:
      case 6:
        return "1";
      case 7:
      case 8:
        return "2";
      case 9:
      case 10:
        return "3";
      default:
        return "TBD";
    }
  };
  // test function to assign card skill 1 based on the champ class 1
  const skill1 = (champ) => {
    switch (champ.tags[0]) {
      case "Tank":
        return `Gagne ${(
          7 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
          parseInt(manaCost(champ.info.difficulty), 10)
        ).toString()} Block`;
      case "Fighter":
        return `${(
          7 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
          parseInt(manaCost(champ.info.difficulty), 10)
        ).toString()} Dégats Physiques`;
      case "Support":
        return `soigne ${(
          4 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
          parseInt(manaCost(champ.info.difficulty), 10)
        ).toString()} PV`;
      case "Mage":
        return champ.tags.length === 2
          ? `${(
              7 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
              parseInt(manaCost(champ.info.difficulty), 10)
            ).toString()} Dégats Magiques`
          : `cartes dégats + ${(
              1 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
              parseInt(manaCost(champ.info.difficulty), 10)
            ).toString()}`;
      case "Marksman":
        return `Inflige ${(
          1 *
          (parseInt(manaCost(champ.info.difficulty), 10) + 1)
        ).toString()} Vulnérable`;
      case "Assassin":
        return champ.tags.length === 2
          ? `Inflige ${(
              4 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
              parseInt(manaCost(champ.info.difficulty), 10)
            ).toString()} Poison`
          : `Poison de la cible +${(
              10 *
              (parseInt(manaCost(champ.info.difficulty), 10) + 1)
            ).toString()}%`;
      default:
        return "TBD";
    }
  };

  // test function to assign card skill 2 based on the champ class 2
  const skill2 = (champ) => {
    switch (champ.tags[1]) {
      case "Tank":
        return `Gagne ${(
          7 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
          parseInt(manaCost(champ.info.difficulty), 10)
        ).toString()} Block`;
      case "Fighter":
        return `cartes block + ${(
          1 * (parseInt(manaCost(champ.info.difficulty), 10) + 1) +
          parseInt(manaCost(champ.info.difficulty), 10)
        ).toString()}`;
      case "Support":
        return `gagne ${
          parseInt(manaCost(champ.info.difficulty), 10) < 2 ? "1" : "2"
        } Energy`;
      case "Mage":
        return `Inflige ${(
          1 *
          (parseInt(manaCost(champ.info.difficulty), 10) + 1)
        ).toString()} Affaibli`;
      case "Marksman":
        return "Evite l'attaque";
      case "Assassin":
        return `Pioche ${
          parseInt(manaCost(champ.info.difficulty), 10) < 2 ? "1" : "2"
        } carte(s)`;
      default:
        return "TBD";
    }
  };

  // gestion du click en fonction de l'emplacement de l'appel de la carte
  const location = useLocation();
  const library = matchPath({ path: "/library" }, location.pathname);
  const game = matchPath({ path: "/game" }, location.pathname);

  const handleClick = () => {
    if (library) {
      setModalChamp(cardChampion.id);
      setModalOpen(true);
    } else {
      setCardSelected({ champion: cardChampion });
      setIdSelectedCard(cardChampion.id);
    }
  };

  return (
    <button
      type="button"
      className={
        idSelectedCard === cardChampion.id
          ? "champCard cardSelected"
          : "champCard"
      }
      style={
        game && {
          minHeight: `155px`,
          minWidth: `115px`,
        }
      }
      onClick={() => {
        handleClick();
      }}
    >
      {cardChampion ? (
        <div className="cardContainer">
          <div className="manaCard">
            <h3>{manaCost(cardChampion.info.difficulty)}</h3>
          </div>
          <div className="champCardName">
            <h3>{cardChampion.name}</h3>
          </div>
          <div
            className="cardPicContainer"
            style={{
              backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${cardChampion.id}_0.jpg)`,
            }}
          />
          <div className="skillsCard">
            <p>{skill1(cardChampion)}</p>
            <p>{cardChampion.tags[1] ? skill2(cardChampion) : null}</p>
          </div>
        </div>
      ) : (
        "TBD"
      )}
    </button>
  );
}

export default CardLib;

CardLib.propTypes = {
  cardChampion: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    info: PropTypes.shape({
      difficulty: PropTypes.number,
    }),
  }),
  setModalOpen: PropTypes.func,
  setModalChamp: PropTypes.func,
  setCardSelected: PropTypes.func,
  setIdSelectedCard: PropTypes.func,
  idSelectedCard: PropTypes.string,
};

CardLib.defaultProps = {
  cardChampion: {
    id: "",
    tags: [""],
    info: {
      difficulty: 0,
    },
    name: "",
  },
  setModalOpen: () => {},
  setModalChamp: () => {},
  setCardSelected: () => {},
  setIdSelectedCard: () => {},
  idSelectedCard: "",
};
