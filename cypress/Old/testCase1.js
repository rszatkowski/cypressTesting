/// <reference types ='cypress'/>

    
  //Elements on the site:

    //Url adress
    const url = 'http://automationpractice.com/index.php'
    
    //Strings to use in the test
    const textOnBottom = 'support@seleniumframework.com'
    const textOnAlert = 'No results were found for your search'
    const textToSearch = 'schoes'
    
    //More unique selectors 
    const searchField = '[name = "search_query"]'
    const seachButton = '[name = "submit_search"]'
    const banner = '[alt="My Store"]'


    describe('Test Suite 1', () => {
  
        //This will run before each 'it' and navigate to url adress defined above
        beforeEach(()=> {
            cy.visit(url)
        })
        
        //Test case nr 1:
        it('Test Case 1: Elements on home page', () => {
            cy.get(banner).should('be.visible')

            cy.get(banner).should((elements)=>{
                console.log(elements)
            })    

            cy.contains(textOnBottom)
        })

        //Test case nr 2:
        it('Test Case 2: No results found', () => {
            cy.get(searchField).type(textToSearch)
            cy.get(seachButton).click();
            cy.contains(textOnAlert)
            })

    })



   