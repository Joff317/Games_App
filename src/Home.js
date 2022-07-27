import {PageList} from "./PageList";
const API_KEY = process.env.PROJECT_API_KEY;

const Home = (argument = "") => {
  const searchBtn = document.getElementById("btnSearch");
  const searchBar = document.getElementById("search-bar");
  const moreGames = document.getElementById("moreGames");
//   const cleanedArgument = argument.trim().replace(/\s+/g, '-');
//   let list = fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
//   console.log(list);
//  const platformName = document.getElementsByName('platform')
// const platformName = document.querySelector('.platform') 



  
   document.getElementById("présentation").style.display = "block";

   let numberOfPages = 0;

   let landingPageArgument = `&dates=2022-07-26,2023-07-26&ordering=-rating&page_size=${(numberOfPages = 9)}`;
   PageList(landingPageArgument);

   searchBtn.addEventListener("click", () => {
       document.getElementById("présentation").style.display = "none";
      // console.log(searchBar.value);
       PageList(searchBar.value);
       
   });

  moreGames.addEventListener("click", () => {
      let landingPageArgument = `&dates=2022-07-26,2023-07-26&ordering=-rating&page_size=${(numberOfPages += 9)}`;
      PageList(landingPageArgument);
      numberOfPages === 27 ? moreGames.remove() : moreGames;
  });

 

// Récupérer la list que je fetch dans le PageList et la mettre dans le Home.js 
// Chercher dans cette liste le nom des platformes 
// New array selected platform ou l'on va comparer avec le choix de l'user => liste article en lien avec choix = push new tableau 
// A partir de cette liste(new tableau) => render
// A chaque nouveau filtre vider le tableau et recommencer 


//  const leTableau = Array.from(document.getElementsByName('platform'));    
//   for(let i = 0; i < leTableau.length; i++){
//    leTableau[i].addEventListener('change', (e) => {
//      const article = document.getElementById("container")
//      const label = document.getElementById("platformName")
//      const filter = e.target.value 

//      for(let j = 0; j < article.length; j++){
//       if(article[j].textContent.match(filter)){
//          article[j].style.display = ""
//       } else {
//          article[j].style.display = "none"
//       }
//      }
//    })
//   }

  

};

export { Home };
