import moment from "moment";

const events = [
//  {name: , categ: , moment: },
  {
    name: "Shop Expires: Halloween Gacha Coins",
    categ: "shopExpire",
    link: null,
    moment: moment.parseZone("11/23/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Mitama's Special Training - Mikage Episode‎",
    categ: "eventEnd",
    link: "http://jp.rika.ren/pop_up.html#id=2140",
    moment: moment.parseZone("11/27/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Yakumo Mikage Gacha",
    categ: "gacha",
    link: "http://jp.rika.ren/pop_up.html#id=2139",
    moment: moment.parseZone("11/27/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Magical Girl Selection Pack",
    categ: "other",
    link: "http://jp.rika.ren/pop_up.html#id=2138",
    moment: moment.parseZone("11/27/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Monthly Shop Reset",
    categ: "monthly",
    link: null,
    moment: moment.parseZone("11/30/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shop Expires: Mitama's Special Training - Mikage Episode‎",
    categ: "shopExpire",
    link: null,
    moment: moment.parseZone("12/4/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Kimochi Battle - Vigorous Opal Neck",
    categ: "eventStart",
    link: "http://jp.rika.ren/pop_up.html#id=2141",
    moment: null
  },
];

export default events;