
let environmentTitle = "Endless Street";

let environmentElements = ["an unmoving sun sits over head, but it really isn't too warm out", "the chipped pavement makes the whole place look like plastic", "the houses and apartments all have (mostly) fake doors", "some windows have lights, but they go out quickly when you notice"];

let mainEntity = {
    name: "lil' guy",
    type: "robotic",
    mood: "Scared",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let counter = 0
let subcounter = 0
$("#surroundings").click(function(){
    counter = counter + 1;
    subcounter = subcounter + 1;
    if (subcounter > 4) subcounter = subcounter - 4;

    console.log(counter);
    console.log(subcounter-1);

    $("#surroundings").html("you've looked around " + counter + " time(s). You may have missed something.");
    $("#top h3").html(environmentElements[subcounter-1]);

    console.log(environmentElements[subcounter-1])
});

$("#feelings").click(function(){
    $("#top h3").html("Lil guy: " + mainEntity.mood + ".");

    console.log(mainEntity.mood)
});