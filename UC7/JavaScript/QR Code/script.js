function gerarQRCode() {
    var link = document.getElementById('link').value;

    if(link) {
        // Limpar o QRCode anterior
        document.getElementById('qrcode').innerHTML = '';

        QRCode.toDataURL(link, function(error, url){
            if(error) {
                console.error(error);
            } else {
                var img = document.createElement('img');
                img.src = url;
                document.getElementById('qrcode').appendChild(img);
            }
        });
    } else {
        alert("Por favor, insira um link para gerar o QR Code")
    }
}