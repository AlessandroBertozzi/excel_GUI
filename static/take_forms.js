
$(document).on ("click", "button[name='form-submit']", function () {
    const x = document.getElementsByClassName("take");

    const list_inputs = {
        Cliente: x[0].value,
        Nome_compilatore: x[1].value,
        Cognome_compilatore: x[2].value,
        Orario: x[3].value,
        Data: x[4].value,
        Tipo_operazione: x[5].value,
        Descrizione_post: x[6].value,
        Testo_post: x[7].value,
        Hashtag: x[8].value

    }

    $(".right-box").append("<ul>" +
        "<li><b>Cliente</b>: "+ list_inputs["Cliente"] +"</li>" +
        "<li><b>Nome_compilatore</b>: "+ list_inputs["Nome_compilatore"] +"</li>" +
        "<li><b>Cognome_compilatore</b>: "+ list_inputs["Cognome_compilatore"] +"</li>" +
        "<li><b>Data</b>: "+ list_inputs["Data"] +"</li>" +
        "<li><b>Tipo_operazione</b>: "+ list_inputs["Tipo_operazione"] +"</li>" +
        "<li><b>Descrizione_post</b>: "+ list_inputs["Descrizione_post"] +"</li>" +
        "<li><b>Testo_post</b>: "+ list_inputs["Testo_post"] +"</li>" +
        "<li><b>Hashtag</b>: "+ list_inputs["Hashtag"] +"</li>" +
        "</ul>");



      $.ajax({
          type: "POST",
          url: "/process_qtc",
          data: JSON.stringify(list_inputs),
          contentType: "application/json",
          dataType: 'json',
          success: function(result) {


    }})})