
(function() {
    var names = ["Prashant", "Sanjeev", "Kajal", "Lavanya", "Priyanshu", "Jonny", "Kia", "James", "Apoorva", "Johnathan"];
    for (var i = 0; i < names.length; i++) 
    {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') 
        {
            byeSpeaker.speak(names[i]);
        } 
        else 
        {
            helloSpeaker.speak(names[i]);
        }
    }
})();
