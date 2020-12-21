import moment from "moment";

const events = [
  {
    name: "Start of: Dec 12 Maintenance",
    categ: "maintenance",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2201",
    moment: moment.parseZone("12/21/2020 15:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Dec 12 Maintenance",
    categ: "maintenance",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2201",
    moment: moment.parseZone("12/21/2020 17:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Kimochi Battle - Vigorous Opal Neck",
    categ: "eventStart",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2200",
    moment: moment.parseZone("12/21/2020 17:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Christmas String, part 2",
    categ: "eventStart",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2187",
    moment: moment.parseZone("12/21/2020 17:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Dark Girl Pick Up Gachas",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2199",
    moment: moment.parseZone("12/21/2020 17:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops Expire: Angels On The Road",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("12/23/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Kimochi Battle - Vigorous Opal Neck",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2200",
    moment: moment.parseZone("12/26/2021 15:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Christmas String",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2187",
    moment: moment.parseZone("12/28/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Touka / Nemu Gacha",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2186",
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
    name: "End of: Dark Girl Pick Up Gachas",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2199",
    moment: moment.parseZone("12/28/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops expire: Dark Girl Strengthening Pack",
    categ: "shopExpire",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2197",
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
    name: "Shops Expire: Christmas Costume Tickets, Tsuruno / Felicia Gacha Coins, Touka / Nemu Gacha Coins",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("1/4/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
];

export default events;