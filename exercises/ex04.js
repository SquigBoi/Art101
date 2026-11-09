// Button program

let colors=["green","blue","yellow","orange","purple","red","pink"];

let counter=0;
let subcounter=0;
$("#freaky_button").click(function(){
    // what happens when the button is clicked?
    counter = counter + 1;
    subcounter = subcounter + 1;
    if (subcounter == 8){
         subcounter = subcounter - 7;
    };

    console.log(counter);
    console.log(subcounter-1);

    $("#freaky_button").html("I've been touched " + counter + " time(s) and the color is " + colors[subcounter - 1]);

    $("body").css("background-color", colors[subcounter-1]);
});


