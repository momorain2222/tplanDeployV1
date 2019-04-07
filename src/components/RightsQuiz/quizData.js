const questions = [
  {
    _id: 1,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you currently under or left out-of-home care (OOHC) ?`,
    //fact: `The couch started in April of 2017, but a partnership agreement wasn't technically signed until May`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [1, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [1, 0]
      }
    ]
  },

  {
    _id: 2,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you single ? `,
    //fact: `The Wing was the project that allowed us to kick things into gear, once we solidifed a few more projects we went all in and commited to The Couch.`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [2, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [2, 0]
      }
    ]
  },
  {
    _id: 3,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you an Australian citizen or a permanent resident (PR) holder??`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [3, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [3, 0]
      }
    ]
  },
  {
    _id: 4,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Do you have any legal issues?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [4, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [4, 0]
      }
    ]
  },
  {
    _id: 5,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Is your income less than $ 51k?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [5, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [5, 0]
      }
    ]
  },
  {
    _id: 6,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you part of National Disability Insurance Scheme (NDIS)?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [6, 0]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [6, 1]
      }
    ]
  },
  {
    _id: 7,
    ageGroup: [3, 4],
    questionContent: `Are you currently unemployed?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [7, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [7, 0]
      }
    ]
  },
  {
    _id: 8,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you physically disabled, ill or injured?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [8, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [8, 0]
      }
    ]
  },
  {
    _id: 9,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you an Aboriginal or Torres Strait Islander Australian?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [9, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [9, 0]
      }
    ]
  },
  {
    _id: 10,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you currently studying full time or doing an Australian Apprenticeship?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [10, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [10, 0]
      }
    ]
  },
  {
    _id: 11,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you getting another payment to study or train?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [11, 0]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [11, 1]
      }
    ]
  }
];

export function getQuestions(categoryId) {
  const filteredQuestion = questions.filter(question => {
    console.log(typeof categoryId);
    return question.ageGroup.includes(Number(categoryId));
  });

  console.log(filteredQuestion);
  console.log("filtered questions is ", filteredQuestion);
  return filteredQuestion;
}
