import {PageList} from './PageList'

const Home = (argument = '') => {
   const searchBtn = document.getElementById('btnSearch')
   const searchBar = document.getElementById('search-bar')
   const landingPage = document.getElementById('landing-page')

   let landingPageArgument = `&dates=2022-07-26,2023-07-26&ordering=-rating&page_size=9`;
   landingPage.insertAdjacentHTML= `<h3>Welcome to THProgame</h3>
   <p class="page-description">THProgame allows you to learn all about videogames releases</p>
   `;
   PageList(landingPageArgument);
   
   searchBtn.addEventListener('click', () => {
      // console.log(searchBar.value);
      PageList(searchBar.value)
   })
 };

 export {Home}