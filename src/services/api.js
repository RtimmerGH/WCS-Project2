function api() {
  const getChampions = () => {
    return fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.20.1/data/fr_FR/champion.json",
      {
        type: "GET",
      }
    ).then((res) => res.json());
  };

  return {
    getChampions,
  };
}

export default api();
