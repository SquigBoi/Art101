let john_msg=["Hey!", "How you liking this webpage we're in?", "What do you think that is?", "what do you think it should be then?"];
let jane_msg=["Hi!", "Not sure. It's fine, but it's missing something.", "I'm just not digging the background color."];

let john_count = 0
let jane_count = 0

$("#character-a").click( function(){
    if (john_count == jane_count){
        if (john_count < 4){
            john_count = john_count + 1;
            $("#chat").append("<p> John: " + john_msg[john_count - 1] + "</p>");
            $("#turn-message").html("Click Jane to continue!");
            console.log ("john count = " + john_count);
            console.log (john_msg[john_count]); 
        };
    };
});

$("#character-b").click( function(){
    if (jane_count < john_count){
        if (jane_count == 3){
            let answer = prompt("Enter a color avaliable in CSS");
            $("#chat").append("<p> Jane: I think it should be " + answer + "!");
            $("body").css( "background-color", answer );
            $("#turn-message").html("Hope you're happy with your choice.");
        }
        else if (jane_count < 3){
            jane_count = jane_count + 1
            $("#chat").append("<p> Jane: " + jane_msg[jane_count - 1] + "</p>");
             $("#turn-message").html("Click John to continue!");
            console.log ("jane count = " + jane_count);
            console.log (jane_msg[jane_count]);
        };
    };
});