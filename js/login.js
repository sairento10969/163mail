$(document).ready(function () {
  $(".loginAPP").hover(function () {
    $(".login_mid_block_APPlog").css("display", "block");
    $(".login_mid_block_Normallog").css("display", "none");
    $(".login_mid_block").css("background", "url(./images/login_left.png) 13px 14px no-repeat");
  });
  // 切换动画APP
  $(".loginNORMAL").hover(function () {
    $(".login_mid_block_APPlog").css("display", "none");
    $(".login_mid_block_Normallog").css("display", "block");
    $(".login_mid_block").css("background", "url(./images/login_right.png) 13px 14px no-repeat");
  });
  // 切换动画Normal
  $(".APPlog_inner_Warp").mouseenter(function () {
    $(".Warp_code").animate({
      left: '-66px'
    });
    $(".Warp_example").fadeIn(50);
  });
  //二维码左移动画
  $(".APPlog_inner_Warp").mouseleave(function () {
    $(".Warp_code").animate({
      left: '0px'
    });
    $(".Warp_example").fadeOut(50);
  });
  // 二维码复位
  $("#UserName").focus(function () {
    $(".login_UserName").addClass("outline")
  });
  $("#PassWord").focus(function () {
    $(".login_PassWord").addClass("outline")
  });
  $("#UserName").blur(function () {
    $(".login_UserName").removeClass("outline")
  });
  $("#PassWord").blur(function () {
    $(".login_PassWord").removeClass("outline")
  });
  // 输入框蓝色边框
  $(".arr_down").mouseenter(function () {
    $(".arr_down").css("background", "url(./images/arr-down-2.png) no-repeat")
  });
  $(".arr_down").mouseleave(function () {
    $(".arr_down").css("background", "url(./images/arr-down-1.png) no-repeat")
  });
  // 下拉箭头动画
  $(".change").click(function () {
    $(".FromSelect").css("display", "block")
  });
  // 点击显示版本选择
  $(".FromSelect").mouseleave(function () {
    $(".FromSelect").css("display", "none")
  });
  // 鼠标移出后隐藏
  $(".FromSelect li").click(function () {
    $(".FromSelect").css("display", "none")
  });
  // 选择版本后隐藏
  $(".FromSelect_li1").mouseenter(function () {
    $(".FromSelect_li1").css("background-color", "#eef3f8")
  });
  $(".FromSelect_li2").mouseenter(function () {
    $(".FromSelect_li2").css("background-color", "#eef3f8")
  });
  $(".FromSelect_li3").mouseenter(function () {
    $(".FromSelect_li3").css("background-color", "#eef3f8")
  });
  $(".FromSelect_li1").mouseleave(function () {
    $(".FromSelect_li1").css("background-color", "#ffffff")
  });
  $(".FromSelect_li2").mouseleave(function () {
    $(".FromSelect_li2").css("background-color", "#ffffff")
  });
  $(".FromSelect_li3").mouseleave(function () {
    $(".FromSelect_li3").css("background-color", "#ffffff")
  });
  $(".FromSelect_li1").click(function () {
    $(".Ver_span").text("默认版本")
  });
  $(".FromSelect_li2").click(function () {
    $(".Ver_span").text("测试文字6.0")
  });
  $(".FromSelect_li3").click(function () {
    $(".Ver_span").text("测试文字6.0稳定版")
  });
  var pic = [
    './images/promPic1.jpg',
    './images/promPic2.jpg',
    './images/promPic3.jpg',
    './images/promPic4.jpg',
  ];
  var color = [
    "rgb(247, 245, 246)",
    "rgb(238, 239, 239)",
    "rgb(255, 244, 243)",
    'rgb(246, 246, 248)'
  ];
  var i = 0;
  var len = pic.length;
  console.log(len);
  console.log(i);
  $(".login_mid_themeCtrl_right").click(function () {
    if (i >= len - 1) {
      i = 0;
      $("#adpic").attr("src", pic[i]);
      $(".login_mid").css("background-color", color[i]);
      // console.log(i);	
    } else {
      i++;
      $("#adpic").attr("src", pic[i]);
      $(".login_mid").css("background-color", color[i]);
      // console.log(i);
    };
  });
  $(".login_mid_themeCtrl_left").click(function () {
    if (i <= 0) {
      i = len - 1;
      $("#adpic").attr("src", pic[i]);
      $(".login_mid").css("background-color", color[i]);
      // console.log(i);
    } else {
      i--;
      $("#adpic").attr("src", pic[i]);
      $(".login_mid").css("background-color", color[i]);
      // console.log(i);
    };
  });
});