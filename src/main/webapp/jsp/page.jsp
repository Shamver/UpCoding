<%@ page language="java" contentType="text/html; charset=utf-8"
%>
<!doctype html>
<html>
<head>
    <title>UpCoding</title>
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <style>
        @import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);
        body {
            font-family: 'Roboto',sans-serif;
        }
    </style>
    <title>${pageName}</title>
    <meta name="viewport" content="width=device-width, user-scalable=no">
</head>
 
<body>
    <div id="root"></div>
    <script src="/js/react/${pageName}.bundle.js"></script>
</body>
</html>