document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
        const password = button.getAttribute('data-password');
        navigator.clipboard.writeText(password).then(() => {
            showNotification('Пароль скопирован в буфер обмена!');
        }).catch(err => {
            showNotification('Ошибка при копировании пароля: ' + err);
        });
    });
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    // Скрыть уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
    }, 500);
}
