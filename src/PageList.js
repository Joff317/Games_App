const PageList = (argument = '') => {
const API_KEY = process.env.PROJECT_API_KEY;
// const searchBtn = document.getElementsByClassName('search-btn')
// const searchBar = document.getElementById('search-bar')


   const preparePage = () => {
     const cleanedArgument = argument.trim().replace(/\s+/g, '-');
 
     const displayResults = (articles) => {
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
                  <li><strong>Decoration: </strong>${article.editor}</li>
                  <li><strong>Note/Nombre de votes: </strong>${article.rating}/5 - ${article.ratings_count}</li>
               </ul>
            </div>
         </div>
      </div>
      `
       ));


      //  <div class="one-card-container">
      //         <div class="background-image-container">
      //          <a href="#pagedetail/${article.id}"><img src="${article.background_image}" alt="video game image" class="image-in-card"/></a>
      //         </div>

      //         <div class="game-name-container">
      //           <p class="game-name">${article.name} ${article.id}</p>
      //         </div>
      //         <div class="platforms-container">
      //           <p class="platforms">PLATFORMS : A FAIRE PLUS TARD</p>
      //         </div>
      //       </div>

       const resultsContainer = document.querySelector('.page-list .articles');
       resultsContainer.innerHTML = resultsContent.join("\n");
     };
 
     const fetchList = (url, argument) => {
       const finalURL = argument ? `${url}&search=${argument}` : url;
       fetch(finalURL)
         .then((response) => response.json())
         .then((responseData) => {
           displayResults(responseData.results)
           console.log(responseData.results);
         });
     };
 
     fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
   };
 
   const render = () => {
     pageContent.innerHTML = `
       <section class="page-list">
         <div class="articles">Loading...</div>
       </section>
     `;
 
     preparePage();
   };
 
   render();
 };

 export {PageList}