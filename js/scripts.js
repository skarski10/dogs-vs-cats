$(document).ready(function(){
  $("button#cat").click(function(){
    $("ul#meow").prepend("<li>Feed me bitch</li>");
    $("li").click(function(){
      $(this).remove();
    });
  });

  $("button#dog").click(function(){
    $("ul#bark").prepend("<li>Thank you master</li>");
    $("li").click(function(){
      $(this).remove();
    });
  });
});
