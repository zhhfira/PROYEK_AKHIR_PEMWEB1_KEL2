
function updateHarga() {
    var kategori = document.getElementById("kategori").value;
    var beratInput = document.getElementById("beratInput").value;
    var berat = parseFloat(beratInput);
    var harga = 0;

    if (kategori !== "pilih" && !isNaN(berat)) {
        switch (kategori) {
            case "plastik":
                harga = 2000;
                break;
            case "logam":
                harga = 3000;
                break;
            case "kertas":
                harga = 1000;
                break;
        }

        var totalHarga = harga * berat;
        document.getElementById("harga").value = totalHarga;
    } else {
        document.getElementById("harga").value = "";
    }
}

    // Get the modal
    var addModal = document.getElementById("myModal");
    var editModal = document.getElementById("editModal");
    let nama = document.getElementById("nama");
    let kategori = document.getElementById('kategori');
    let beratInput = document.getElementById('beratInput');
    let harga = document.getElementById('harga');
    let tanggalPenjemputan = document.getElementById('tanggalPenjemputan');
    let alamat = document.getElementById('alamat');
    let catatan = document.getElementById('catatan');

    // Get the button that opens the modal
    var btnTambah = document.getElementById("btnTambah");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");

    // When the user clicks on the button, open the modal
    btnTambah.onclick = function() {
    addModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span[0].onclick = function() {
    nama.value = '';
    kategori.value = '';
    beratInput.value = '';
    harga.value = '';
    tanggalPenjemputan.value = '';
    alamat.value = '';
    harga.value = '';
    catatan.value = '';
    addModal.style.display = "none";
    }

    span[1].onclick = function() {
        nama.value = '';
        kategori.value = '';
        beratInput.value = '';
        harga.value = '';
        tanggalPenjemputan.value = '';
        alamat.value = '';
        harga.value = '';
        catatan.value = '';
        editModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == addModal || event.target == editModal) {
        nama.value = '';
        kategori.value = '';
        beratInput.value = '';
        harga.value = '';
        tanggalPenjemputan.value = '';
        alamat.value = '';
        harga.value = '';
        catatan.value = '';
        addModal.style.display = "none";
        editModal.style.display = "none";
    }
    }

    var submit = document.getElementById("submit")
    submit.onclick = ()=>{
        addModal.style.display = "none";
    }
