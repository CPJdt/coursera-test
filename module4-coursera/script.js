(function () {

var names = ["Cris", "John", "Paulo", "Ron", "Josh", "Eron", "Jhapet", "Ronron", "Jimmy", "Jhim"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  } else {
    helloSpeaker(names[i]);
  }
}

})();
