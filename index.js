function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      console.log(event)
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {

}
