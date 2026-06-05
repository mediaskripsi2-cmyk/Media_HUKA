function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6phQjabfrsv":
        Script1();
        break;
      case "6DNLUFBPjx3":
        Script2();
        break;
      case "5wzPQNAgHYe":
        Script3();
        break;
      case "5uloRpJRCuQ":
        Script4();
        break;
      case "6CjpzGBQYoD":
        Script5();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.load();
audio.play();
audio.volume=0.35;

}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.play();
audio.volume=0.35;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.pause();
audio.volume=0.35;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.pause();
audio.volume=0.35;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.play();
audio.volume=0.35;
}

