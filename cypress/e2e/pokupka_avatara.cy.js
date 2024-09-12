describe('Автотесты для формы логина и пароля', function () {

    // первый автотест
    it('Верный логин и верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/'); // зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввели правильный логин
         cy.get('#password').type('USER_PASSWORD');  // ввели правильный пароль
         cy.get('.auth__button').click(); // нажали войти

         cy.wait(3000);

         cy.get('.header__id-text_type_profile').contains('4998'); // после авторизации вижу ID 4998
         cy.get('.header__id-text_type_profile').click({ force: true }); // Найти ID тренера и  нажать
         cy.get('[href="/shop"]').click({ force: true }); // Найти поле Сменить тренера и  нажать
         cy.get('.available > button').first().click({ force: true }); // Выбрать аватар и нажать на кнопку Купить

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 4444 4442'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0227'); // вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим cvv код 
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ekaterina Zhulina'); // вводим имя и фамилию держателя карты
         cy.get('.pay-btn').click(); // Нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // вводим код из пуша
         cy.get('.payment__submit-button').click(); // нажали Отправить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        })
})





// Зайти на сайт +
// Найти поле логин, ввести правильный логин +
// Найти поле пароль, ввести правильный пароль +
// Найти кнопку Войти, нажать +
// Подождать 5 сек
// Получить окно успешной авторизации
// Найти ID тренера и  нажать
// Найти поле Смена аватара, нажать
// Получить окно Магазин
// Выбрать доступный аватар
//
//