function gaSetActiveMusic() {
  localStorage.setItem("musicbg", "bjMusic");
  document.getElementById("musicGbgSound").currentTime = 0;
  document.getElementById("msAlang").classList.remove("activet");
  document.getElementById("musicAbgSound").pause();
  document.getElementById("msBlang").classList.remove("activet");
  document.getElementById("musicBbgSound").pause();
  document.getElementById("msClang").classList.remove("activet");
  document.getElementById("musicCbgSound").pause();
  document.getElementById("msDlang").classList.remove("activet");
  document.getElementById("musicDbgSound").pause();
  document.getElementById("msElang").classList.remove("activet");
  document.getElementById("musicEbgSound").pause();
  document.getElementById("msFlang").classList.remove("activet");
  document.getElementById("musicFbgSound").pause();
  document.getElementById("msGlang").classList.add("activet");
  document.getElementById("musicGbgSound").play();
  document.getElementById("msHlang").classList.remove("activet");
  document.getElementById("musicHbgSound").pause();
  document.getElementById("msIlang").classList.remove("activet");
  document.getElementById("musicIbgSound").pause();
  document.getElementById("msJlang").classList.remove("activet");
  document.getElementById("musicJbgSound").pause();
  document.getElementById("msKlang").classList.remove("activet");
  document.getElementById("musicKbgSound").pause();
  document.getElementById("msLlang").classList.remove("activet");
  document.getElementById("musicLbgSound").pause();
  document.getElementById("msMlang").classList.remove("activet");
  document.getElementById("musicMbgSound").pause();
  document.getElementById("msNlang").classList.remove("activet");
  document.getElementById("musicNbgSound").pause();
  document.getElementById("msOlang").classList.remove("activet");
  document.getElementById("musicObgSound").pause();
  document.getElementById("msPlang").classList.remove("activet");
  document.getElementById("musicPbgSound").pause();
  document.getElementById("msQlang").classList.remove("activet");
  document.getElementById("musicQbgSound").pause();
  document.getElementById("msRlang").classList.remove("activet");
  document.getElementById("musicRbgSound").pause();
  document.getElementById("msSlang").classList.remove("activet");
  document.getElementById("musicSbgSound").pause();
  document.getElementById("msTlang").classList.remove("activet");
  document.getElementById("musicTbgSound").pause();
  document.getElementById("msUlang").classList.remove("activet");
  document.getElementById("musicUbgSound").pause();
  document.getElementById("msVlang").classList.remove("activet");
  document.getElementById("musicVbgSound").pause();
  defaultClickSound();
}