function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      console.log(document.getElementById("name").value)
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {

}
