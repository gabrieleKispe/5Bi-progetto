function caricaVideo() {
    var iframe = document.getElementById('mioVideo');
    var placeholder = document.getElementById('video-placeholder');

    if (iframe && placeholder) {
        iframe.src = iframe.getAttribute('data-src');
        iframe.style.display = 'block';
        placeholder.style.display = 'none';
    }
}

window.addEventListener('pageshow', function(event) {
    var iframe = document.getElementById('mioVideo');
    var placeholder = document.getElementById('video-placeholder');

    if (iframe && placeholder) {
        iframe.src = '';
        iframe.style.display = 'none';
        placeholder.style.display = 'flex';
    }
});