import { GetPlatform } from "./GetPlatform";

const PageList = (argument = '') => {
const API_KEY = process.env.PROJECT_API_KEY;
const select = document.getElementById('select')

   const preparePage = () => {
     const cleanedArgument = argument.trim().replace(/\s+/g, '-');
     
     const displayResults = (articles) => {
      let icons = [
         '' ,
       '<i class="fab fa-windows" style="font-size:30px"></i>',
       '<i class="fab fa-playstation" style="font-size:30px"></i>', 
       '<i class="fab fa-xbox" style="font-size:30px"></i>', 
       '<i class="fab fa-app-store-ios" style="font-size:30px"></i>', 
       '<i class="fab fa-apple" style="font-size:30px"></i>', 
       '<i class="fab fa-linux" style="font-size:30px"></i>', 
       '<i class="fab fa-nintendo-switch" style="font-size:30px"></i>', 
       '<i class="fab fa-android" style="font-size:30px"></i>'
      ];

       const resultsContent = articles.map((article) => (  
      `
      <div id="container">   
         <div class="product-details">
            <p>${article.name}</p>
               <p class="information"> Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>
            <div class="control">
               <a class="btn" href="#pagedetail/${article.id}"> See More ${article.id}</a>
            </div>    
         </div>
         
         <div class="product-image">
            <img src="${article.background_image}">
            <div class="info">
               <h2> Description</h2>
               <ul>
                  <li><strong>Date de sortie : </strong> ${article.released} </li>
                  <li><strong>Genres : </strong>${article.genres.map(genre => genre.name)}</li>
                  <li id="platformId"><strong>Platform:${article.parent_platforms ? article.parent_platforms.map(platform => icons[platform.platform.id]).join('') : ""}</li>
                  <li><strong>Note/Nombre de votes: </strong>${article.rating}/5 - ${article.ratings_count}</li>
               </ul>
            </div>
         </div>
      </div>
      `
       ));
      //  GetPlatform()
       const resultsContainer = document.querySelector('.page-list .articles');
       resultsContainer.innerHTML = resultsContent.join("\n");

     };

         const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&search=${argument}` : url;
            fetch(finalURL)
               .then((response) => response.json())
               .then((responseData) => {
                  console.log(responseData);
                  displayResults(responseData.results)
                });
         };
 
  
   fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
   

//---------------------------- TRIIIIIIIIIIII -----------------------------


 

      // var platformList = []
         const fetchPlatform = (url) => {
            let finalURL = (url)
            fetch(finalURL)
            .then((response) => response.json())
            .then((responseData) => {
             displayList(responseData.results)
            });
         };


     const displayList = (platforms) => {
      const selectList =  platforms.map((platform) => (

         `
            <option>${platform.name}</option>
         `
   
         ))
   
         const select = document.querySelector('select')
         select.innerHTML = selectList.join("\n")
     }
    
     fetchPlatform(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`)


     


   };
 
   const render = () => {
     pageContent.insertAdjacentHTML("beforeend", `
       <section class="page-list">
         <div class="articles"></div>
       </section>
     `);
 
     preparePage();
   };
 
   render();
 };

 export { PageList }