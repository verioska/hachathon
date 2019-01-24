
document.addEventListener('DOMContentLoaded', function(){
    window.M.AutoInit(); 
});

window.onload =() =>{
    let movies = null;
//Click de la imagen Bird Box
fetch("http://www.omdbapi.com/?t=bird+box&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
           <img class="responsive-img"  id="movie1"  movie="${data.title}" src="${data.Poster}">`
           console.log(data.title,"es el titulo")
});
$(document).on('click', '#movie1', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=bird+box&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    `
  });

})

//Click de la imagen Aquaman
fetch("http://www.omdbapi.com/?t=aquaman&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
      <img class="responsive-img"  id="movie2"  movie="${data.title}" src="${data.Poster}">`
});
$(document).on('click', '#movie2', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=aquaman&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    `
  });

})

//Click de la imagen Glass
fetch("http://www.omdbapi.com/?t=glass&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
     <img class="responsive-img"  id="movie3"  movie="${data.title}" src="${data.Poster}">`
});

$(document).on('click', '#movie3', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=glass&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    `
  });

})

//Click de la imagen Venem

fetch("http://www.omdbapi.com/?t=venom&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
  <img class="responsive-img"  id="movie4"  movie="${data.title}" src="${data.Poster}">`
});
$(document).on('click', '#movie4', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=venom&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    `
  });

})


document.getElementById('movies').addEventListener('click',
(event) => {
event.preventDefault();

fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019&page=1")
    .then(data=>data.json())
    .then(data=>{
      let characters= data.results;
      console.log('data buena', data);
      for (let i = 0; i <characters.length; i++){
        let title= characters[i].title
        document.getElementById('movies-list').innerHTML +=  `
            <div class="container">
              <div id="card-movie" class="col s12 m3" >
              <div class="card" >
               <img class="imagen-mivies responsive-img"  movie="${characters[i].title}" src="https://image.tmdb.org/t/p/w500${characters[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
                <div class="card-content">
                 <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${characters[i].title}</p></span>
               </div>
              </div>  
             </div> 
           </div>
        </div>
            `
            
            console.log(characters[i].id)
          }

document.getElementById('page1').style.display='none';
document.getElementById('page2').style.display='block';
document.getElementById('page3').style.display='block';
});  
}); 

//dandole click a la pantalla 2

$(document).on('click', '#card-movie', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t="+title+"&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    `


  });

})


//Pagina 1
  document.getElementById("start").addEventListener("click",
  (event) => {
  event.preventDefault();
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display="none";
  document.getElementById("page4").style.display="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page5").style.display="none";
  document.getElementById('page6').style.display='none';
 
});

//select de filtrar por categoria page 4
document.getElementById("filter").addEventListener("change", (event)=>{
  event.preventDefault();
  document.getElementById("page3").style.display="none";
  document.getElementById('page6').style.display='none';
  document.getElementById('page5').style.display='block';
  
  document.getElementById("filter-year").innerHTML="";
  let genero = document.getElementById("filter").value;
  console.log(genero)
  let year= document.getElementById("filter_year").value;

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&page=1&primary_release_year="+year+"&with_genres="+genero)
  .then(data=>data.json())
  .then(data=>{
    let gen= data.results
    
    
    for (let i = 0; i <gen.length; i++){
          document.getElementById("filter-year").innerHTML += `
          <div class="container">
          <div id="movies-filter" class="col s12 m3" >
          <div class="card" >
           <img class="imagen-mivies responsive-img"  movie="${gen[i].title}" src="https://image.tmdb.org/t/p/w500${gen[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
            <div class="card-content">
             <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${gen[i].title}</p></span>
           </div>
          </div>  
         </div> 
       </div>
    </div>       
 
      `
      
    }
    });
 
  })

  //dandole click al filtro de categorias

$(document).on('click', '#movies-filter', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page4').style.display='none';
  document.getElementById('page5').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById("filter-year").style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t="+title+"&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    console.log(data)
    
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    `


  });

})


  //Select de filtar por año page 5
  document.getElementById("filter_year").addEventListener("change", (event)=>{
    event.preventDefault();
    document.getElementById("page3").style.display="none";
    document.getElementById('page6').style.display='none';
    document.getElementById("filter-year").style.display='block';
    
     document.getElementById("filter-year").innerHTML="";
     let year= document.getElementById("filter_year").value;
     console.log(year)
     let genero = document.getElementById("filter").value;
     fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&page=1&primary_release_year="+year+"&with_genres="+genero)
     .then(data=>data.json())
     .then(data=>{
       let gen= data.results
      
   
       for (let i = 0; i <gen.length; i++){
             document.getElementById("filter-year").innerHTML += `
             

             <div class="container">
             <div id="movies-filter" class="col s12 m3" >
             <div class="card" >
              <img class="imagen-mivies responsive-img"  movie="${gen[i].title}" src="https://image.tmdb.org/t/p/w500${gen[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
               <div class="card-content">
                <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${gen[i].title}</p></span>
              </div>
             </div>  
            </div> 
          </div>
       </div> 
    
         `
       }
       });

  })
  

  document.getElementById('myInput').addEventListener("keydown", (e) => {
         if(e.keyCode === 13){
           alert("hola")
         }
    })
  


      
}
































// window.onload =() =>{
// window.onload= showCards 
  
//   function showCards () {
 
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2018&page=1")
//     .then(data=>data.json())
//     .then(data=>{
//       let characters= data.results;
 
//       for (let i = 0; i <characters.length; i++){
//         let title= characters[i].title
//          fetch ("http://www.omdbapi.com/?t="+title+"&page=1&apikey=7f7da682&y=2018")
//            .then (data=>data.json())
//            .then (data =>{
//             console.log(data)
//             document.getElementById('root').innerHTML +=  `
//             <div class="container">   
//              <div id="history" class="col s12 m3" >
//               <div class="card">
//                <img class="imagen-lol responsive-img" src="${data.Poster}" >
//                  <div class="card-content">
//                    <span class="card-title activator grey-text text-darken-2"><h6>${data.Title}</h6></span>
//                    <span class="link linfinfo" data-champion='${data.Title}'>Informacion</span>      
//                    </div>
//                   </div>  
//                 </div> 
//               </div>
//             </div>
//             `
//           })
          
//         }
//         const links = document.getElementsByClassName('link');
//         Console.log(links)
//         for (let i = 0; i < links.length; i++) {
//           links[i].addEventListener('click', (event) => {
//             event.preventDefault();
           
           
        
            
//           })
//         };
        
//       })
// }
  
// document.getElementById('search').addEventListener("keydown", (e) => {
//      if(e.keyCode === 13){
       
//      }
// })

// document.getElementById('select-filter').addEventListener("change", () => {
//   let condition = document.getElementById('select-filter').value;
//   if(condition==="2017"){
//     alert("soy 2017")
//   }
// });

// document.getElementById('search').addEventListener("keyup", (e) => {
//     if(e.keyCode === 13){
//     }
//     let tittle= document.getElementById('search').value

//     fetch("http://www.omdbapi.com/?s="+tittle+"&apikey=7f7da682")
//     .then(data=>data.json())
//     .then(data=>{
//       let datajson=Object.values(data.Search);
//       console.log(datajson)
        
//       for (let i = 0; i <datajson.length; i++){ 
//         if(datajson[i].Year==="2018"   ){ 
          
//         document.getElementById('root').innerHTML += `
//         <div class="container">
        
//         <div id="history" class="col s12 m3" >
//         <div class="card">
//           <img class="imagen-lol responsive-img" src="${datajson[i].Poster}" >
//             <div class="card-content">
//               <span class="card-title activator grey-text text-darken-2"><h6>${datajson[i].Title}</h6></span>
//               <span class="link linkHistory" data-champion='${datajson[i].Title}'>Historia</span>
//               </div>
//             </div>  
//           </div> 
          
//         </div>
//       </div>
//         ` 
//       }
//      }
//     })
//   })

 //}

 


  