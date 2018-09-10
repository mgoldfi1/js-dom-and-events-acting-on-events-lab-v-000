function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      console.log(event.which)
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {

}
