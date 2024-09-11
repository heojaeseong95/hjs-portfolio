jQuery(document).ready(function () {
    // image fadeIn-Out
    $(".img-slide a:gt(0)").hide();
    setInterval(function () {
     $(".img-slide a:first-child")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".img-slide");
    }, 3000);
   
    // tabmenu
    $(".tabmenu > li > a").click(function (e) {
     e.preventDefault(); // 기본동작방지
     $(this).parent().addClass("active").siblings().removeClass("active");
    });
   
    // modal
    $(".notice li:first-child").click(function (e) {
     e.preventDefault(); // 기본동작방지
     $("#modal").addClass("active");
    });
    $(".modal-btn").click(function () {
     $("#modal").removeClass("active");
    });
   });
   