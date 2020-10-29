const { promises } = require("fs");
const path = require("path");


const events = [
    {
      "_id": "lll53AgL5L",
      "session_id": "d70478fa-9794-4b97-a506-74feb7609adf",
      "name": "pageView",
      "distinct_user_id": "147774",
      "date": Date.now(),
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 49,
          "lng": 124
        },
        "accuracy": 296
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "5YSMOngIP0",
      "session_id": "de9d655c-29e0-4d2e-9bb4-c5f736f81c75",
      "name": "login",
      "distinct_user_id": "120392",
      "date": 1520817210976,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 36,
          "lng": -69
        },
        "accuracy": 489
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "hfNigXjs0p",
      "session_id": "10230c19-a306-4658-a5e1-cb024934d686",
      "name": "signup",
      "distinct_user_id": "108796",
      "date": 1582058310167,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -32,
          "lng": 75
        },
        "accuracy": 808
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "b_Isn2D7UY",
      "session_id": "505ff3dd-db80-4360-a8f2-03176199027c",
      "name": "signup",
      "distinct_user_id": "28971",
      "date": 1548831708295,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -5,
          "lng": -147
        },
        "accuracy": 1890
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "mXlerbgVMI",
      "session_id": "cb36d23d-3268-46ed-96b6-373fcdb8574a",
      "name": "login",
      "distinct_user_id": "12152",
      "date": 1586034557231,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 62,
          "lng": -148
        },
        "accuracy": 715
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "tLhDgoqfWb",
      "session_id": "a77fd9d4-8656-4a55-8532-6dd57577073d",
      "name": "login",
      "distinct_user_id": "199908",
      "date": 1571728218075,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 90,
          "lng": -136
        },
        "accuracy": 1984
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "CZP1lw54JO",
      "session_id": "0bf280b9-f740-49a0-95c3-268d156869bc",
      "name": "signup",
      "distinct_user_id": "12558",
      "date": 1573203884935,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -4,
          "lng": 108
        },
        "accuracy": 1175
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "5_rJss9FhZ",
      "session_id": "6e756786-4065-4158-9a52-553cffe4bf05",
      "name": "signup",
      "distinct_user_id": "18317",
      "date": 1517222590403,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 29,
          "lng": -172
        },
        "accuracy": 95
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vEpTgKa5GN",
      "session_id": "7cc37dfd-2b4b-41ce-b32a-148ec7a7b299",
      "name": "signup",
      "distinct_user_id": "34699",
      "date": 1602791831813,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 16,
          "lng": 123
        },
        "accuracy": 448
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vPKOY3jXEQ",
      "session_id": "fb79a6f1-a095-4e02-9f7c-4a4b8c0978e3",
      "name": "signup",
      "distinct_user_id": "166763",
      "date": 1599876810874,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 33,
          "lng": -174
        },
        "accuracy": 1091
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "ZzEd7R9jmI",
      "session_id": "a075af5d-3577-4c02-ae14-437024676aea",
      "name": "pageView",
      "distinct_user_id": "79434",
      "date": 1578370732799,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 59,
          "lng": 160
        },
        "accuracy": 28
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "D-I8SaaepIi",
      "session_id": "b56e0f4c-19cb-47ff-95ae-8d060813401a",
      "name": "login",
      "distinct_user_id": "46870",
      "date": 1504063211971,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -39,
          "lng": 25
        },
        "accuracy": 1904
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "kR-NhT6WI4-",
      "session_id": "16ba92c7-52bf-4673-a41c-a2c503bb0988",
      "name": "signup",
      "distinct_user_id": "25639",
      "date": 1516510184676,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -46,
          "lng": 0
        },
        "accuracy": 462
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "47PqA4g2mtk",
      "session_id": "8f1f6f98-167e-480f-8232-c32db859a9ff",
      "name": "signup",
      "distinct_user_id": "161998",
      "date": 1596405878787,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 88,
          "lng": -126
        },
        "accuracy": 655
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Y_xq4csszhM",
      "session_id": "11fb7db5-5b58-49eb-86d5-f26de7383b94",
      "name": "login",
      "distinct_user_id": "48414",
      "date": 1511937165920,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -80,
          "lng": -117
        },
        "accuracy": 1245
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ogm8P9Qmh9V",
      "session_id": "df09eb74-8ea8-467d-8a24-d494fcdfc1b7",
      "name": "login",
      "distinct_user_id": "51229",
      "date": 1510645185978,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -37,
          "lng": 21
        },
        "accuracy": 1011
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "6zXzfA5SP-2",
      "session_id": "584d6199-5ffa-49d7-a4b5-9e764e4d5f62",
      "name": "pageView",
      "distinct_user_id": "69166",
      "date": 1511283240941,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -48,
          "lng": 135
        },
        "accuracy": 1410
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "yYrlBA04k_G",
      "session_id": "9cf8c143-086a-48b1-9f86-7824474ad6c4",
      "name": "login",
      "distinct_user_id": "44035",
      "date": 1566262540578,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 54,
          "lng": -50
        },
        "accuracy": 1928
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "qEY1YuCUzwe",
      "session_id": "ecc07b7b-ff20-426f-b5fe-880904e602ff",
      "name": "login",
      "distinct_user_id": "169508",
      "date": 1508647395818,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 55,
          "lng": -69
        },
        "accuracy": 1590
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "2rHGV1X0C0S",
      "session_id": "eebf2ec9-e65e-4149-ae50-f379eca95976",
      "name": "login",
      "distinct_user_id": "164426",
      "date": 1528512229196,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 62,
          "lng": 96
        },
        "accuracy": 430
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "OiEBHmNZqge",
      "session_id": "bf30d161-c9f4-407e-9030-4c345d7b1d4f",
      "name": "login",
      "distinct_user_id": "105178",
      "date": 1553321993382,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -16,
          "lng": -153
        },
        "accuracy": 1303
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "b36mjJvezkA",
      "session_id": "9dfdc2c4-af64-477b-87a8-4fb4c984b106",
      "name": "pageView",
      "distinct_user_id": "169339",
      "date": 1580573117625,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 65,
          "lng": -177
        },
        "accuracy": 1587
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "9LqZdJvVmfi",
      "session_id": "64fe55f7-2dfc-4ecd-9da7-7746b834d536",
      "name": "login",
      "distinct_user_id": "179767",
      "date": 1594995826072,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -52,
          "lng": -165
        },
        "accuracy": 438
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "-V6D83lzsu2",
      "session_id": "8745c78b-dfc9-4329-922e-6a04a9c38305",
      "name": "pageView",
      "distinct_user_id": "150533",
      "date": 1520576197965,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -48,
          "lng": 175
        },
        "accuracy": 1914
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "pm7ldIGcsdg",
      "session_id": "6c3a8442-d163-4e34-8772-96c20f4463ed",
      "name": "signup",
      "distinct_user_id": "98600",
      "date": 1527701257038,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 78,
          "lng": 1
        },
        "accuracy": 1608
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "c4yjIvjnRCz",
      "session_id": "a9d602ce-5e15-4ff6-b3b8-56467171f4b4",
      "name": "signup",
      "distinct_user_id": "98494",
      "date": 1549852852182,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 80,
          "lng": 137
        },
        "accuracy": 938
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "CsT2qNkmorE",
      "session_id": "ea93d89b-9944-4d55-9699-1b27d57bee41",
      "name": "pageView",
      "distinct_user_id": "196729",
      "date": 1527821414134,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 58,
          "lng": 75
        },
        "accuracy": 163
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "KQ_tIKcaYWi",
      "session_id": "381d5ddf-8d2a-41ac-8f7d-8ceabb7c6387",
      "name": "login",
      "distinct_user_id": "12234",
      "date": 1542811613142,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -31,
          "lng": 54
        },
        "accuracy": 410
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "zz7oyyy9TGS",
      "session_id": "1cb28668-c56a-48ef-82f2-5ba3aa530eee",
      "name": "pageView",
      "distinct_user_id": "51188",
      "date": 1529672012207,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 76,
          "lng": -143
        },
        "accuracy": 115
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "nt5GbHZEDlY",
      "session_id": "00617740-348f-4297-bc83-ba2bbe305f97",
      "name": "pageView",
      "distinct_user_id": "104099",
      "date": 1567872528949,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 49,
          "lng": 25
        },
        "accuracy": 1366
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Ku3lCoLqYZr",
      "session_id": "2f1ab731-920a-4f29-ac37-4da0a22976d8",
      "name": "signup",
      "distinct_user_id": "169665",
      "date": 1527190144787,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 62,
          "lng": 55
        },
        "accuracy": 1654
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "x8svOTto8kE",
      "session_id": "760af66e-fd14-488b-9575-4058f39900e8",
      "name": "signup",
      "distinct_user_id": "29366",
      "date": 1570921658709,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -80,
          "lng": 55
        },
        "accuracy": 1441
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "4pG69ZYs6fH",
      "session_id": "a175fb0c-7045-487d-ab68-a25b272ee4f2",
      "name": "pageView",
      "distinct_user_id": "25208",
      "date": 1550567854437,
      "os": "linux",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 52,
          "lng": -16
        },
        "accuracy": 1672
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "gMJ2Hj4oEm4",
      "session_id": "0a89f7a2-6dcb-4d33-a33e-128f7c744f3b",
      "name": "signup",
      "distinct_user_id": "64571",
      "date": 1585070847448,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -4,
          "lng": 0
        },
        "accuracy": 1227
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "d6R7pg3zat_",
      "session_id": "10430d95-78b0-4a4a-912c-c12555e04421",
      "name": "signup",
      "distinct_user_id": "110132",
      "date": 1515976469623,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 90,
          "lng": -142
        },
        "accuracy": 153
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "atAIxpkZdRM",
      "session_id": "2e4209ba-3eea-4bd2-9b27-7ac6017537d0",
      "name": "signup",
      "distinct_user_id": "192812",
      "date": 1524502080547,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -33,
          "lng": 86
        },
        "accuracy": 1961
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "s-1xwee47IX",
      "session_id": "95b1a2ce-b38d-4aff-a8fb-fce89fb90bca",
      "name": "pageView",
      "distinct_user_id": "38469",
      "date": 1556795631683,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 81,
          "lng": -163
        },
        "accuracy": 168
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "E4qjyEyjbje",
      "session_id": "4bdbe143-166e-4ca9-83bd-b68d47976042",
      "name": "login",
      "distinct_user_id": "41878",
      "date": 1579439904642,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 29,
          "lng": 102
        },
        "accuracy": 515
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "KCJBJGx1qFx",
      "session_id": "211b5b12-a89d-4871-a8d9-14b4265753e2",
      "name": "pageView",
      "distinct_user_id": "61146",
      "date": 1567817828975,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 56,
          "lng": 81
        },
        "accuracy": 214
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "txFnVDJI8fp",
      "session_id": "edb8ac45-ef11-4d5a-b42c-9ff2cbd36db9",
      "name": "signup",
      "distinct_user_id": "129070",
      "date": 1597076821289,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 50,
          "lng": 78
        },
        "accuracy": 499
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "B1_bOP2Qs1x",
      "session_id": "dfb27502-d756-46da-84c5-e4ea807bd278",
      "name": "login",
      "distinct_user_id": "87632",
      "date": 1584837194447,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -77,
          "lng": 72
        },
        "accuracy": 298
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "w32AlZ0Sqky",
      "session_id": "30ce1371-1001-468e-b3c5-7075b6bfa497",
      "name": "login",
      "distinct_user_id": "20420",
      "date": 1517995205902,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 11,
          "lng": -127
        },
        "accuracy": 1757
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "8Cxq64hJyZM",
      "session_id": "3d7f27cf-53ae-4fc7-939f-2d68b27b3223",
      "name": "pageView",
      "distinct_user_id": "120486",
      "date": 1508871221690,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -32,
          "lng": 13
        },
        "accuracy": 134
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "aN0iiUTrtl3",
      "session_id": "7edb1320-adde-4857-b71d-0b35325eb57c",
      "name": "login",
      "distinct_user_id": "51561",
      "date": 1571408881069,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -25,
          "lng": 140
        },
        "accuracy": 574
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "hOS_h_U4S5K",
      "session_id": "67c46de3-ce10-472a-9067-53409f871b89",
      "name": "signup",
      "distinct_user_id": "47328",
      "date": 1603726120837,
      "os": "windows",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 55,
          "lng": -44
        },
        "accuracy": 151
      },
      "url": "http://localhost3000/home"
    },
    {
      "_id": "60S_uCs9803",
      "session_id": "337d8d92-8431-4fd4-bd50-a24a4fe57d81",
      "name": "signup",
      "distinct_user_id": "139611",
      "date": 1599120005391,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 27,
          "lng": -20
        },
        "accuracy": 1074
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "6hqfF4sDU1e",
      "session_id": "3c2951bb-0577-4963-968d-4bdf36638ce4",
      "name": "pageView",
      "distinct_user_id": "72418",
      "date": 1581111055341,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -38,
          "lng": -21
        },
        "accuracy": 1690
      },
      "url": "http://localhost3000/admin"
    },
    {
      "_id": "67tN9HCkncq",
      "session_id": "362e9393-a630-4e62-95eb-591155b3a06f",
      "name": "login",
      "distinct_user_id": "107984",
      "date": 1601618466697,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -48,
          "lng": -178
        },
        "accuracy": 1255
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "9NeWVeMORKn",
      "session_id": "4371d556-2dc5-428a-9627-f08feae631bb",
      "name": "signup",
      "distinct_user_id": "48862",
      "date": 1508219169996,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 27,
          "lng": -144
        },
        "accuracy": 256
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "sF5-rbvSoS4",
      "session_id": "fd954dd2-89fd-4722-97d8-5013d1664f1e",
      "name": "login",
      "distinct_user_id": "17985",
      "date": 1575290536493,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 79,
          "lng": -179
        },
        "accuracy": 361
      },
      "url": "http://localhost3000/home"
    }
  ]

  const newEvents = events.map((event, index) => {
      return {
          ...events,
          "date": `Date.now() - ${index} * 12000000`
      }
  })

  promises.writeFile(
    path.join(process.cwd(), "newDates.json"),
    JSON.stringify(newEvents , null, 2)
  );