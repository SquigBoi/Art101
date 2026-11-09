// Button program
function paintpage (color) {
$("body").css( "background-color", color );
};

paintpage("teal");

let colors=["green","blue","yellow","orange","purple","red","pink"];

let counter=0;
let subcounter=0;
$("#freaky_button").click(function(){
    // what happens when the button is clicked?
    counter = counter + 1;
    subcounter = subcounter + 1;
    if (subcounter > 7) subcounter = subcounter - 7;

    console.log(counter);
    console.log(subcounter-1);

    $("#freaky_button").html("I've been touched " + counter + " time(s) and the color is " + colors[subcounter - 1]);

   paintpage(colors[subcounter-1]);
});

$("#green").click(function(){

    console.log("green was clicked")

    paintpage("green");

});

$("#orange").click(function(){

    console.log("orange was clicked")

    paintpage("orange");

});

$("#pink").click(function(){

    console.log("pink was clicked")

    paintpage("pink");

});
