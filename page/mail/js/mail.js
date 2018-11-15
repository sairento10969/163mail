$(function () {
  $("#re").focus(function(){
    $(".mailmain_re").css("height","219px");
    $("#re").css("height","90px");
    $(".re_btn").css("display","block")
  });
  $(".remove_btn").click(function(){
    $(".mailmain_re").css("height","auto");
    $("#re").css("height","10px");
    $(".re_btn").css("display","none")
  });

  $(".send_btn").mouseenter(function(){
    $(".send_btn").css("box-shadow","1px 1px 5px #333")
  });
  $(".send_btn").mouseleave(function(){
    $(".send_btn").css("box-shadow","none")
  });
  $(".remove_btn").mouseenter(function(){
    $(".remove_btn").css("box-shadow","1px 1px 5px #333")
  });
  $(".remove_btn").mouseleave(function(){
    $(".remove_btn").css("box-shadow","none")
  });
  
  $("#ad1_close").click(function(){
    $(".mailmain_ad1").hide();
  });

  $("#hide").click(function(){
    $("#hide").hide();
    $("#show").show();
    $("#ulall").hide();
    $("#ulabstract").show();
  });
  $("#show").click(function(){
    $("#hide").show();
    $("#show").hide();
    $("#ulall").show();
    $("#ulabstract").hide();
  });

  $("#tool_btn1").click(function(){
    $("#iframe_main",window.parent.document).attr("src","../accept/accept.html")
  });
}
)