const KG_DATA = {
    goals: {
        targetArr: 20000000,
        targetStudents: 5000000,
        dailyVelocityGoal: 1000,
        weeklyVelocityGoal: 7000,
        monthlyRevGoal: 2000000
    },
    current: {
        students: 450000,
        rev: 1428,
        velocityToday: 0
    },
    sales: {
        prospects: [
  {
    "id": "c002",
    "name": "Dr. Marty Pollio",
    "title": "Superintendent",
    "email": "",
    "phone": "(502) 485-3011",
    "company": "Jefferson County Public Schools",
    "district": "Jefferson County Public Schools",
    "address": "3332 Newburg Road, Louisville, KY 40218",
    "website": "https://www.jefferson.kyschools.us",
    "stage": "new",
    "labels": [
      "school-district",
      "superintendent",
      "hot-lead"
    ],
    "notes": "Largest school district in KY with 96,000+ students. Main district contact for MoneyBot partnerships.",
    "created_at": "2026-04-21T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c011",
    "name": "Dr. Michael Newman",
    "title": "Principal",
    "email": "michael.newman@jefferson.kyschools.us",
    "phone": "(502) 485-8241",
    "company": "duPont Manual High School",
    "district": "Jefferson County Public Schools",
    "address": "120 West Lee Street, Louisville, KY 40208",
    "website": "https://www.dupontmanual.com",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead",
      "magnet"
    ],
    "notes": "Premier magnet high school in Louisville with MST, HSU, VA, and YPAS programs. Dr. Newman is the principal. Strong fit for MoneyBot financial literacy program.",
    "created_at": "2026-04-24T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c013",
    "name": "Colton Isaacs",
    "title": "Principal",
    "email": "colton.isaacs@warren.kyschools.us",
    "phone": "(270) 842-7302",
    "company": "Warren Central High School",
    "district": "Warren County Public Schools",
    "address": "559 Morgantown Road, Bowling Green, KY 42101",
    "website": "https://warrencentral.warrencountyschools.org",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "Warren Central High School principal. Email confirmed from Principal's Message on website. Warren County is major KY district.",
    "created_at": "2026-04-24T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c014",
    "name": "Matt Deaton",
    "title": "Principal",
    "email": "matt.deaton@warren.kyschools.us",
    "phone": "(270) 467-7500",
    "company": "South Warren High School",
    "district": "Warren County Public Schools",
    "address": "8140 Nashville Road, Bowling Green, KY 42101",
    "website": "https://southwarrenhighschool.warrencountyschools.org",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "South Warren High School principal. Email and phone confirmed from school website. Newer school (opened 2010) with strong academic programs.",
    "created_at": "2026-04-24T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c015",
    "name": "Dr. Anthony Orr",
    "title": "Principal",
    "email": "anthony.orr@fayette.kyschools.us",
    "phone": "(859) 422-3474",
    "company": "Lafayette High School",
    "district": "Fayette County Public Schools",
    "address": "401 Reed Lane, Lexington, KY 40503",
    "website": "https://lafayette.fcps.net",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "Lafayette High School principal since July 2022. Former superintendent of two KY districts. 29 years education experience. Strong potential partner for MoneyBot financial literacy.",
    "created_at": "2026-04-28T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c024",
    "name": "Brooke Jackson",
    "title": "Principal",
    "email": "brooke.jackson@fayette.kyschools.us",
    "phone": "(859) 381-3546",
    "company": "Paul Laurence Dunbar High School",
    "district": "Fayette County Public Schools",
    "address": "1600 Man O' War Blvd, Lexington, KY 40513",
    "website": "https://pld.fcps.net",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "Paul Laurence Dunbar High School principal. Top-ranked high school in KY (#21). 42% AP participation rate. Strong academics - good fit for MoneyBot partnership.",
    "created_at": "2026-04-28T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c025",
    "name": "Josh Henderson",
    "title": "Principal",
    "email": "josh.henderson@etown.kyschools.us",
    "phone": "(270) 769-3381",
    "company": "Elizabethtown High School",
    "district": "Elizabethtown Independent Schools",
    "address": "620 N Mulberry St, Elizabethtown, KY 42701",
    "website": "https://ehs.etown.kyschools.us",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "Elizabethtown High School principal. School ranked 7th in KY (2024-25). 96% graduation rate. Strong academic programs - excellent MoneyBot prospect.",
    "created_at": "2026-04-29T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c026",
    "name": "Scott Loscheider",
    "title": "Principal",
    "email": "scott.loscheider@fayette.kyschools.us",
    "phone": "(859) 381-3546",
    "company": "Paul Laurence Dunbar High School",
    "district": "Fayette County Public Schools",
    "address": "1600 Man O' War Blvd, Lexington, KY 40513",
    "website": "https://pld.fcps.net",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "Dunbar High School principal since July 2023. 14+ years experience. Formerly at George Rogers Clark High School. Top-ranked school with strong academics.",
    "created_at": "2026-04-29T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c027",
    "name": "Tony Blackman",
    "title": "Principal",
    "email": "antonio.blackman@fayette.kyschools.us",
    "phone": "(859) 422-3423",
    "company": "Henry Clay High School",
    "district": "Fayette County Public Schools",
    "address": "2100 Fontaine Rd, Lexington, KY 40502",
    "website": "https://henryclay.fcps.net",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "hot-lead"
    ],
    "notes": "Henry Clay High School principal since July 2024. 20+ years experience. Former associate principal at Lexington Traditional Magnet School. Historic school with strong debate program.",
    "created_at": "2026-04-29T14:00:00Z",
    "source": "web-scrape"
  },
  {
    "id": "c028",
    "name": "Brandon Fritz",
    "title": "Principal",
    "email": "brandon.fritz@madison.kyschools.us",
    "phone": "(859) 625-6109",
    "company": "Madison Central High School",
    "district": "Madison County Schools",
    "address": "705 N 2nd St, Richmond, KY 40475",
    "website": "https://mchs.madison.kyschools.us",
    "stage": "new",
    "labels": [
      "school-district",
      "principal",
      "warm-lead"
    ],
    "notes": "Madison Central High School principal. Located in Richmond, KY (near EKU). Associate Principals: Katie DeSimone, Marita Kinley, Sherry Fisher, Chris Harrell.",
    "created_at": "2026-04-29T14:00:00Z",
    "source": "web-scrape"
  }
]
    },
    studio: {
        racingStatus: "Active Development",
        teacherPortalStatus: "Planning",
        commits: [
  "feat: MoneyBot OpenClaw multi-agent system - initial commit (3 weeks ago)"
]
    },
    infra: {
        git: "8a57e0e - feat: MoneyBot OpenClaw multi-agent system - initial commit",
        uptime: "7 47 2"
    },
    comms: {
        unreplied: 10
    },
    lastUpdated: "Sun May  3 16:41:50 CDT 2026"
};
