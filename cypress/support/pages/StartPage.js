class StartPage {
    ClickStartBtn(){
        cy.get('button').click();
    }

    VisitStartPage(){
        cy.visit('/');
    }

}

export const startPage = new StartPage();