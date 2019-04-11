<script>
  var picSrc = new Array();
  var picJpg = ".jpg";

  for (var i = 1; i < 15; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/annkw" + num + picJpg;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 2; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/book" + num + picJpg;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 10; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/hinata" + num + picJpg;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 4; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/keyaki" + num + picJpg;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 2; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/non" + num + picJpg;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 4; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/other" + num + picJpg;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 2; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "images/travel" + num + picJpg;
    picSrc.add(filePass);
  }



  slideTimer();

  function slideTimer(){

    var cnt = 0
    if(cnt == picSrc.length){
      cnt = 0 ;
    }else{
      cnt ++ ;
    }

    document.getElementByID("pic").src = picSrc[cnt];
    setTimeout("slideTimer()", 1000);

  }

</script>
