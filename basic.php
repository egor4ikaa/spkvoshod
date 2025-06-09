<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем email из формы
    $email = trim($_POST['email']);

    // Вариант с сохранением в файл
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        file_put_contents('subscribers.txt', $email . PHP_EOL, FILE_APPEND);
        echo "Вы успешно подписались!";
    } else {
        echo "Пожалуйста, введите корректный email.";
    }
}
?>
<!-- HTML форма -->
