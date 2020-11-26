import moment from "moment";

const events = [
  {
    name: "End of: Mitama's Special Training - Mikage Episode‎",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2140",
    moment: moment.parseZone("11/27/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Yakumo Mikage Gacha",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2139",
    moment: moment.parseZone("11/27/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Selection Pack - Magia Balance Change",
    categ: "other",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2138",
    moment: moment.parseZone("11/27/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: The Page I Write on the Holy Night, Sentimental Looks, and 1200 Days Campaign",
    categ: "eventStart",
    future: true,
    link: null,
    moment: moment.parseZone("11/27/2020 17:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Mirrors Ranking",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2153",
    moment: moment.parseZone("11/30/2020 17:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Monthly Shop Reset",
    categ: "monthly",
    future: false,
    link: null,
    moment: moment.parseZone("11/30/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "RikaRen Gacha",
    categ: "gacha",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2149",
    moment: moment.parseZone("12/4/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: The Page I Write on the Holy Night",
    categ: "eventEnd",
    future: true,
    link: null,
    moment: moment.parseZone("12/4/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Sentimental Looks and 1200 Days Campaign",
    categ: "eventEnd",
    future: true,
    link: null,
    moment: moment.parseZone("12/4/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shop Expires: Mitama's Special Training - Mikage Episode‎",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/4/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Mirrors Ranking",
    categ: "eventEnd",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2153",
    moment: moment.parseZone("12/6/2020 20:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Mirrors Selection Bag",
    categ: "other",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2148",
    moment: moment.parseZone("12/7/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Kimochi Battle - Vigorous Opal Neck",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2141",
    moment: null
  },
];

export default events;