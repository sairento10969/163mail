$(function () {
      $(".headimg_a").mouseenter(function () {
        $("#headimg_text").css("top", "0")
      });
      $(".headimg_a").mouseleave(function () {
        $("#headimg_text").css("top", "100%")
      });
      $("#list_li1").click(function () {
        $(".list_line").css("left", "0px")
        $(".pane").addClass("hidden")
        $(".pane1").removeClass("hidden")
      });
      $("#list_li2").click(function () {
        $(".list_line").css("left", "120px")
        $(".pane").addClass("hidden")
        $(".pane2").removeClass("hidden")
      });
      $("#list_li3").click(function () {
        $(".list_line").css("left", "250px")
        $(".pane").addClass("hidden")
        $(".pane3").removeClass("hidden")
      });
      $("#list_li4").click(function () {
        $(".list_line").css("left", "375px")
        $(".pane").addClass("hidden")
        $(".pane4").removeClass("hidden")
      });
      $("#list_li5").click(function () {
        $(".list_line").css("left", "500px")
        $(".pane").addClass("hidden")
        $(".pane5").removeClass("hidden")
      });
      var m;
      $(".pane1_rightcheck_down").click(function () {
        m = $(".rightlistbody").position().top;
        // alert(top)
        if (m <= -1800) {
          $(".rightlistbody").css("top", "0px");
        } else {
          $(".rightlistbody").css("top", "-=360px");
        }
      });
      $(".pane1_rightcheck_up").click(function () {
        m = $(".rightlistbody").position().top;
        if (m >= 0) {
          $(".rightlistbody").css("top", "-1800px");
        } else {
          $(".rightlistbody").css("top", "+=360px");
        }
      });

      var i;
      $(".pane1_left_btn").click(function(){
        i = $(this).index()+1;
        $(".pane1_left_btn").removeClass("btn_checked")
        $("#btn_checked"+i).addClass("btn_checked")
        $(".Carousel_item").removeClass("Carousel_item_show")
        $("#Carousel"+i).addClass("Carousel_item_show")
        // alert(i);
      });
      
      })