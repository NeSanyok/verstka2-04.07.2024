function changeColor(button) {
    // Получаем все кнопки с классом "color-button"
    const buttons = document.querySelectorAll('.color-button');
    
    // Удаляем класс "active" у всех кнопок
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Добавляем класс "active" к нажатой кнопке
    button.classList.add('active');
}