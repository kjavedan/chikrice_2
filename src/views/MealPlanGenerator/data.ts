export const stepsConfig = [
  {
    step: 1,
    question: 'whatIsYourGoal',
    questionLink: '',
    questionLinkPaht: '',
    footerLink:
      'What is the difference between losing, gaining weight and optimizing proformance  diet plan',
    path: ''
  },
  {
    step: 2,
    question: 'How fast you want to acheive your goal',
    questionLink: '',
    questionLinkPaht: '',
    footerLink: 'What is the difference between slow, moderate and fast diet plan',
    path: ''
  },
  {
    step: 3,
    question: 'How many calories do you need',
    questionLink: '',
    questionLinkPaht: '',
    footerLink: 'How we use your calories with your goal to write a practical meal plan for you ',
    path: ''
  },
  {
    step: 4,
    question: 'Confirming your macros What is macros',
    questionLink: 'What is macros',
    questionLinkPaht: '',
    footerLink: 'why macros are important in your diet and how we calculate them',
    path: ''
  },
  {
    step: 5,
    question: 'Select your Proteins',
    questionLink: 'What you need to consider when selecting',
    questionLinkPaht: '',
    footerLink: 'What is the role of proteins in diet ',
    path: ''
  },
  {
    step: 6,
    question: 'Select your Main Carbs',
    questionLink: 'What you need to consider when selecting',
    questionLinkPaht: '',
    footerLink: 'What is the role of Carbs in diet',
    path: ''
  },
  {
    step: 7,
    question: 'Select your Fruits',
    questionLink: 'What you need to consider when selecting',
    questionLinkPaht: '',
    footerLink: 'What is the role of Fruits in diet',
    path: ''
  },
  {
    step: 8,
    question: 'Select your Vegetables',
    questionLink: 'What you need to consider when selecting',
    questionLinkPaht: '',
    footerLink: 'What is the role of Fats in diet ',
    path: ''
  },
  {
    step: 9,
    question: 'How many meals you want us to break up your plan',
    questionLink: 'why we recommend 4-5 meals',
    questionLinkPaht: '',
    footerLink: 'What is the role of Vegetables in diet',
    path: ''
  },
  {
    step: 10,
    question: 'Do you want to includ sweets and snacks in you diet',
    questionLink: 'When and how we can include them in our diet',
    questionLinkPaht: '',
    footerLink: 'Why we give the option to include some sweets and snacks in our diet system',
    path: ''
  }
]

export const budgetData = {
  enough: {
    loseWeight: {
      proteins: 40,
      carbs: 40,
      fats: 20
    },
    gainWeight: {
      proteins: 30,
      carbs: 50,
      fats: 20
    },
    optimizePerformance: {
      proteins: 35,
      carbs: 45,
      fats: 20
    }
  },

  low: {
    loseWeight: {
      proteins: 35,
      carbs: 45,
      fats: 20
    },
    gainWeight: {
      proteins: 25,
      carbs: 50,
      fats: 25
    },
    optimizePerformance: {
      proteins: 30,
      carbs: 45,
      fats: 25
    }
  }
}

const goalsOptions = [
  {
    value: 'loseWeight',
    icon: '🏃‍♂️🍓🥝'
  },
  {
    value: 'gainWeight',
    icon: '🤸‍♂️🏋️🍚'
  },
  {
    value: 'optimizePerformance',
    icon: '⚡💡☕'
  }
]

const proteinsOptions = [
  { icon: '🥜', value: 'nuts' },
  { icon: '🧈', value: 'tofu' },
  { icon: '🐟', value: 'fish' },
  { icon: '🥚', value: 'eggs' },
  { icon: '🦃', value: 'turkey' },
  { icon: '🐔', value: 'chicken' },
  { icon: '🥩', value: 'flankSteak' },
  { icon: '🧋', value: 'proteinWhey' },
  { icon: '🥛', value: 'greekYogurt' },
  { icon: '🍔', value: 'groundBeef' }
]

const carbsOptions = [
  { icon: '🍚', value: 'rice' },
  { icon: '🌽', value: 'corn' },
  { icon: '🌾', value: 'oats' },
  { icon: '🍝', value: 'pasta' },
  { icon: '🥖', value: 'bread' },
  { icon: '🥔', value: 'potato' },
  { icon: '🍠', value: 'sweetPotato' },
  { icon: '🫘', value: 'beansLentils' }
]

const fruitsOptions = [
  { icon: '🍏', value: 'apple' },
  { icon: '🍌', value: 'banana' },
  { icon: '🍇', value: 'grapes' },
  { icon: '🍊', value: 'orange' },
  { icon: '🍍', value: 'pineapple' },
  { icon: '🍓', value: 'strawberry' }
]

const vegetablesOptions = [
  { icon: '🧅', value: 'onion' },
  { icon: '🍅', value: 'tomato' },
  { icon: '🥕', value: 'carrots' },
  { icon: '🥬', value: 'lettuce' },
  { icon: '🥑', value: 'avocado' },
  { icon: '🍃', value: 'spinach' },
  { icon: '🥦', value: 'broccoli' },
  { icon: '🍠', value: 'zucchini' },
  { icon: '🍆', value: 'eggplant' },
  { icon: '🥒', value: 'cucumber' },
  { icon: '🫛', value: 'greenBeans' },
  { icon: '🫑', value: 'billPepper' }
]

const fatsOptions = [{ icon: '🌻', value: 'oil' }]

const speedOptions = [
  { icon: '🐌', value: 'slow' },
  { icon: '🚶', value: 'moderate' },
  { icon: '🏃‍♂️', value: 'fast' }
]

export const optionsConfig = {
  fats: fatsOptions,
  goals: goalsOptions,
  carbs: carbsOptions,
  fruits: fruitsOptions,
  proteins: proteinsOptions,
  vegetables: vegetablesOptions,
  goalAchievementSpeed: speedOptions
}
