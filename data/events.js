import moment from "moment";

const events = [
  {
    name: "Start of: Mirrors Ranking",
    categ: "ranking",
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
    name: "End of: RikaRen Gacha",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2149",
    moment: moment.parseZone("12/4/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: The Page I Write on the Holy Night",
    categ: "eventEnd",
    future: false,
    link: null,
    moment: moment.parseZone("12/4/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops Expire: Mitama's Special Training - Mikage Episode‎, Mikage Gacha Coins, Magical Girl Ticket - From Magia Balance Change",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/4/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shop Item Expires: 1200 Days Campaign Bag",
    categ: "bag",
    future: false,
    link: null,
    moment: moment.parseZone("12/4/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Sentimental Looks and 1200 Days Campaign",
    categ: "eventEnd",
    future: false,
    link: null,
    moment: moment.parseZone("12/4/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Mirrors Ranking",
    categ: "ranking",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2153",
    moment: moment.parseZone("12/6/2020 20:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shop Items Expire: Mirrors Selection Bag, Mirrors Beginner Bag",
    categ: "bag",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2148",
    moment: moment.parseZone("12/7/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops Expire: The Page I Write on the Holy Night, RikaRen Gacha Coins",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/11/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shop Expires: Sentimental Looks",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/11/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shop Expires: Mirrors Selection Ticket",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/14/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
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