window.onload = function () {

    var prompt = document.getElementById('prompt');
    var result = document.getElementById('result');

    var dict = {
        "aller": "to go",
        "avoir": "to have",
        "être": "to be",
        "faire": "to make",
        "voir": "to see",
        "dire": "to say",
        "falloir": "to be necessary",
        "savoir": "to know",
    };

    var setTestWord = function () {
        var keys = Object.keys(dict);
        prompt.textContent = keys[Math.trunc(keys.length * Math.random())];
    };

    setTestWord();

    var openPhone = function () {
    annyang.abort();
    // implement, it should wait so the person sees the english word and then it fades and then we go to the new word
}

    var ifWordDisplayedAndSaid = function (spokenWord) {
        if (prompt.textContent.localeCompare(spokenWord) == 0) {
            prompt.textContent = "";
            result.textContent = dict[spokenWord];
            openPhone();
        } else {
            setTestWord();
        }
    };

    
    if (annyang) {
        // Let's define a command.
        var commands = {
            '*word': ifWordDisplayedAndSaid,
        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        annyang.setLanguage("fr-FR");
        
        annyang.start();
    }
};


