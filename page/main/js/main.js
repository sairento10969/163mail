$(document).ready(function () {
  $("#box_accept").click(function(){
    var a = "<li class='tablist_li' id='accept_li'><div class='tablist_text'>收件箱</div><a href='javascript:void(0)' class='tablist_close' id='accept_close'><b class='close_icon'></b></a></li>"
    $(".tablist").append(a);
  });
  $("#box_flag").click(function(){
    var a = "<li class='tablist_li' id='flag_li'><div class='tablist_text'>红旗邮件</div><a href='javascript:void(0)' class='tablist_close' id='flag_close'><b class='close_icon'></b></a></li>"
    $(".tablist").append(a);
  });
  $("#box_wait").click(function(){
    var a = "<li class='tablist_li' id='wait_li'><div class='tablist_text'>待办邮件</div><a href='javascript:void(0)' class='tablist_close' id='wait_close'><b class='close_icon'></b></a></li>"
    $(".tablist").append(a);
  });
  $(".tablist").on("click",".tablist_li",function(){
    $(this).remove();
  })
})