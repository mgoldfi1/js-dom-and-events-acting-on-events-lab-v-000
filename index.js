function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){

      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

// function addNewElementAsLi() {
//   return document.querySelector('.employee-list').append(retrieveEmployeeInformation())
// }
// 
// function addNewLiOnClick() {
//   document.querySelector('form').addEventListener('click', function(e){
//     return addNewElementAsLi()
//   })
// }
