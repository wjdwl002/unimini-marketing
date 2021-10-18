/*고정 아이콘 스크롤 이벤트*/
/*
var lastScrollTop = 0;
var delta = 5;
var fixBox = document.getElementById("smallButtonJoinBeta");
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
    //Scroll down
    fixBox.classList.remove("show")
    }else{
    if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
    //Scroll up
    fixBox.classList.add("show")
        }
    }
    lastScrollTop = nowScrollTop;
}

  /*movingLine*/
  $(window).on("load resize scroll", function() {
    $(".movingLine.top").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop + 120;
        $(this)
          .find(".line")
          .css({ left: leftPosition });
    });
  });
  $(window).on("load resize scroll", function() {
    $(".movingLine.bottom").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var rightPosition = windowTop - elementTop + 100;
        $(this)
          .find(".line")
          .css({ left: rightPosition });
    });
  });


  /*shareLink*/
  $(document).ready(function(){
    var clipboard = new Clipboard('.shareLinkBtn');
    clipboard.on('success',function(e){
      console.log("copy success");
      document.getElementById("alertLinkCopied").classList.replace("alertInactive","alertActive");
      setTimeout(function(){
        document.getElementById("alertLinkCopied").classList.replace("alertActive","alertInactive");
      },3500)
    })
  })
  console.log("js");
  
