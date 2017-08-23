function ligar_pesq_select(xx, text){
    xcv = $(xx+"_chosen").text();
    if(xcv !== ""){
        $(xx).trigger("chosen:updated");
    }
    else{       
        $(xx).chosen({
            disable_search_threshold: 10,
            no_results_text: text,
            width: "100%"
        });
    }
}
function btn_modal(idd){
	/*ADD CATEGORIA*/
	if(idd==1){
		$("#modal_01").modal("show");
		ligar_pesq_select("#listoptionpagto","CÓDIGO NÃO LOCALIZADO");
	}
	/*ADD PRODUTO*/
	if(idd==2){
		$("#modal_02").modal("show");
	}
}
function direcione(ij){
	if(ij==1){
		location.href="tela_1.html";
		return false;
	}
}
function open_empresa(idf){	
	localStorage.setItem("ide", idf);
	location.href="tela_2.html";
}
function menuselecioneemprecardapio(id1){
	$("#menu_cardapio_1").removeClass("ativo");
	$("#menu_cardapio_2").removeClass("ativo");
	$("#menu_cardapio_3").removeClass("ativo");
	$("#menu_cardapio_"+id1).addClass("ativo");
}
function list_empresas(){
	el2="#list_empresas";
    $(el2).html("BUSCANDO LISTA");
	$.ajax({            
        url: xurlq,
         data: {
            y: 62,
            u: "",
            s: "5"
        },
        dataType: "json",
        type: "POST",
        success: function(j) {  
			vrl="";
            for (var i = 0; i < j.length; i++) {       
				vrl+="<div class='contener_list_empresas' onClick='open_empresa("+j[i].id_banco+");'><div class='col-xs-3'><div class='img_empresas_list_p'><img class='vertical_alinha'  src='https://d1jgln4w9al398.cloudfront.net/imagens/ce/logosgde/logo2_atlantipsep.png'></div></div><div class='col-xs-9'><h4>"+j[i].nome+"</h4><div class='pontua_empresa_list'><p>"+j[i].media_potuacao+"</p> "+j[i].numero_avalicoes+" avaliações</div></div><div class='brack'></div></div>";				        
            }  
			$(el2).html(vrl);
        }
    });
}
function list_prodds(){
	el5="#list_prods";
    $(el5).html("BUSCANDO LISTA");
	$.ajax({            
        url: xurlq,
         data: {
            y: y,
            u: "",
            s: "2"
        },
        dataType: "json",
        type: "POST",
        success: function(j) {  
			vrl="";
            for (var i = 0; i < j.length; i++) {       
				vrl+="<div class='contener_list_empresas' onClick=''><div class='col-xs-3'><div class='img_empresas_list_p'><img class='vertical_alinha'  src='"+j[i].img_logo+"'></div></div><div class='col-xs-9'><h4 style='text-align: left;'>"+j[i].nome+"</h4><div class='pontua_empresa_list' style='display: table;;'><p>"+j[i].desc_cat+"</p> "+j[i].valor+"</div></div><div class='brack'></div></div>";				        
            }  
			$(el5).html(vrl);
        }
    });
}