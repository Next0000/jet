const box = [];
const all = document.querySelectorAll(`[id^='tab']`);

let bn = document.getElementById('bn');
const visibilityOriginal = bn.style.visibility;

window.onload = function() {
    for (var i = 1; i < all.length; ++i) {
      box.push(document.getElementById("tab" + i));
      document.getElementById("tab0").style.display ="block";
    }

}


function changeImg(idImage,imageName,idLink,URL,tab,idImage2,imageName2) {
    document.getElementById(idImage).src = imageName;
    document.getElementById(idImage2).src = imageName2;

    const t = document.getElementById(tab);
    for (var i = 0; i < all.length; ++i) {
      if(all[i].style.display=="block"){
        all[i].style.display="none";
      }
    }

    if(t.style.display!="block"){
  		t.style.display ="block";
  	}

    if(tab == "tab7"){
      bn.style.visibility = 'hidden';
    }
    else{
      bn.style.visibility = visibilityOriginal;
    }
    
    document.getElementById(idLink).href = URL;
  }
