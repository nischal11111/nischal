const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const downloadLink = document.getElementById('downloadLink');
const imageScaleInput = document.getElementById('imageScale');
const scaleValueDisplay = document.getElementById('scaleValue');

imageScaleInput.addEventListener('input', function() {
    const scaleValue = imageScaleInput.value;
    scaleValueDisplay.textContent = scaleValue;
});

imageInput.addEventListener('change', function() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

function compressAndDownload() {
    const scaleValue = imageScaleInput.value;
    const formData = new FormData(document.getElementById('uploadForm'));
    formData.append('scale', scaleValue);

    fetch('compress.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'compressed_image.jpg';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

