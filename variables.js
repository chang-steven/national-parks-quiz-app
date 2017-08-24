// is an array object of the questions, which questionPage will index through and display the text

// function manip (text) {
//   for (let i=0; i < text.length; i++ ) {
//     text[i]['submit']= false
//   }
// };

const quizSet = [
  { question: "1. What was the world's first national park, created by an act of Congress in 1872?",
  choices: ["Yellowstone National Park", "Joshua Tree National Park", "Acadia National Park", "Lewis and Clark National Historic Trail"],
  answer: 1,
  blurb: "Yellowstone National Park is America's first national park. The park has 60 percent of the world’s geysers as well as many hot springs and several mud pots. Perhaps the most famous feature of the park is the geyser Old Faithful. Created in 1872 as the first national park in America, it set the standard for the entire National Park System and is, for many, the most iconic park in the country.",
  image: 'http://my.npca.org/images/content/pagebuilder/old-faithful-pixabay.jpg'
  },

  { question: "2. The national parks preserve more than just wildlife. Which park is home to a former federal prison?",
  choices: ["Boston National Historical Park", "Valley Forge National Historical Park", "Golden Gate National Recreation Area", "Death Valley National Park" ],
  answer: 3,
  blurb: "Golden Gate National Recreation Area is home to Alcatraz, America’s first “supermax” prison. But beyond Alcatraz, Golden Gate National Recreation Area is home to more than two dozen natural, historic, and cultural sites in and around the city of San Francisco.",
  image: "http://my.npca.org/images/content/pagebuilder/alcatraz-pixabay.jpg"
  },


  { question: "3. The largest organism in the world lives in America's national parks, which one is it?",
  choices:["Elk", "Grizzly Bear", "Bison", "Sequoia Tree"],
  answer: 4,
  blurb:"Sequoia National Park in California's Sierra Nevada mountains is home to the largest tree on earth. 'General Sherman,' a sequoia tree in the Giant Forest, is the world's most voluminous living tree specimen, standing 275 feet high with a base circumference of over 100 feet. The park's lower elevations feature spectacular waterfalls and more than 200 known caves of beautiful stalactites and naturally polished marble. Most of the park is secluded wilderness and backcountry, and can be reached only by hiking or horseback riding.",
  image: "http://my.npca.org/images/content/pagebuilder/gen_sherman_lookup17961.jpg"
  },

  { question: "4. How many national park units are there?",
  choices:["13", "193", "397", "400+"],
  answer: 4,
  blurb: "Today, the National Park System’s 400 plus units cover more than 83 million acres and include sites ranging from the homes of historic figures to Civil War battlefields, from Alaska’s gigantic, 13.2-million-acre Wrangell-St. Elias National Park and Preserve, to Ford’s Theater National Historic Site, commemorating where President Lincoln was assassinated. In addition to national parks, the park system includes national monuments, seashores, recreation areas, historic sites, military parks, battlefields, and other designated units.",
  image: "http://my.npca.org/images/content/pagebuilder/mappins.jpg"
  },

  { question: "5. Which national park is home to the longest cave system in the world?",
  choices:["Oregon Caves National Monument", "Wind Cave National Park", "Mammoth Cave National Park", "Grand Teton National Park"],
  answer: 3,
  blurb: "Mammoth Cave is the longest known cave system in the world with more than 350 miles of passageways, all some 400 feet underground. Mammoth Cave National Park also protects more than 52,000 acres of land and is home to a variety of animals. According to NPCA's research, this park is one of the five most polluted parks in the park system. The park is downwind from large, coal-fired power plants that produce much of the sulfur pollution responsible for hazy skies. NPCA is fighting on both the national and local levels to clear the air in our parks to ensure the long-term health of the parks and their visitors.",
  image: "http://my.npca.org/images/content/pagebuilder/mammothcave-nps.jpg"
  },

  { question: "6. What is the most visited national park with over 9 million visitors every year?",
  choices:["Great Smoky Mountains National Park", "Lincoln Memorial", "Grand Canyon National Park", "Yellowstone National Park"],
  answer: 1,
  blurb: "Because of its popularity and proximity to major urban areas, the Great Smoky Mountains is the most visited national park. Over 10,000 different species of flora and fauna have been identified within the park's boundaries, including Jordan’s red cheeked salamander, a species that only occurs in this park. The park faces the threat of poor air quality that has a damaging effect on the park’s ecosystem that supports rare species like this.",
  image: "http://my.npca.org/images/content/pagebuilder/smokey-mountains.jpg"
  },

  { question: "7. Which national park is home to a collection of tropical rain forests?",
  choices:["Olympic National Park", "The National Park of American Samoa", "Kalaupapa National Historical Park", "Everglades National Park"],
  answer: 2,
  blurb: "National Park of American Samoaencompasses a variety of ecosystems, from rainforest to coral reef. The park, which includes some of the most beautiful beaches on the islands, is home to sea turtles, flying foxes, humpback whales, and colorful tropical fish and birds. The To’aga archaeological dig has uncovered artifacts from three millennia of island inhabitants. The residents of Ofu village nearby trace their ancestry to this ancient civilization.",
  image: "http://my.npca.org/images/content/pagebuilder/samoa-sander.jpg"
  },

  { question: "8. Which famous American's home -- and national park -- was used by George Washington as headquarters during the siege of Boston from 1775-1776?",
  choices: ["Clara Barton", "Henry Wadsworth Longfellow", "Carl Sandburg", "Augustus Saint-Gaudens"],
  answer: 2,
  blurb: "The abandoned home of Henry Wadsworth Longfellow was used by George Washington during the Siege of Boston. As commander of the Continental army, he used the home as his headquarters during the siege and moved out in 1776.",
  image: "http://my.npca.org/images/content/pagebuilder/longfellow-nps.jpg"
  },

  { question: "9. In which national park did the first major land battle of the Civil War take place?",
  choices: ["Antietam National Battlefield", "Petersburg National Battlefield", "Gettysburg National Military Park", "Manassas National Battlefield Park"],
  answer: 4,
  blurb: "Union and Confederate troops met in their first major land battle on July 21, 1861, at Manassas National Battlefield Park. Manassas, Virginia, was considered a key area because it offered access to the railroad and transportation, only 30 miles southwest of Washington, D.C. The Battle of Bull Run, as it was also called, favored the north in the early going, but Confederate forces eventually received reinforcements, and their numbers allowed them to repel an advancing Union side. Today, the park faces threats from commercial development within and just outside its borders and NPCA is working with historic preservation groups to promote practical solutions to preserve the land while also allowing for growth in nearby communities.",
  image: "http://my.npca.org/images/content/pagebuilder/manassas-cms.jpg"
  },

  { question: "10. Which 152 ft copper gift from the French is one of America's most iconic images and a national park?",
  choices: ["Mount Rushmore National Memorial", "Fort McHenry National Monument & Historic Shrine", "Statue of Liberty National Monument", "Thomas Jefferson Memorial"],
  answer: 3,
  blurb: "The Statue of Liberty National Monument was a gift from the French in 1886. Known as Lady Liberty, she holds the torch of enlightenment and the tablet of knowledge. She walks over broken shackles at her feet to defy persecution. The statue stands on Liberty Island, and overlooks New York Harbor and skylines in New York and New Jersey. A symbol of liberty and relief from oppression, she was the first sight of America for many US immigrants who arrived by boat to New York.",
  image: "http://my.npca.org/images/content/pagebuilder/liberty_istock.jpg"
  }
];

// manip(quizSet);
