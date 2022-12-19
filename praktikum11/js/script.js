document.querySelectorAll("#option a").forEach((a) => {
    // jika nanti di klik maka akan menjalankan fungsi computerChoice()
     a.addEventListener("click", (element) => {
        computerChoice(element);
     })
}) 
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihankomputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer 
    let choices =  ["Rock", "Paper", "Scissors"];

    // pilihan random komputer 
    pilihankomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihankomputer = pilihankomputer.innerHTML;

    //jika pilihan user == komputer (draw)
    if(pilihanUser == pilihankomputer){
        alert("DRAW");
        setTimeout(() => alert("DRAWW"), 300);
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihankomputer == "Scissors"){
        alert("USER WIN");
    } else if (pilihanUser == "Paper" && pilihankomputer == "Rock"){
        alert("USER WINN");
    } else if (pilihanUser == "Scissors" && pilihankomputer == "Paper"){
        alert("USER WINNN");
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihankomputer == "Paper"){
        alert("COMPUTER WIN");
    } else if (pilihanUser == "Paper" && pilihankomputer == "Scissors"){
        alert("COMPUTER WINN");
    } else if (pilihanUser == "Scissors" && pilihankomputer == "Rock"){
        alert("COMPUTER WINNN");
    }
    alert("Tidak ada pilihan");
}
     