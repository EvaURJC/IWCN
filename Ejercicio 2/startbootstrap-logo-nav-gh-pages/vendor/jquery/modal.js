$(document).ready(function () {

    var c = /^[a-zA-Z0-9_\.\/\-]+\@(([a-zA-Z])+\.)+[a-z]+$/;

    $("#boton").button().click(function (){

        if( ($("#nombre").val().length >= 3) && ($("#apellidos").val() != "") && (c.test($("#correo").val())) &&
            ($("#telefono").val().length == 9) && ($("#radios input[name='radio']").is(':checked')) ){
            $("#dialog").dialog("open");
            return false;
        }

        else if( $("#nombre").val().length < 3) {
            $("#nombre").focus().after("<p> Minimo 3 caracteres </p>");
            return false;
        }

        else if( $("#apellidos").val() == "") {
            $("#apellidos").focus().after("<p> Debe estar completo </p>");
            return false;
        }

        else if ($('#telefono').val().length != 9 || isNaN($('#telefono').val())){
            $("#telefono").focus().after("<p> Únicamente debe contener 9 números </p>");
            return false;
        }

        else if( $("#correo").val() == "" || !c.test($("#correo").val()) ) {
            $("#correo").focus().after("<p> Debe ser un email válido </p>");
            return false;
        }

        else if( !$("#radios input[name='radio']").is(':checked')) {
            $("#radios").focus().after("<p> Seleccione una opcion de las disponibles </p>");
            return false;
        }
    });

});

$(":text").each(function(){ 
            $($(this)).val('');
    });


//Hacer que dialog no aparezca en la pantalla y tenga un botón para cerrar
$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Cerrar": function(){
                $(this).dialog("close");
            }
        }
    });
});

//Funcion que devuelve la fecha y la hora
function fechayhora() {
    var tiempo = new Date();
    var dia = tiempo.getDate();
    var mes = tiempo.getMonth()+1;
    var anio = tiempo.getFullYear();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    document.write("El formulario es correcto y se ha enviado a: "+$('#destino').val()+"<br>");
    document.write("Enviado el dia " + dia + "/" + mes + "/" + anio + " a las " + hora + ":" + minuto + ":" + segundo);
}
