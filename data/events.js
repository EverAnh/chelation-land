import moment from "moment";

const events = [
  {
    name: "\"The Dream That Transcends Today\" Ends",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2220",
    moment: moment.parseZone("1/12/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "New Year Campaign Bonuses and Re-Run of Chapter Release Missions End",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2221",
    moment: moment.parseZone("1/12/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Iroha/Ui Gacha Ends",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2238",
    moment: moment.parseZone("1/12/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "January 12 Maintenance Begins",
    categ: "maintenance",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2245",
    moment: moment.parseZone("1/12/2021 15:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "January 12 Maintenance Ends",
    categ: "maintenance",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2245",
    moment: moment.parseZone("1/12/2021 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "\"Rumors In Disguise\" Event Begins",
    categ: "eventStart",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2247",
    moment: moment.parseZone("1/12/2021 16:00 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Other 3 Haregi Gachas End",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2217",
    moment: moment.parseZone("1/12/2021 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "PMMM 10th Anniversary Gacha Ends",
    categ: "gacha",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2244",
    moment: moment.parseZone("1/15/2021 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "\"Rumors In Disguise\" Event Ends",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2247",
    moment: moment.parseZone("1/25/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Haruka and Matsuri Gacha Ends",
    categ: "eventEnd",
    future: false,
    link: "http://jp.rika.ren/pop_up.html#id=2247",
    moment: moment.parseZone("1/25/2021 14:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
  {
    name: "Monthly Shop Reset",
    categ: "monthly",
    future: false,
    link: null,
    moment: moment.parseZone("1/31/2021 23:59 +09", "MM/D/YYYY H:mm ZZ").add(1,'seconds')
  },
];

export default events;