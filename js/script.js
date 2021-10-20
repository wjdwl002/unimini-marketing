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

  /*movingLine
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
*/

/*shareLink*/
var snackbar = document.getElementById("alertLinkCopied")
  $(document).ready(function(){
    var clipboard = new Clipboard('.shareLinkBtn');
    snackbar.innerHTML="클립보드에 복사되었습니다."
    clipboard.on('success',function(e){
      console.log("copy success");
      snackbar.classList.replace("alertInactive","alertActive");
      setTimeout(function(){
        snackbar.classList.replace("alertActive","alertInactive");
      },3500)
    })
  })
  console.log("js");


/*spread sheet API*/
snackbar.innerHTML="베타 신청이 완료되었습니다."
var inputs = $('input[type="text"]');
var googleSubmitBtn = $('#bigButtonJoinBeta');

var inputName = $('#name');
var inputNumber = $('#number');
var inputEmail = $('#email');

function isLoading(status){
  if(status){
    $('html, body').addClass('wait');
    googleSubmitBtn.attr('disabled', true).html('신청중...');
  } else {
    $('html, body').removeClass('wait');
    googleSubmitBtn.attr('disabled', false).html('베타 신청하기');
  }
}

function checkInput(){
  var isEmpty = false;
  $.each(inputs, function (index, element) {
    if (element.value === '') {
      snackbar.innerHTML="빈 칸이 있어요."
      snackbar.classList.replace("alertInactive","alertActive");
      setTimeout(function(){
        snackbar.classList.replace("alertActive","alertInactive");
      },3000)
      isEmpty = true;
      return false;
    }
  });
  return isEmpty;
}

$('#bigButtonJoinBeta').click(function () {

  //빈값 체크
  if (checkInput()) { return; }

  // 입력중..
  isLoading(true);

  $.ajax({
    type: "GET",
    url: "https://script.google.com/macros/s/AKfycbzt-fywZAoS_aIxXRKJgdrwH0cSkh1i5TIPr-76YcOKVXUZF8dkfACbvsW_pkNbcNzs/exec",
    data: {
      "이름": inputName.val(),
      "학번": inputNumber.val(),
      "이메일": inputEmail.val()
    },
    success: function (response) {
      isLoading(false);

      snackbar.classList.replace('alertInactive','alertActive');
      setTimeout(function () {
        snackbar.classList.replace('alertActive','alertInactive');
      }, 3500);

      //값 비워주기
      inputName.val('');
      inputNumber.val('');
      inputEmail.val('');
    },
    error: function (request, status, error) {
      isLoading(false);
      console.log("code:" + request.status + "\n" + "error:" + error);
      console.log(request.responseText);
    }
  });
});