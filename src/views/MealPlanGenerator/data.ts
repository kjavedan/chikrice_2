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

const goalsOptions = [
  {
    value: 'loseWeight',
    label: 'Lose weight',
    icon: '🏃‍♂️🍓🥝'
  },
  {
    value: 'gainWeight',
    label: 'Gain weight',
    icon: '🤸‍♂️🏋️🍚'
  },
  {
    value: 'optimizePerformance',
    label: 'Optimize Performance',
    icon: '⚡💡☕'
  }
]

const proteinsOptions = [
  { label: '🥜 Nuts', value: 'nuts' },
  { label: '🧈 tofu', value: 'tofu' },
  { label: '🐟 Fish', value: 'fish' },
  { label: '🥚 Eggs', value: 'eggs' },
  { label: '🦃 Turkey ', value: 'turkey' },
  { label: '🍳 Egg White', value: 'eggWhite' },
  { label: '🐔 Chicken Breast', value: 'chicken' },
  { label: '🥩 Flank Steak', value: 'flankSteak' },
  { label: '🧋 Protein Whey', value: 'proteinWhey' },
  { label: '🥛 Greek Yogurt', value: 'greekYogurt' },
  { label: '🍔 lean Grounded Beef', value: 'groundBeef' }
]

const carbsOptions = [
  { label: '🍚 Rice', value: 'rice' },
  { label: '🌽 Corn', value: 'corn' },
  { label: '🌾 Oats', value: 'oats' },
  { label: '🍝 Pasta', value: 'pasta' },
  { label: '🥖 Bread', value: 'bread' },
  { label: '🥔 Potato', value: 'potato' },
  { label: '🍠 Sweet Potato', value: 'sweetPotato' },
  { label: '🫘 beans & Lentils', value: 'beansLentils' }
]
const fruitsOptions = [
  { label: '🍏 Apple', value: 'apple' },
  { label: '🍌 Banana', value: 'banana' },
  { label: '🍇 Grapes', value: 'grapes' },
  { label: '🍊 Orange', value: 'orange' },
  { label: '🍍 Pineapple', value: 'pineapple' },
  { label: '🍓 Strawberry', value: 'strawberry' }
]

const vegetablesOptions = [
  { label: '🧅 Onion', value: 'onion' },
  { label: '🍅 Tomato', value: 'tomato' },
  { label: '🥕 Carrots', value: 'carrots' },
  { label: '🥬 Lettuce', value: 'lettuce' },
  { label: '🥑 Avocado', value: 'avocado' },
  { label: '🍃 Spinach', value: 'spinach' },
  { label: '🥦 Broccoli', value: 'broccoli' },
  { label: '🍠 Zucchini', value: 'zucchini' },
  { label: '🍆 Eggplant', value: 'eggplant' },
  { label: '🥒 Cucumber', value: 'cucumber' },
  { label: '🫛 Green Beans', value: 'greenBeans' },
  { label: '🫑 Bill Pepper', value: 'billPepper' }
]

const fatsOptions = [{ label: '🌻 Any Type of Oil', value: 'oil' }]
const speedOptions = [
  { value: 'slow', label: 'Slow', icon: '🐌' },
  { value: 'moderate', label: 'Moderate (recommended)', icon: '🚶' },
  { value: 'fast', label: 'Fast', icon: '🏃‍♂️' }
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
