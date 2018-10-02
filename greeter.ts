import SuperStudent from "./Student"

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

let user = new SuperStudent("Chris", 1, "Schmitz")
// let user = { firstName: "Chris", lastName: "Schmitz" }
// let user = ["Jane", "User"]

document.body.innerHTML = greeter(user)
