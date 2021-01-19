    document.getElementById("article-redirect").onclick = function () {
        location.href = "/article-no-auth.html";
    };
    
    document.getElementById('leitor').onclick = changeColor;   
    
    function changeColor() {
        document.body.style.color = "#C62828";
        return false;
    }   