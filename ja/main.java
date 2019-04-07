package main;


import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.servlet.ttp.HttpSession;

@WebServlet("/main")
public  class main extends HttpServlet{
    private static final long serialVersionUID = 1L;

  //doGet
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{

  }

  //doPost
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{

    //呼び出し元.jspからデータを受け取り
    request.setCharacterEncording("UTF-8");

    //データ受け取り
    request.setAttribute("formServlet", jsp + "+サーブレットで追加");

    //.jspにページ遷移
    RequestDispatcher dispatch = request.getRequestDispatcher("hinata.jsp");
    dispatch.forward(request, response);
  }

}
