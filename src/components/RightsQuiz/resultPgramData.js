const programs = [
  {
    _id: 1,
    name: "Transition to Independent Living Allowance (TILA)",
    require: [[1, 1]],
    url:
      "https://www.dss.gov.au/families-and-children/benefits-payments/transition-to-independent-living-allowance-tila/how-to-access-the-transition-to-independent-living-allowance-step-by-step-guide-for-young-people",
    isChecked: false,
    outcome:
      "Claim up to $1,500 for basic costs involved in moving out on your own for the first time"
  },
  {
    _id: 2,
    name: "Skills First Youth Access Initiative",
    require: [[1, 1]],
    url:
      "https://www.education.vic.gov.au/Documents/about/programs/pathways/SkillsFirstYouthAccessInitiativeGuideBook.pdf",
    isChecked: false,
    outcome:
      "Tuition fee waiver will be provided under the Skills First Youth Access Initiative"
  },
  {
    _id: 3,
    name: "Youthlaw’s Legal Pod Program",
    require: [[1, 1], [5, 1]],
    url: "http://youthlaw.asn.au/legal-pod/",
    isChecked: false,
    outcome:
      "Provides with a group of private lawyers (a Legal Pod) for free up to 3 years"
  },
  {
    _id: 4,
    name: "Youth Allowance",
    require: [[2, 1], [3, 1]],
    url:
      "https://www.humanservices.gov.au/individuals/services/centrelink/youth-allowance-students-and-australian-apprentices",
    isChecked: false,
    outcome: "You can claim anywhere between $249.20 ~ $596.5"
  },
  {
    _id: 5,
    name: "National Rental Affordability Scheme",
    require: [[2, 1], [3, 1], [7, 1]],
    url:
      "https://www.dss.gov.au/sites/default/files/documents/09_2018/informationfortenants2018-19.pdf",
    isChecked: false,
    outcome:
      "Provides an opportunity to rent homes of NRAS at a rate that is at least 20 per cent below market value rent."
  },
  {
    _id: 6,
    name: "Newstart Allowance",
    require: [[4, 1], [9, 1]],
    url:
      "https://www.humanservices.gov.au/individuals/services/centrelink/newstart-allowance/who-can-get-it",
    isChecked: false,
    outcome: "You can claim up to $104 every 2 weeks"
  },
  {
    _id: 7,
    name: "Mobility Allowance",
    require: [[8, 1], [10, 1]],
    url:
      "https://www.humanservices.gov.au/individuals/services/centrelink/mobility-allowance",
    isChecked: false,
    outcome: "You can claim anywhere between 97.90 - 136.90 every 2 weeks"
  },
  {
    _id: 8,
    name: "ABSTUDY",
    require: [[11, 1], [12, 1]],
    url:
      "https://www.humanservices.gov.au/individuals/services/centrelink/abstudy/eligibility",
    isChecked: false,
    outcome:
      "ABSTUDY can help you with study, housing, living expenses and travel costs."
  }
];

export function getPrograms() {
  return programs;
}
