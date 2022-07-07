let portal = document.getElementById('portal');

for (let i = 0; i < 360; i++){
    let chispa =
    documnet.createElement("div");
    chispa.classname = "chispa";
    chispa.style.rotate = 1 * 2+ 'deg';
    let chispaTranslation =
                math.random() *
                (120-100) + 100;

    chispa.style.transform =
        'translate('+chispaTranslation+'px)';

    portal.appendChild(chispa);
}