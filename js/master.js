// function mobileBtn(evt, btnName) {

//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   tablinks = document.getElementsByClassName("mbl_btn");
  
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}
//   document.getElementById(btnName).style.display = "block";
   
//   evt.currentTarget.className += " active";
// }

function tabbtn(evt, btnName,btn) {
	var i, tabcontent, tabbtn;
	tabcontent = document.getElementsByClassName("tabcontent");
	tabbtn = document.getElementsByClassName("tabbtn");
	
	if(btnName!=home && window.innerWidth<=700){
		document.querySelector(".left_site").style.display="none";
	}
	
	  for (i = 0; i < tabcontent.length; i++) {
		  tabcontent[i].style.display = "none";
	  }
	  for (i = 0; i < tabbtn.length; i++) {
		tabbtn[i].style.background = "none";
	  }
	  document.getElementById(btnName).style.display = "block";
	  
	   
	  tabbtn[btn].style.background = "#defaff";
	
  
	  localStorage.setItem("page",btnName);
	  localStorage.setItem("btn",btn);
  }





  if(localStorage.length>0){
	if(window.innerWidth<=700){
		document.querySelector(".left_site").style.display="none";
		tabbtn(event, localStorage.getItem("page"),localStorage.getItem("btn"));
	}else{

		tabbtn(event, localStorage.getItem("page"),localStorage.getItem("btn"));;
	}
	
  }else{
	if(window.innerWidth<=700){
		document.querySelector(".right_site").style.display="none";
		tabbtn(event,'home',0);
	}else{
		
		tabbtn(event,'about',0);
	}
  }




//  ======================================================
//  work menu
//  ======================================================
 



 