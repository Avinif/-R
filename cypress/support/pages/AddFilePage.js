class AddFilePage {
    ClickAddBtn(){
        cy.get('.btn-primary').click();
    }

    AddFile(Data){
        cy.get('.dropbox').attachFile(Data, {subjectType: 'drag-n-drop'});
    }

  }
  
  export const addFilePage = new AddFilePage();