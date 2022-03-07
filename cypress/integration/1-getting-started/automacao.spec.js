/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import {criarUsuario,listarUsuarios,excluirUsuario,entrarNoIframe, uploadArquivo} from './funcoes'

beforeEach(()=>{
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
});

it('Deve clicar no menu do Iframe', () => {
    entrarNoIframe();
});

it('Deve fazer o Upload do Arquivo', () =>{
    uploadArquivo();
});
