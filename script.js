// JavaScript untuk interaktivitas sederhana
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    document.getElementById('contact-form').reset();
});