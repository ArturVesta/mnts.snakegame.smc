function englishLanguage() {
  document.getElementById("languageEn").classList.add("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function russianLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.add("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function japaneseLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function langCheck() {
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("languageEn").classList.add("activet");
    document.getElementById("languageRu").classList.remove("activet");
    document.getElementById("languageJp").classList.remove("activet");
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("languageEn").classList.remove("activet");
    document.getElementById("languageRu").classList.add("activet");
    document.getElementById("languageJp").classList.remove("activet");
  }else
  if(localStorage.getItem("lang") === "jp") {
    document.getElementById("languageEn").classList.remove("activet");
    document.getElementById("languageRu").classList.remove("activet");
    document.getElementById("languageJp").classList.add("activet");
  }
};
langCheck();