/// <reference types="cypress" />

it('Acessando a aplicação', ()=>{
cy.visit('https://demoqa.com/broken')  

// //Primeira Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
// cy.get('#userName').type('Kevin');
// cy.get('#userEmail').type('kevin@email.com');
// cy.get('#currentAddress').type('Rua do Trabalho, 261, Bairro das Indústrias');
// cy.get('#permanentAddress').type('Rua do Trabalho, 261, Bairro das Indústrias');
// cy.get('#submit').click();
// //Validação
// cy.get('.border').should('be.visible');
// cy.get('#name').contains('Kevin').should('be.visible');
// cy.contains('Kevin').should('be.visible');

// //Segunda Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
// cy.get('.rct-checkbox > .rct-icon').click();
// cy.get('.rct-checkbox > .rct-icon').click();
// cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse > .rct-icon').click();
// cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
// //Validação
// cy.contains('desktop').should('be.visible');
// cy.contains('notes').should('be.visible');
// cy.contains('commands').should('be.visible');

// //Terceira Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
// cy.get(':nth-child(2) > .custom-control-label').click();
// //Validação
// cy.get('.text-success').contains('Yes').should('be.visible');

// //Quarta Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
// cy.get('#searchBox').type('Kierra');
// //Validação
// cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Kierra').should('be.visible');
// //Add
// cy.get('#addNewRecordButton').click();
// cy.get('#firstName').type('Fulano');
// cy.get('#lastName').type('Silva');
// cy.get('#userEmail').type('fulano@gmail.com');
// cy.get('#age').type('25');
// cy.get('#salary').type('1500');
// cy.get('#department').type('QA');
// cy.get('#submit').click();
// cy.get('#searchBox').clear();
// cy.get('#searchBox').type('Fulano');
// //Validação
// cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Fulano').should('be.visible');

// //Quinta Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
// cy.get('#doubleClickBtn').dblclick();
// cy.get('#rightClickBtn').rightclick();
// cy.get('.col-md-6 > :nth-child(1) > :nth-child(3) > button').click();
// //Validação
// cy.get('#doubleClickMessage').contains('You have done a double click').should('be.visible');
// cy.get('#rightClickMessage').contains('You have done a right click').should('be.visible');
// cy.get('#dynamicClickMessage').contains('You have done a dynamic click').should('be.visible');

// //Sexta Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click();
// cy.get('#simpleLink').click();
// cy.get('#dynamicLink').click();
// cy.get('#created').click();
// cy.get('#linkResponse').contains('Link has responded with staus 201 and status text Created').should('be.visible')
// cy.get('#no-content').click();
// cy.get('#linkResponse').contains('Link has responded with staus 204 and status text No Content').should('be.visible')
// cy.get('#moved').click();
// cy.get('#linkResponse').contains('Link has responded with staus 301 and status text Moved Permanently').should('be.visible')
// cy.get('#bad-request').click();
// cy.get('#linkResponse').contains('Link has responded with staus 400 and status text Bad Request').should('be.visible')
// cy.get('#unauthorized').click();
// cy.get('#linkResponse').contains('Link has responded with staus 401 and status text Unauthorized').should('be.visible')
// cy.get('#forbidden').click();
// cy.get('#linkResponse').contains('Link has responded with staus 403 and status text Forbidden').should('be.visible')
// cy.get('#invalid-url').click();
// cy.get('#linkResponse').contains('Link has responded with staus 404 and status text Not Found').should('be.visible')

// //Sétima Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-6').click();
// cy.get('[src="/images/Toolsqa_1.jpg"]').should('not.be.visible');
// //cy.get('[href="http://demoqa.com"]').click();
// //cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').click();

// //Oitava Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click();
// cy.get('#uploadFile').click();
// cy.get('#downloadButton').click();

// //Nona Tela
// cy.get(':nth-child(1) > .element-list > .menu-list > #item-8').click();
// cy.get('#enableAfter').wait(1000);
// cy.get('#enableAfter').click();
// cy.get('#colorChange').click();
// cy.get('#visibleAfter').click();
// });

//Form
cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
cy.get('#firstName').type("Kevin");
cy.get('#lastName').type("Silva");
cy.get('#userEmail').type("kevin@gmail.com");
cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').type("9999999999");
cy.get('#dateOfBirthInput');
cy.get('.subjects-auto-complete__value-container').type("teste");
cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
cy.get('#uploadPicture').click();
cy.get('#uploadPicture').type("Rua do trabalho 261");
cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();

//Book
cy.get(':nth-child(6) > .group-header > .header-wrapper').click();
cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click();
cy.get('#searchBox').type("Learning JavaScript");
cy.get('#basic-addon2').click();
});