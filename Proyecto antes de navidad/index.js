
function loadDoc() {
    $.get("http://hp-api.herokuapp.com/api/characters",imprimir)
  }

window.onload = ()=> {
	loadDoc()
	$('#all').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters",imprimir)

	})
	$('#gry').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters/house/gryffindor",imprimir)
	})
	
	$('#sly').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters/house/slytherin",imprimir)
	})
	$('#huf').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters/house/hufflepuff",imprimir)
	})
	$('#rav').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters/house/ravenclaw",imprimir)
	})
	$('#stu').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters/students",imprimir)
	})
	$('#sta').click(()=>{
		$.get("http://hp-api.herokuapp.com/api/characters/staff",imprimir)
	})
}
function imprimir(json) {
	var main = $('#main');
	main.html('');

	json.forEach((charac)=>{
		let div = $('<div>');
		div.addClass(charac.house);
		div.html(`<p>${charac.name}</p><br>`);
		if (charac.image != '') {
			let img = $('<img>').attr('src', charac.image)
			img.attr('width', '75%')
			img.attr('height', '75%')
			div.append(img)
		}else{
			let img = $('<img>').attr('src', 'fotos/user.png')
			img.attr('width', '75%')
			img.attr('height', '75%')
			div.append(img)
		}
		let open = $('<button>');
		open.addClass('open');
		open.html("More details");
		open.attr('id', 'open')
		open.click((e)=>{
			$('#info h2').html(charac.name)
			$('#info').show()
			$('.cerrar').click(()=>{
				$('#info').hide()
			})
		})
		div.append(open)
		main.append(div);
	})
}

console.log($.get("http://hp-api.herokuapp.com/api/characters"))





































Object.entries(charac[1].name)[3]