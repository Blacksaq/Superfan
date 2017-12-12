function warDrum(e){	
	document.getElementById("excal").pause();
	document.getElementById("loki").pause();
	document.getElementById("mesa").play();
}
function whatYouAre(e){
	document.getElementById("loki").pause();
	document.getElementById("mesa").pause();
	document.getElementById("excal").play();
}
function shadowStalker(e){
	document.getElementById("mesa").pause();
	document.getElementById("excal").pause();
	document.getElementById("loki").play();
}

function ex(elem){
	elem.classList.toggle("e_prime");
}

function ash(elem){
	elem.classList.toggle("a_prime");
}

function nek(elem){
	elem.classList.toggle("n_prime");
}

function vo(elem){
	elem.classList.toggle("v_prime");
}

function fr(elem){
	elem.classList.toggle("f_prime");
}

function emb(elem){
	elem.classList.toggle("em_prime");
}
