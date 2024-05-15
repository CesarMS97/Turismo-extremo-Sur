$(document).ready(function(){
    $("#enviar").click(function(){
        $.get("https://developers.google.com/maps/documentation/embed/get-started?hl=es-419", function(data){
            $.each(data.categories,function(i,item){
                $("categorias").append("<tr><td>"+item.idCategory+
                "</td><td>"+item.strCategory+
                "</td><td><img src'"+item.strCategoryThumb+
                "'></td><td>"+item.strCategoryDescription+ "</td></tr>")
            })
        });
    });
});
 
