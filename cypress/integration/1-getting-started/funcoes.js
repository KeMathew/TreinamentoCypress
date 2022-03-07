/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

const SELETECTOR = require('./elements').Elements

export function entrarNoIframe(){
    //Entrar no iframe
    cy.get(SELETECTOR.btn_mudancaDeFoco).should('be.visible').click();
    cy.get(SELETECTOR.btn_iframe).click();
    cy.frameLoaded('iframe[id="id_do_iframe"]');
    
    //Criar
    cy.iframe(SELETECTOR.iframe).find(SELETECTOR.btn_formulario).should('be.visible').click();
    cy.iframe(SELETECTOR.iframe).find(SELETECTOR.btn_novoUsuario).click({force:true});
    cy.wait(10000);
    cy.iframe(SELETECTOR.iframe).find('div[class="col s6"] div[class="input-field"] input[id="user_name"]').type('Kevin');
    cy.iframe(SELETECTOR.iframe).find('#user_lastname').type('Silva');
    cy.iframe(SELETECTOR.iframe).find('#user_email').type('teste@teste.com.br');
    cy.iframe(SELETECTOR.iframe).find('#user_address').type('teste,123');
    cy.iframe(SELETECTOR.iframe).find('#user_university').type('Unipe');
    cy.iframe(SELETECTOR.iframe).find('#user_profile').type('analista de test');
    cy.iframe(SELETECTOR.iframe).find('#user_gender').type('Masculino');
    cy.iframe(SELETECTOR.iframe).find('#user_age').type('20');
    cy.iframe(SELETECTOR.iframe).find('input[value="Criar"]').click();
    cy.wait(1000);
    cy.iframe(SELETECTOR.iframe).find('p[id="notice"]').contains('Usuário Criado com sucesso');

    //Listar
    cy.wait(1000);
    cy.iframe(SELETECTOR.iframe).find('a[href="/users"]').eq(1).click();
    cy.wait(1000);
    cy.iframe(SELETECTOR.iframe).find('h5[class="center"]:Contains("Lista de Usuários")').should('be.visible');

    //Excluir
    cy.wait(1000);
    cy.iframe(SELETECTOR.iframe).find('td a[data-confirm="Vocee está certo disso?"]').eq(0).click();
    cy.wait(1000);
    cy.iframe(SELETECTOR.iframe).find('p[id="notice"]:Contains("Seu Usuário foi removido com sucesso!")').should('be.visible')
}

export function criarUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get(SELETECTOR.btn_novoUsuario).click();
    cy.get('#user_name').type('Kevin')
    cy.get('#user_lastname').type('Silva')
    cy.get('#user_email').type('teste@teste.com.br')
    cy.get('#user_address').type('teste,123')
    cy.get('#user_university').type('Unipe')
    cy.get('#user_profile').type('analista de test')
    cy.get('#user_gender').type('Masculino')
    cy.get('#user_age').type('20')
    cy.get('input[value="Criar"]').click()
    cy.get('p[id="notice"]').contains('Usuário Criado com sucesso')
}

export function listarUsuarios(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('h5[class="center"]:Contains("Lista de Usuários")').should('be.visible')
}

export function excluirUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('td a[data-confirm="Vocee está certo disso?"]').eq(0).click()
    cy.get('p[id="notice"]:Contains("Seu Usuário foi removido com sucesso!")').should('be.visible')
}

export function uploadArquivo(){
    cy.get(SELETECTOR.bnt_outros).should('be.visible').click();
    cy.get(SELETECTOR.bnt_uploadDeArquivos).click();
    cy.get('input[type=file]').selectFile('download.png');
    cy.get('img[id="thumbnail"]').should('be.visible');
}