const polja=document.querySelectorAll(".polje");
const poruka=document.getElementById("poruka");
const rezultat=document.getElementById("rezultat");
const novaIgra=document.getElementById("novaIgra");
const restartuj=document.getElementById("restartuj");

let igrac="X";
let pocetniIgrac="X";
let igraZavrsena=false;
let rezultatX=0;
let rezultatO=0;
const kombinacije = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function provjeriPobjedu(){

let svaPopunjena=true;

    kombinacije.forEach(function(kombinacija){
        const prvo=polja[kombinacija[0]];
        const drugo=polja[kombinacija[1]];
        const trece=polja[kombinacija[2]];

        if(!igraZavrsena&&
            prvo.textContent!==""&&
            prvo.textContent===drugo.textContent&&
            drugo.textContent===trece.textContent){
            poruka.textContent=prvo.textContent+" je pobijedio!";

            if(prvo.textContent==="X"){
                rezultatX++;
            }
            else{
                rezultatO++;
            }

            rezultat.textContent="X: "+rezultatX+" | O: "+rezultatO;

            prvo.classList.add("pobjednicko");
            drugo.classList.add("pobjednicko");
            trece.classList.add("pobjednicko");

            igraZavrsena=true;
        }
    });

    polja.forEach(function(polje){
        if(polje.textContent===""){
            svaPopunjena=false;
        }
    });
    if(svaPopunjena&&!igraZavrsena){
        poruka.textContent="Neriješeno!";
        igraZavrsena=true;
    }
}

polja.forEach(function(polje) {

    polje.addEventListener("click", function() {

        if (!igraZavrsena && polje.textContent === "") {

            polje.textContent = igrac;

            if(igrac==="X"){
                polje.style.backgroundColor="lightblue";
            }
            else{
                polje.style.backgroundColor="lightpink";
            }

            provjeriPobjedu();

            if (!igraZavrsena) {

                if (igrac === "X") {
                    igrac = "O";
                }
                else {
                    igrac = "X";
                }

                poruka.textContent = "Igrač " + igrac + " je na redu";
            }

        }

    });

});


novaIgra.addEventListener("click",function(){
    polja.forEach(function(polje){
        polje.textContent="";
        polje.style.backgroundColor="";
        polje.classList.remove("pobjednicko");
    });

    if(pocetniIgrac==="X"){
        pocetniIgrac="O";
    }
    else{
        pocetniIgrac="X";
    }
    igrac=pocetniIgrac;
    igraZavrsena=false;
    poruka.textContent="Igrač "+ igrac +" je na redu";

    
});

restartuj.addEventListener("click",function(){
    polja.forEach(function(polje){
        polje.textContent="";
        polje.style.backgroundColor="";
        polje.classList.remove("pobjednicko");
    });
    rezultatX=0;
    rezultatO=0;

    rezultat.textContent="X: 0 | O: 0";

    igrac="X";
    pocetniIgrac="X";
    igraZavrsena=false;

    poruka.textContent="Igrač X je na redu";
});