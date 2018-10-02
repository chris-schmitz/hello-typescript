"use strict";
exports.__esModule = true;
var SuperStudent = /** @class */ (function () {
    function SuperStudent(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return SuperStudent;
}());
exports["default"] = SuperStudent;
