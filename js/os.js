function generate() {
	$('#resp_name').val($('#resp_name_fm').val());
	if ($('#sector_name_fm').val() == 'Outro'){
		$('#sector_name').val('');
		$('#sector_name').addClass('sign');
	}else{
		$('#sector_name').val($('#sector_name_fm').val());
		$('#sector_name').removeClass('sign');
	}

	$('#equip_type').val($('#equip_type_fm').val());
	$('#equip_model').val($('#equip_model_fm').val());
	$('#equip_id').val($('#equip_id_fm').val());
	if ($('#equip_type_fm').val() == 'Desktop' || $('#equip_type_fm').val() == 'Notebook'){
		$('#print_pw').removeClass('d-print-none');
		$('#equip_password').val($('#equip_password_fm').val());
	}else{
		$('#print_pw').addClass('d-print-none');
	}
	$('#equip_problem').text($('#equip_problem_fm').val());

	$('#tech_name_in').val($('#tech_name_in_fm').val());
	$('#in_date').val($('#in_date_fm').val());
	$('#in_CI').val($('#in_CI_fm').val());

	var checklist = [];
	var out = "";
	if ($('#equip_hd').is(':checked')){
		out = "HD";
		if($('#hd_desc').val().length != 0){
			out = out + " (" + $('#hd_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_proc').is(':checked')){
		out = "Processador";
		if($('#proc_desc').val().length != 0){
			out = out + " (" + $('#proc_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_mem').is(':checked')){
		out = "Memória";
		if($('#mem_desc').val().length != 0){
			out = out + " (" + $('#mem_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_optic').is(':checked')){
		out = "Unidade ótica";
		if($('#optic_desc').val().length != 0){
			out = out + " (" + $('#optic_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_mb').is(':checked')){
		out = "Placa-mãe";
		if($('#mb_desc').val().length != 0){
			out = out + " (" + $('#mb_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_psu').is(':checked')){
		out = "Fonte";
		if($('#psu_desc').val().length != 0){
			out = out + " (" + $('#psu_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_graphic').is(':checked')){
		out = "Placa de vídeo";
		if($('#graphic_desc').val().length != 0){
			out = out + " (" + $('#graphic_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}
	if ($('#equip_cables').is(':checked')){
		out = "Cabo(s)";
		if($('#cables_desc').val().length != 0){
			out = out + " (" + $('#cables_desc').val() + ")";
		}
	}
	if (out.length != 0){
		checklist.push(out);
		out = "";
	}

	$('#equip_checklist').val(checklist.join(', '));

	var dt = $('#in_date_fm').val().toString().split('-').join('');
	var id = $('#equip_id_fm').val();

	document.title = dt + '_' + id;

	window.print();
}

function update_checklist() {
	var equip = $('#equip_type_fm').val();
	switch(equip){
		case 'Desktop'://Desktop
		$('div#checklist1').removeClass('d-none');
		$('div#checklist2').removeClass('d-none');
		$('div#checklist3').removeClass('d-none');
		$('div#cables_info').removeClass('d-none');
		$('div#password').removeClass('d-none');
		break;
		case 'Notebook':
		$('div#checklist1').addClass('d-none');
		$('div#checklist2').addClass('d-none');
		$('div#checklist3').addClass('d-none');
		$('div#cables_info').removeClass('d-none');
		$('div#password').removeClass('d-none');
		break;
		default:
		$('div#checklist1').addClass('d-none');
		$('div#checklist2').addClass('d-none');
		$('div#checklist3').addClass('d-none');
		$('div#cables_info').removeClass('d-none');
		$('div#password').addClass('d-none');
		break;
	}
	$('input#equip_hd').prop( "checked", false );
	$('input#equip_mb').prop( "checked", false );
	$('input#equip_optic').prop( "checked", false );
	$('input#equip_mb').prop( "checked", false );
	$('input#equip_psu').prop( "checked", false );
	$('input#equip_graphic').prop( "checked", false );
	$('input#equip_cables').prop( "checked", false );

	$('input#hd_desc').prop( "disabled", true );
	$('input#mb_desc').prop( "disabled", true );
	$('input#optic_desc').prop( "disabled", true );
	$('input#mb_desc').prop( "disabled", true );
	$('input#psu_desc').prop( "disabled", true );
	$('input#graphic_desc').prop( "disabled", true );
	$('input#cables_desc').prop( "disabled", true );
}

function generate_id(){
	var date = new Date();
	var pt1 = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0].split('-');
	var k = 0;
	for (var i = 0; i < pt1.length; i++){
		k = k + parseInt(pt1[i]);
	}
	var letters = String.fromCharCode(65 + ((k/26)/26)%26) + String.fromCharCode(65 + (k/26)%26) + String.fromCharCode(65 + k%26);
	var pt2 = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[1].split(':').join('');
	var numbers = pt2.substring(0,pt2.indexOf('.'))

	var s = String.fromCharCode((parseInt(pt2.substring(pt2.indexOf('.') + 1,pt2.length - 1)))%26 + 65);

	var id = letters + numbers + s;
	return id;
}

function update_id(checkbox){
	document.getElementById('equip_id_fm').disabled = checkbox.checked;
	if(checkbox.checked == true){
		$('#equip_id_fm').val(generate_id());
	}else{
		$('#equip_id_fm').val("");
	}
}
function clear_forms() {
	$('#equip_type_fm').val('Desktop').change();
	$('#resp').trigger('reset');
	$('#equip').trigger('reset');
	$('#entry').trigger('reset');
	$('#hd_desc, #proc_desc, #mem_desc, #optic_desc, #mb_desc, #graphic_desc, #psu_desc, #cables_desc').prop('disabled', true);
	$('#equip_id_fm').prop('disabled', false);
	$('#size').text('0/500');
	$('#size').removeClass('alert-warning alert-danger').addClass('alert-primary');
}