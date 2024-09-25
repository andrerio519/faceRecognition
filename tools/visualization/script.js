function copyToClipboard() {
    var code = document.querySelector('pre code');
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    alert('Kode berhasil disalin!');

}