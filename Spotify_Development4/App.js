console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('./Music/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Salem-e-Ishq 1", filePath:"./Music/1.mp3",coverPath:"./Image/1.jpg"},
    {songName:"Salem-e-Ishq 2", filePath:"Music/2.mp3",coverPath:"Image/2.jpg"},
    {songName:"Salem-e-Ishq 3", filePath:"Music/3.mp3",coverPath:"Image/3.jpg"},
    {songName:"Salem-e-Ishq 4", filePath:"Music/4.mp3",coverPath:"Image/4.jpg"},
    {songName:"Salem-e-Ishq 5", filePath:"Music/5.mp3",coverPath:"Image/5.jpg"},
    {songName:"Salem-e-Ishq 6", filePath:"Music/6.mp3",coverPath:"Image/6.jpg"},
    {songName:"Salem-e-Ishq 7", filePath:"Music/7.mp3",coverPath:"Image/7.jpg"},
    {songName:"Salem-e-Ishq 8", filePath:"Music/8.mp3",coverPath:"Image/8.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=Music[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate')
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{  
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');    
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    masterSongNmae.innerText=Music[songIndex].songName;
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
     audioElement.src='Music/${index+1}.mp3';
     masterSongNmae.innerText=Music[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-pause-circle');
     masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }else{
    songIndex +=1;
    }
    audioElement.src='Music/${index+1}.mp3';
    masterSongName.innerText=Music[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
    songIndex -=1;
    }
    audioElement.src='Music/${index+1}.mp3';
     masterSongName.innerText=Music[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})