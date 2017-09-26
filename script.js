$(document).ready(function(){
    randomizeVanish();
    $(".ninjabox img").click(function(){
        switch($(this).parent().data("van"))
        {
            case 0:
                $(this).hide();
                console.log("1");
                break;
            case 1:
                $(this).hide("slow");
                console.log("2");
                break;
            case 2:
                $(this).fadeOut();
                console.log("3");
                break;
            case 3:
                $(this).slideUp();
                console.log("4");
                break;
        }
    });
    $("#restore").click(function(){
        $(".ninjabox img").each(function(){
            if($(this).is(":hidden"))
            {
                switch($(this).parent().data("van"))
                {
                    case 0:
                        $(this).show();
                        console.log("1");
                        break;
                    case 1:
                        $(this).show("slow");
                        console.log("2");
                        break;
                    case 2:
                        $(this).fadeIn();
                        console.log("3");
                        break;
                    case 3:
                        $(this).slideDown();
                        console.log("4");
                        break;
                }
            }
        });
        randomizeVanish();
    });
});

function randomizeVanish()
{
    $(".ninjabox").each(function(){
        $(this).data("van", (Math.floor(Math.random() * 4)));
        console.log($(this).data("van"));
    });
}