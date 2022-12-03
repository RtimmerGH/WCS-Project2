function apiChamp() {
  const getChamp = (champ) => {
    return fetch(
      `https://ddragon.leagueoflegends.com/cdn/12.21.1/data/fr_FR/champion/${champ}.json`,
      {
        type: "GET",
      }
    ).then((res) => res.json());
  };

  return {
    getChamp,
  };
}

export default apiChamp();
