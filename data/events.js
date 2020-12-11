import moment from "moment";

const events = [
  {
    name: "Shops Expire: Mirrors Ranking, Mirrors Selection Ticket",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/14/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Angels On The Road",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2178",
    moment: moment.parseZone("12/16/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Himika Mao Gacha",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2176",
    moment: moment.parseZone("12/16/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Christmas String (Touka / Nemu event)",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2187",
    moment: moment.parseZone("12/16/2020 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Touka / Nemu Gacha",
    categ: "gacha",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2186",
    moment: moment.parseZone("12/16/2020 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops Expire: Angels On The Road",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/23/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Christmas String (Touka / Nemu event)",
    categ: "eventEnd",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2187",
    moment: moment.parseZone("12/28/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Tsuruno / Felicia Gacha",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2177",
    moment: moment.parseZone("12/28/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Touka / Nemu Gacha",
    categ: "gacha",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2186",
    moment: moment.parseZone("12/28/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Monthly Shop Reset",
    categ: "monthly",
    future: false,
    link: null,
    moment: moment.parseZone("12/31/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops Expire: Tsuruno / Felicia Gacha Coins, Touka / Nemu Gacha Coins",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("1/4/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
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