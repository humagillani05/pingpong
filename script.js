
    var num = function(add) {
        if ((add % 3 === 0) || (add % 5 === 0)) {
          return true
        } else {
          return false;
        };
      };

$(document).ready(function(){
  $("form#blanks").submit(function(event){
    var add=parseInt($("input#enter").val());
  

    for (i = 1; i <= add; i++)
      if (i % 3 === 0 && i % 5 === 0) {

        $("ul").append("<li>pingpong</li>");

      }
      else  if (i % 3 === 0 ) {

                $("#ul").append("<li>ping</li>");

              }
              else if (i % 5 === 0) {

                      $("ul").append("<li>pong</li>");

                    }
                    else
                     {

                      $("ul").append("<li>" + i + "</li>");
                    }

  event.preventDefault();
  });
  });
