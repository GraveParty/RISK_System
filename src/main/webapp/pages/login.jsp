<%--
  Created by IntelliJ IDEA.
  User: 传旺
  Date: 2016/5/23
  Time: 16:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录</title>
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
</head>
<body>
<div class="container">
    <section id="content">
        <form action="/login" method="post">
            <h1>登录</h1>
            <div>
                <input type="text" name="username" placeholder="Username" required="required" id="username" />
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" required="required" id="password" />
            </div>
            <div class="login">
                <input type="submit" value="登录" />
            </div>
        </form><!-- form -->
    </section><!-- content -->
</div><!-- container -->
</body>
</html>
