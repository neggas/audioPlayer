import {listes} from "./playlist.js";
const {log} = console;

const playlistDiv = document.querySelector("#playlist");

//@INSERT MUSICS
((playlistDiv,listes)=>{
   
    listes.forEach((m)=>{

            const songDiv = `
            <div class='song'>
                ${m.substring(0,m.indexOf('.'))}
            </div>
        `
        
        playlistDiv.innerHTML += songDiv;
    })
    
} )(playlistDiv,listes)



//@EVENT ON SELECTED MUSIC(ADD CLASS SELECTED)
const songs = document.querySelectorAll(".song");
function addClassOnSelected(songs){
   
    songs.forEach((s)=>{
        s.addEventListener('click',()=>{
           if(!s.classList.contains("selected")){

                if(document.querySelector(".selected")){
                    document.querySelector(".selected").classList.remove('selected');
                    s.classList.add('selected');
                }

                s.classList.add('selected');

           }
           
        });
    })
    
}
addClassOnSelected(songs);

//@EVENT ON SELECTED MUSIC(SELECT MUSIQUE FOR PLAYING)




function playSong(){
    
    songs.forEach((s)=>{
        s.addEventListener('click',()=>{
        
            const song = s.innerText+".mp3";
            const sound = new Howl({
                src: [song]
              });
              
            sound.once('load', function(){
                const soundId = sound.play()
                
            });

        });
    })
}

playSong()
