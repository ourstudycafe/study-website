const physicsQuestions = {
  0: [
    {
      question: "Which of the following is a fundamental SI quantity?",
      options: [
        "Length",
        "Force",
        "Energy",
        "Pressure",
      ],
      answer: "Length",
    },
    {
      question: "What is the SI unit of length?",
      options: [
        "Metre",
        "Kilogram",
        "Second",
        "Newton",
      ],
      answer: "Metre",
    },
    {
      question: "Which quantity has no dimensions?",
      options: [
        "Strain",
        "Force",
        "Velocity",
        "Momentum",
      ],
      answer: "Strain",
    },
  ],

  1: [
    {
      question: "What is displacement?",
      options: [
        "The shortest distance between initial and final position with direction",
        "The total path travelled",
        "Distance travelled per unit time",
        "Change in speed per unit time",
      ],
      answer: "The shortest distance between initial and final position with direction",
    },
  ],

  2: [
    {
      question: "Who formulated the three laws of motion?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "James Clerk Maxwell",
      ],
      answer: "Isaac Newton",
    },
  ],
};


// ================================
// SHUFFLE SYSTEM
// ================================

export function shuffleQuestions(questions) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}


export function shuffleOptions(options) {
  const shuffled = [...options];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}


export default physicsQuestions;