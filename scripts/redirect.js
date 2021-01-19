    document.getElementById("article-redirect").onclick = function () {
        location.href = "/article-1.html";
    };
    
    document.getElementById('leitor').onclick = changeColor;   
    
    function changeColor() {
        document.body.style.color = "#C62828";
        return false;
    }   