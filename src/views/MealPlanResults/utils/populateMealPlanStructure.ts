export const populateMealPlanStructure = (structure, groceryList) => {
  console.log('🚀 ~ populateMealPlanStructure ~ groceryList:', groceryList)
  console.log('🚀 ~ populateMealPlanStructure ~ structure:', structure)

  // ? What if the newMacro overflowed ?
  // what I can do is to just recalculate the macros on each change

  // * How the steps would look like ?
  // 1. get the structure and groceryList
  // for example if we have rice, potato, beans, pasta and 3 meals
  // we would have 2 days which we first need to add the unique items
  // ? DAY 1
  // meal 1 -> rice
  // meal 2 -> pasta
  // meal 3 -> potato
  // ? DAY 2
  // meal 1 -> beans
  // meal 2 -> rice
  // meal 3 -> potato
  // ? Is this practical ?
  // no
  // ? What is practical ?
  // meal 1 -> rice
  // meal 2 -> rice
  // meal 3 -> bread
  // ? What about other person who might want to eat something else ?

  return 'huhu'
}

// ? Brain storming
/*
    When it comes to what to eat it's always about preperation
    for example you are usually going to prepare either one type
    or some times you might prepare 2 types

    for me personally I like to have veraiety as well but it's not easy
    to prpare it all the times so that is way I go with the same thing
    every meal

    for example I go with rice and chicken 3 times a day 

    or I go with rice and fish 3 times a day

    or I go rice and beef 3 times a day

    and have eggs and bread when i don't have time or a protein shake

    what about the majority of people who I know 

    there could be only 5 to 10% of the people I know who have the 
    time to be creative and cook different meals all the time
    
    the majority of people don't have enough time to prepare a lot of food

    that is also true for me 

    what can I do to solve that problem for me and others ?

    I need to come up with solution that is simple and practical in the same time

    It should work and not just be a regular plan

    ! How?
    Before anything else I need to come up with plan that works for me

    ! What works for me?
    let's recall different time periods in my life

    ? Starting out
      Had a lot of time
      Didn't have clue what I was doing.
      no money to get the best food items
      random meals 
      eating to much fats to get the proteins
      going so creazy and fast on both Bulking and Cutting -> No money
      prtein source -> eggs, chicken, beans, soy, nuts, milk, yugert
      carbs source -> bread, rice, past

    ? Gallet food
      Had little time
      Had some clue what I was doing
      Had some money but little trying to make money
      Combination of random meals and prepared meals base on the situation
      Again going creazy on bulking and cutting -> wants get fast to the goal
      protein sources -> eggs, chicken, beef
      carbs sources -> bread, rice, fried potato, pizza, rice

    ? Collage week1
      New environment Addptation
      Had clue what I was doing
      Had money (middle)
      Buying protein rich meals from outside and cooking eggs
      Maintanence just eating good meals and not going with junk food
      Protein sources eggs, chicken
      carbs sources bread, rice

    ? Collage Month1
      Addapted to the environment
      Had clue what I was doing
      Had money(middle)
      Combination of prepared meals with collage meals
      Trying to bulk and cut with the food combination -> bad Idea
      Protein sources -> eggs, chicken, (fish, beef -> little)
      carbs sources -> bread, rice, past

    ? Collage Year1
      Improved Environment Dormitary to Home
      Got more intelligent with what I was doing
      Had money (middle)
      Combination of prepared meals with collage food
      Trying to bulk and cut so strict and fast cuasing creazy cheat meals at the end resulting in no improvements
      Went so fast and creazy with workout -> got injured
      Protein sources -> eggs, chicken, lentils
      carbs sources -> bread, rice, potato, lentils

    ? Working With Shiro
      Back home had to make money
      Had money(middle)
      Had enough experience with food
      Combination of prepared meals with home cooking protein dense meals
      Trying to cut and bulk but not so fast or strict
      Had to fit in workout with little time and injuris
      proteins sources -> eggs, chicken, beef
      crbas sources -> bread, rice

    ? Working With Nasser
      Had to work to make money
      Had money(middle)
      Had lots of experience
      Prepared food eating lots of food -> proteins and carbs (half-junk)
      Trying to get big -> I was big and strong at that time 
      Had to fit in my workout with work and life
      Proteins sources -> eggs, chicken
      carbs sources -> bread, rice

    ? Working on Mama's Home -> best shape of my life
      Had to work so hard 
      Had the complete authority on my time
      Didn't worry about money
      Had money middle
      Had lots of experiece
      Was in the one of worst shapes of my life at first
      no diet no workout and with enjury
      Got so busy working on home had to fit in small workout so small 
      Got my food as clean as possible no food weigh in just eating healthy meals
      Proteins sources -> eggs, chicken, some beef
      carbs -> bread, rice, potato

    ? Comming to Dubai 
      Didn't have to work just looking for job
      Had extremely bad environment in terms of junk food -> full ability to eat junk food 
      Got in crezy bad shape
      Got a gym membership working out softly 3 ro 4 times in a week
      just trying to keep up with the life changes
      Protien sources -> mixed
      Carbs sources -> mixed


    ? Defacto 
      New environment -> so bad -> had to addapt
      Had money middle
      Had lots of experience
      Couldn't workout no time for gym
      Combination of prepared meals with companies food
      proteins sources -> eggs, chicken
      carbs -> bread, rice
      Just maintaing a healthy diet

    ? Bomei
      New environment -> better than before -> addapted to it
      Had money (enough)
      Had lots of experience
      Found a gym and fit some workout in the tight work schedule -> but not hard
      Combination of prepared meals and buying food from resturants 
      protein sources -> eggs, chicken
      carbs -> bread, rice
      Just maintaing a healthy diet

    ? Utopia
      New environment -> better than before -> addapted to it
      Had money (enough)
      Had lots of experience
      Found a gym and fitted some workouts in -> but not hard
      Combination of company's food and ordering from Pak darbar
      Just maintaing a healthy diet
      protein sources -> mixed
      carbs sources -> mixed

    ? Dragon first month
      Addapted fully to the environment
      Had money(enough)
      Had lots of experience
      Working out regularly -> but not hard
      Preparing food myself -> optimizing performance
      trying to cut fat and get in shape again
      proteins sources -> eggs, chicken, beef, fish, tofu, protein whey -> enough money baby
      carbs sources -> bread, rice, potato
      mixed viegis in hahaha

    ? Dragon second month
      New situation cutting the food allowence and replace it with company's food
      Had money(enough)
      Had lots of experience
      Working out regularly -> but not hard
      Trying to maintain a healthy diet
      Combination of companies food combined with protein shakes and eggs at night
      protein sources -> eggs, tuna, protein whey
      carbs -> bread, rice

    ? Aurora
      New environment -> addapting
      Have money(enough)
      Have so stricted time schedule similar to bomei at first
      Have lots of experience
      Working out once every two days
      Eathing healthy food similar to what I did in the first month in dragon
      Eating only prepared food
      protein sources -> eggs, chicken, beef, protein whey
      carbs -> bread, rice
*/
