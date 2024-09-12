describe('Автотесты для формы логина и пароля', function () {

    // первый автотест
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1');  // ввели правильный пароль
         cy.get('#loginButton').click(); // нажали войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })

     // второй автотест
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт     
        cy.get('#forgotEmailButton').click(); // нажали забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажали отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, что после нажатия вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

     // третий автотест
     it('Верный логин  и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели правильный логин
        cy.get('#pass').type('iLoveqastudio');  // ввели неправильный пароль
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

     
     // четвертый автотест
     it('Неверный логин  и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolniko.ru'); // ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1');  // ввели правильный пароль
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    // пятый автотест
     it('Проверка, что в логине есть @', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('germandolnikov.ru'); // ввели  логин без @
         cy.get('#pass').type('iLoveqastudio1');  // ввели правильный пароль
         cy.get('#loginButton').click(); // нажали войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })

    // шестой автотест
    it('Проверка на приведение к строчным буквам в логине при разных регистрах', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели правильный логин с символамми в верхнем регистре
        cy.get('#pass').type('iLoveqastudio1');  // ввели правильный пароль
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })    
 
 })
 
 