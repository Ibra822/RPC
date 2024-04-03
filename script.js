document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки на странице
    const buyButtons = document.querySelectorAll('.buy-button');

    // Добавляем обработчик событий для каждой кнопки
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное действие кнопки
            // Показываем сообщение
            alert('Переход на страницу покупки Raccoon Pedro Coin (RPC)');
            // Здесь может быть ваш код для открытия модального окна или перенаправления
            // Например: window.location.href = 'https://your-exchange.com/buy-rpc';
        });
    });
});
