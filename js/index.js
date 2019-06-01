var ferreterias = ['Kywi','Pyca','FV'];
var cosas = {
    'clavos':{
        precio:0.15,
        id:'clv'
    },'martillo':{
        precio:7,
        id:'mrt'
    },'lija':{
        precio:0.50,
        id:'lij'
    },'sierra':{
        precio: 15,
        id:'sie'
    },'tornillo':{
        precio:0.10,
        id:'tor'
    }
}
var cosas = ['clavos','martillo','lija','serrucho','sierra','tornillo','pernos','destornillador']
var cantidad ={}
$('#irPageDos').hide();
$('#buscarFerreteria').on('click',function(e){
    var nombreFerreteria = $('#inputFerreteria').val();
    for(a in ferreterias){
        if(ferreterias[a]==nombreFerreteria){
            $('#botonPageDos').text(ferreterias[a]);
            $('#irPageDos').show();
        }
    }
    $('#nombreFerreteria').text(nombreFerreteria);
});
function factura(){
    $('#descripcion').append(
        $('<tr>')
    );

    console.log(cantidad);
}
$('#irPageTres').hide();
$('#buscarElementos').on('click',function(e){
    var nombreElemento = $('#inputElementos').val();
    for(e in cosas){
        if(cosas[e] == nombreElemento){
            cantidad[nombreElemento]=0
            $('#elementosBuscados').append(
                $('<p>',{
                    text:nombreElemento
                }).append(
                    $('<div style="float=right">').append(
                    $('<input type="button" class="" id="sumarElemento'+nombreElemento+'" value="+">')
                ).append(
                    $('<span>',{
                        id: nombreElemento,
                    }) 
                ) 
            )
            )
            $('#sumarElemento'+nombreElemento).on('click',function(e){
                cantidad[nombreElemento]+=1
                $('#'+nombreElemento).text(cantidad[nombreElemento])
                $('#irPageTres').show();
            })
        }
    }
})
$('#irPageTres').on('click',function(e){
    var retServiceName = 'Gabriel';
    var service_table = $('<table data-role="table"  data-mode="rowflow" class="ui-responsive table-stroke" id="service"></table>');
    var service_tr_th = $("<thead><tr><th data-priority='persist'>id</th><th  data-priority='1'>Descripción</th></tr></thead>");
    var service_tbody = $('<tbody></tbody>');
    var service_tr = $('<tr></tr>');
    var service_name_td = $('<td>' + retServiceName + '</td><td>'+'hola'+'</td>');
    service_name_td.appendTo(service_tr);
    service_tr_th.appendTo(service_table);
    service_tr.appendTo(service_tbody);
    service_tbody.appendTo(service_table);
    service_table.appendTo($("#categories"));
    $('#tabla').append(service_table)
})

    


