window.addEventListener("load", CheckLanguage)

function CheckLanguage(){
    const lang = navigator.language
    if(lang.startsWith("pl"))
        window.location.href = "./pl";
}