<%@ page lanugage="java" contentType="text/html; charset=UTF-8"
    pageEncording="UTF-8" %>

<%
    //servletのデータ受け取り
    request.setCharacterEncording("UTF-8");
    String strServlet = (String) request.getAttribute("fromServlet");
%>

<!DOCTYPE html>
<html lang = "ja">
  <head>
    <meta charset = "UTF-8">
    <title>心のノード</title>
  </head>
  <body>
    <h1>心のノート</h1>
    <h3>心のノートにしまっておけよ</h3>
    <div>
      <form action="/ja/main" method="post">
        Postで送信
        <input type="text" name="aaa">
        <br>
        <input type="text" name="bbb">
        <br>
        <input type="submit" value="送信">
      </form>
    <p>

    <p>
      <div>
        <a href="all.html">すべてへ</a>
      </div>

      <div>
    　   <a href="hinata.html">日向関係へ</a>
      </div>

      <div>
    　   <a href="anime.html">アニメ関係へ</a>
      </div>

  </body>
</html>
