"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student_1["default"]("Chris", 1, "Schmitz");
// let user = { firstName: "Chris", lastName: "Schmitz" }
// let user = ["Jane", "User"]
document.body.innerHTML = greeter(user);
