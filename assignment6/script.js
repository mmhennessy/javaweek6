//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    authorinfo;

//Parts of the code on this page was originally created by Ashby Utting, Emily Carey and Liz Burton and modified by Molly Hennessy

var i = 0;
var oldestYear = speechesArray[0].year;
var newestYear = speechesArray[0].year;

for(i = 0; i < speechesArray.length; i++) {
  if(speechesArray[i].yearIsBCE);
  speechesArray[i] = -speechesArray[i].year;
}

  var loop = function() {
  while(i < speechesArray.length) {
    console.log("This speech is written by " + speechesArray[i].author);
    i++;
  }};

  loop();



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

for (i =0; i < speechesArray.length; i++); {
  if(authorinfo === speechesArray[i].author) {
    console.log(speechesArray[i].author + "was" speechesArray[i].authorAge + "during this speech");
  }};
}

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.')
  }else{
    console.log('This speech took place during the common era.')
  };

if(speechesArray[i].year === oldestYear){
console.log("This is the oldest speech on the page")
}else{ (speechesArray[i].year ===newestYear);
console.log("This is the most recent speech on the page")
}
};

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.')
  }else{
    console.log('This speech took place during the common era.')
  };

if(speechesArray[i].year === oldestYear){
console.log("This is the oldest speech on the page")
}else{ (speechesArray[i].year ===newestYear);
console.log("This is the most recent speech on the page")
}
};

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.')
  }else{
    console.log('This speech took place during the common era.')
  };

if(speechesArray[i].year === oldestYear){
console.log("This is the oldest speech on the page")
}else{ (speechesArray[i].year ===newestYear);
console.log("This is the most recent speech on the page")
}
};



