const rewards = [
  {
    id: 1,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/1038.png",
    firstBuff: "magicBuff",
    value1: 5,
    secondBuff: "physBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 2,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/1057.png",
    firstBuff: "magicBuff",
    value1: 5,
    secondBuff: "defenseBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 3,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3001.png",
    firstBuff: "magicBuff",
    value1: 5,
    secondBuff: "poisonBuff",
    value2: 3,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 4,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/2003.png",
    firstBuff: "magicBuff",
    value1: 5,
    secondBuff: "healBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 5,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3003.png",
    firstBuff: "magicBuff",
    value1: 5,
    secondBuff: "startDistrib",
    value2: 1,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 6,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/1026.png",
    firstBuff: "magicBuff",
    value1: 5,
    secondBuff: "currentLife",
    value2: 20,
    maxLife: 20,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 7,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/1031.png",
    firstBuff: "physBuff",
    value1: 5,
    secondBuff: "defenseBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 8,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3011.png",
    firstBuff: "physBuff",
    value1: 5,
    secondBuff: "poisonBuff",
    value2: 3,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 9,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/1053.png",
    firstBuff: "physBuff",
    value1: 5,
    secondBuff: "healBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 10,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3004.png",
    firstBuff: "physBuff",
    value1: 5,
    secondBuff: "startDistrib",
    value2: 1,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 11,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3072.png",
    firstBuff: "physBuff",
    value1: 5,
    secondBuff: "currentLife",
    value2: 20,
    thirdBuff: "maxLife",
    value3: 20,
  },
  {
    id: 12,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3068.png",
    firstBuff: "defenseBuff",
    value1: 5,
    secondBuff: "poisonBuff",
    value2: 3,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 13,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3053.png",
    firstBuff: "defenseBuff",
    value1: 5,
    secondBuff: "healBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 14,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/2138.png",
    firstBuff: "defenseBuff",
    value1: 5,
    secondBuff: "startDistrib",
    value2: 1,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 15,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/2051.png",
    firstBuff: "defenseBuff",
    value1: 5,
    secondBuff: "currentLife",
    value2: 20,
    thirdBuff: "maxLife",
    value3: 20,
  },
  {
    id: 16,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/4632.png",
    firstBuff: "poisonBuff",
    value1: 3,
    secondBuff: "healBuff",
    value2: 5,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 17,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/4635.png",
    firstBuff: "poisonBuff",
    value1: 3,
    secondBuff: "startDistrib",
    value2: 1,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 18,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/2033.png",
    firstBuff: "poisonBuff",
    value1: 3,
    secondBuff: "currentLife",
    value2: 20,
    thirdBuff: "maxLife",
    value3: 20,
  },
  {
    id: 19,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3041.png",
    firstBuff: "healBuff",
    value1: 5,
    secondBuff: "startDistrib",
    value2: 1,
    thirdBuff: "",
    value3: 0,
  },
  {
    id: 20,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/1001.png",
    firstBuff: "healBuff",
    value1: 5,
    secondBuff: "currentLife",
    value2: 20,
    thirdBuff: "maxLife",
    value3: 20,
  },
  {
    id: 21,
    pic: "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/2419.png",
    firstBuff: "startDistrib",
    value1: 1,
    secondBuff: "currentLife",
    value2: 20,
    thirdBuff: "maxLife",
    value3: 20,
  },
];

export default rewards;
