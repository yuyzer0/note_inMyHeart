<script type="text/javascript">
  var picSrc = new Array();

  for (var i = 1; i < 15; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "annkw" + num;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 2; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "book" + num;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 10; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "hinata" + num;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 4; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "keyaki" + num;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 2; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "non" + num;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 4; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "other" + num;
    picSrc.add(filePass);
  }

  for (var i = 1; i < 2; i++) {
    var num = (000 + i).slice( -4 );
    var filePass = "travel" + num;
    picSrc.add(filePass);
  }



  slideTimer ();

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
