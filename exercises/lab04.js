let count = 0;
let buttonCreature = {
    name: "The Future Teller",
    species: "Enigma",
    favoriteFood: "Paint Fumes",
    moods: ["Ponderous", "Hopeful", "Concerned", "Aprehensive", "Forgiving", "Giving"]
};

$("#futurereader").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    let message = "My current mood is " + currentMood;
    let messageintro = "I am the " + buttonCreature.name + ". I am an " + buttonCreature.species + ". Feed me " + buttonCreature.favoriteFood + " and I will let you know how I feel about your future."

    $("#outputintro").html(messageintro);
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
