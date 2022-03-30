let image = ""
const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  showIcon: function () {
    if (image == "") {
      image = "../assets/res/icons/icons8-finn-64.png"
    }
    let icone = `
            <input type=image src=`+image+` id="icone" onclick="changeIcon()">
    `
    this.elementShown("picOfProfil", icone)
  }
}
profilApp = () => {
  display.showIcon();
}
profilApp()
function changeIcon() {
  document.getElementById('iconChoose').style.visibility= "visible" ;
}
function chooseIconFinn() {
  image = "../assets/res/icons/icons8-finn-64.png";
  document.getElementById('iconChoose').style.visibility= "hidden" ;
  profilApp()

}
function chooseIconAnonymous() {
  image = "../assets/res/icons/icons8-anonymous-mask-64.png"
  document.getElementById('iconChoose').style.visibility= "hidden"
  profilApp()

}
function chooseIconFuturama() {
  image = "../assets/res/icons/icons8-futurama-bender-64.png"
  document.getElementById('iconChoose').style.visibility= "hidden"
  profilApp()

}
function chooseIconHomer() {
  image = "../assets/res/icons/icons8-homer-simpson-64.png"
  document.getElementById('iconChoose').style.visibility= "hidden"
  profilApp()
}
function chooseIconMermaid() {
  image = "../assets/res/icons/icons8-mermaid-64.png"
  document.getElementById('iconChoose').style.visibility= "hidden"
  profilApp()
}
