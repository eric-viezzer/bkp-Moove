function calc(){
	var diesel = 3.551;
	var num_Linha = document.getElementById('numLinha').value;
	var km_Linha = document.getElementById('kmLinha').value;
	var km_Vazio = document.getElementById('kmVazio').value;
	var viagemDia = document.getElementById('viagemDia').value;
	var dieselDia = 0;
	var dieselMes = 0;
	var gasto = 0;

	//calculo
	dieselDia = (km_Linha * diesel) * viagemDia;
	dieselMes = dieselDia * 30;

	gasto = ((km_Vazio * diesel) * viagemDia) * 30;

    bLinha.innerHTML = num_Linha.toFixed(2);
    span_res1.innerHTML = dieselDia.toFixed(2);
    span_res2.innerHTML = dieselMes.toFixed(2);
    span_res3.innerHTML = gasto.toFixed(2);
}