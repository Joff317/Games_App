const API_KEY = process.env.PROJECT_API_KEY;
const PageDetail = (argument) => {
   const preparePage = () => {
     const cleanedArgument = argument.trim().replace(/\s+/g, "-");
 
     const displayGame = (gameData) => {
       const { name, released, description, background_image, rating, ratings_counts } = gameData;
       const articleDOM = document.querySelector(".page-detail .article");
       articleDOM.querySelector("h1.title").innerHTML = name;
       articleDOM.querySelector("p.release-date span").innerHTML = released;
       articleDOM.querySelector("p.description").innerHTML = description;
       articleDOM.querySelector("div.background").style.background = `url(${background_image})`
       articleDOM.querySelector("div.background").style.height = `50vh`
       articleDOM.querySelector("div.background").style.backgroundSize = `cover`
       articleDOM.querySelector("div.background").style.backgroundPosition = `center`
       articleDOM.querySelector("div.background").style.backgroundRepeat = `no-repeat`
       articleDOM.querySelector("h2.rating span").innerHTML = rating
       articleDOM.querySelector("h2.rating .vote").innerHTML = ratings_counts


     };
 
     const fetchGame = (url, argument) => {
       fetch(`${url}/${argument}?key=${API_KEY}`)
         .then((response) => response.json())
         .then((responseData) => {
           displayGame(responseData);
           console.log(responseData);
         });
     };
 
     fetchGame('https://api.rawg.io/api/games', cleanedArgument);
   };
 
   const render = () => {
     pageContent.innerHTML = `
     <div style="position:absolute; z-index:1000; height:100%; width:200vw; background-color: rgb(212, 13, 53); transition: 1s ease-in; transform: translateX(-220vw)" id="transition"></div>
     <section class="page-detail">
      <div class="article">
       <div class="background"><a id="website" href="" target="_blank">Check Website ></a></div>
         <div class="row mt-3">
             <div class="col-lg-8 col-md-8 col-sm-12">
               <h1 class="title"></h1>
             </div>
             <div class="col-lg-4 col-md-4 col-sm-12">
               <h2 class="rating"><span></span>/5 - <span class="vote"></span> votes</h2>
             </div>
         </div>
         <p style="margin:0"><strong>Plot</strong></p>
         <p class="description"></p>
         <div class="row mt-3">
             <div class="col-lg-3 col-md-4 col-sm-6">
               <p class="release-date"><strong>Release date</strong><br><span></span></p>
             </div>
             <div class="col-lg-3 col-md-4 col-sm-6">
               <p class="developer"><strong>Developer</strong><br><span></span></p>
             </div>
             <div class="col-lg-3 col-md-4 col-sm-6">
               <p class="platforms"><strong>Platforms</strong><br><span></span></p>
             </div>
             <div class="col-lg-3 col-md-4 col-sm-6">
               <p class="publisher"><strong>Publisher</strong><br><span></span></p>
             </div>
             <div class="col-lg-6 col-md-6 col-sm-12">
               <p class="genre"><strong>Genre</strong><br><span></span></p>
             </div>
             <div class="col-lg-6 col-md-12 col-sm-12">
               <p class="tags"><strong>Tags</strong><br><span></span></p>
             </div>
         </div>
         <h2 class="rating mt-3">BUY</h2>
         <p class="store"></p>
         <div id="video">
         </div>
         
         <div id="screenshot">
         </div>
         <div id="similar">
         </div>
       </div>
     </section>
     `;
 
     preparePage();
   };
 
   render();
 };

 export {PageDetail}