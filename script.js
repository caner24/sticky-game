let kelimeler = ["ABANMAK", "ACEMLEŞTİRME", "ABARTİK", "ABARTİS", "ACEMBUSELİK", "ARABAMA", "POSET"];
var path = document.querySelector("body");
var pathAdditems = document.getElementById('text-item');
var modalPath = document.getElementById('footer-bar');
let durum;
let number;
var konum;
let miktar = 1;
let bilinen = 0;
var kelime = "selam";
let sayac = 0;

kelimetüret();
function kelimetüret() {
    durum = false;
    number = Math.random() * 10;
    number = number.toFixed(0);

    while (number >= kelimeler.length) {
        number = Math.random() * 10;
        number = number.toFixed(0);
    }
    for (let a = 0; a < kelimeler[number].length; a++) {
        var cümle = `<li><input class="text-li" type="text" name="" id=""></li>`;
        pathAdditems.insertAdjacentHTML("afterend", cümle);
    }
}

path.addEventListener('keydown', function (e) {
    var key = e.code;
    var cümle = key.substring(3, 4);

    durum = false;

    if (sayac != 6) {
        if (kelimeler[number].includes(cümle)) {
            kelime = kelimeler[number];
            for (a of kelimeler[number]) {
                if (a == cümle) {
                    if (durum == true) {

                        kelime = kelime.substring(kelime.indexOf(a) + 1);
                        konum = kelime.indexOf(a);
                        miktar += kelime.indexOf(a);
                        document.getElementsByClassName("text-li")[miktar].value = cümle;
                        miktar++;
                        bilinen++;
                    }
                    else {
                        konum = kelime.indexOf(a);
                        document.getElementsByClassName("text-li")[konum].value = cümle;
                        bilinen++;
                        durum = true;
                    }
                }
                if (bilinen == kelimeler[number].length) {
                    myfunction();
                }
            }
        }
        else {
            if (!document.getElementById("wrong-letters").innerText.includes(cümle)) {
                document.getElementById("wrong-letters").innerText += cümle + ",";
                document.getElementsByClassName('item')[0].classList.remove("item");
                sayac++;
            }
            else {
                alert("Bu kelimeyi zaten girdiniz");
            }

        }
    }
    else {
        let myHtml = `<div id="simpleModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-black">
              <h5 class="modal-title ">Oyun Bitti</h5>
            </div>
            <div class="modal-body text-black  text-center  ">
              <p>Bulmaya calistiginiz kelime :  ${kelimeler[number]}</p>
            </div>
            <div class="modal-footer">
              <button onclick="myfunction()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Yeniden Basla</button>
            </div>
          </div>
        </div>
      </div>`;
        modalPath.insertAdjacentHTML("afterend", myHtml);
        OpenBootstrapPopup();
    }
});

function OpenBootstrapPopup() {
    var myModal = new bootstrap.Modal(document.getElementById("simpleModal"));
    myModal.show();
}
function myfunction() {
    window.location.reload();
}
