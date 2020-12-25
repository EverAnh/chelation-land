import moment from "moment";

const events = [
  {
    name: "End of: Kimochi Battle - Vigorous Opal Neck",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2206",
    moment: moment.parseZone("12/26/2020 15:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
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
    name: "Shops Expire: Dark Girl Strengthening Pack",
    categ: "shopExpire",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2197",
    moment: moment.parseZone("12/28/2020 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: December 28 Maintenance",
    categ: "maintenance",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2215",
    moment: moment.parseZone("12/28/2020 15:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: December 28 Maintenance",
    categ: "maintenance",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2215",
    moment: moment.parseZone("12/28/2020 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Dream Beyond Kefu, Part 1",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2220",
    moment: moment.parseZone("12/28/2020 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: New Year Campaign Bonuses and Re-Run of Chapter Release Missions",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("12/28/2020 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Haregi Gachas",
    categ: "gacha",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2217",
    moment: moment.parseZone("12/28/2020 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Countdown Login Bonus",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("12/29/2020 00:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Monthly Shop Reset",
    categ: "monthly",
    future: false,
    link: null,
    moment: moment.parseZone("12/31/2020 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: Dream Beyond Kefu, Part 2",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("1/1/2021 00:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Start of: 10 Free Daily Gacha Rolls",
    categ: "eventStart",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("1/1/2021 00:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Countdown Login Bonus",
    categ: "eventEnd",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("1/1/2021 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Shops Expire: Christmas Costume Tickets, Tsuruno / Felicia Gacha Coins, Touka / Nemu Gacha Coins",
    categ: "shopExpire",
    future: false,
    link: null,
    moment: moment.parseZone("1/4/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Dream Beyond Kefu",
    categ: "eventEnd",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2220",
    moment: moment.parseZone("1/12/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: New Year Campaign Bonuses and Re-Run of Chapter Release Missions",
    categ: "eventEnd",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("1/12/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: 10 Free Daily Gacha Rolls",
    categ: "eventEnd",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("1/12/2021 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "End of: Haregi Gachas",
    categ: "gacha",
    future: true,
    link: "http://jp.rika.ren/pop_up.html#id=2217",
    moment: moment.parseZone("1/12/2021 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
];

export default events;