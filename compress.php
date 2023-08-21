<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["image"])) {
    $image = $_FILES["image"];

    if ($image["error"] == UPLOAD_ERR_OK) {
        $imageData = file_get_contents($image["tmp_name"]);

        $compressedData = compressImage($imageData, 800, 600, $_POST["scale"]); // Resize and compress

        header("Content-Type: image/jpeg");
        header("Content-Disposition: attachment; filename=compressed_image.jpg");
        echo $compressedData;
        exit();
    }
}

function compressImage($imageData, $maxWidth, $maxHeight, $scale) {
    $image = imagecreatefromstring($imageData);

    $originalWidth = imagesx($image);
    $originalHeight = imagesy($image);

    $newWidth = $originalWidth * $scale;
    $newHeight = $originalHeight * $scale;

    $resizedImage = imagecreatetruecolor($newWidth, $newHeight);
    imagecopyresampled($resizedImage, $image, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);

    ob_start();
    imagejpeg($resizedImage, null, 90); // Quality set to 90
    $compressedData = ob_get_contents();
    ob_end_clean();

    imagedestroy($image);
    imagedestroy($resizedImage);

    return $compressedData;
}
?>
