{
  $.ajax({
    url: "./js/mail.json",
    type: 'get',
    dataType: 'json',
    timeout: 1000,
    success: function (data) {
      var i = 0;
      var q = 0;
      var n = 0;
      var m = 9;
      var d = data.pagesize - 1;
      $(document).ready(function () {
        page();
      });
      $("#check1").on("click", function () {
        q = 0;
        m = q + 9;
        page();
      });
      $("#check2").on("click", function () {
        q = 10;
        m = q + 9;
        page();
      });
      $("#check3").on("click", function () {
        q = 20;
        m = q + 9;
        page();
      });
      $("#check4").on("click", function () {
        q = 30;
        m = q + 9;

        page();
      });
      $("#checkleft").on("click", function () {
        if (q > 0) {
          q = q - 10;
          m = q + 9;
          page();
        }
      });
      $("#checkright").on("click", function () {
        if (q < 30) {
          q = q + 10;
          m = q + 9;
          page();
        }
      });
      function page() {
        
        var from_text = new Array();
        var title_text = new Array();
        var date_text = new Array();
        $(".from").empty();
        $(".title").empty();
        $(".date").empty();
        for (i = q, n = 0; i <= m && i <= d; i++) {
          from_text[i] = "<span class='from_text'>" + data.list[i].from + "</span>";
          title_text[i] = "<span class='title_text'>" + data.list[i].title + "</span>";
          date_text[i] = "<span class='date_text'>" + data.list[i].date + "</span>";
          n += 1;
          $("#from" + n).append(from_text[i]);
          $("#title" + n).append(title_text[i]);
          $("#date" + n).append(date_text[i]);
        };
        if(i < m){
          for(var z = n+1;z <= 10;z++){
            $("#mail" + z).addClass("hidden");
          }
        }else{
          $(".mailtr").removeClass("hidden")
        }
      }
    } 
  });
}
    $(function(){
      var i=1;

      $("#top_check").click(function(){
        if($("#top_check").prop("checked")){
          $(".check_icon").prop("checked",true);
        }else{
          $(".check_icon").prop("checked",false);
        }
        });

      $(".tool_btn_text").click(function(){
        
      });
      
      $(".title").click(function(){
        $("#iframe_main",window.parent.document).attr("src","../mail/mail.html")
      });



      $(".main_ad_btn2").click(function(){
        $(".main_ad_outer").hide()
      }); 

      $(".delete").click(function(){
        if($(".check_icon").prop("checked")){
          $(this).piarent().parent().parent().parent().hide()
        }
      });
    }
  )
  
