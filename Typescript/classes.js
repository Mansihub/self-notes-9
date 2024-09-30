
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var User = /** @class */ (function () {
//     function User(fname, lastname) {
//         this.fname = fname;
//         this.lname = lastname;
//         this.unchangableName = fname;
//     }
//     User.prototype.changeUnchangablename = function () {
//         // this.unchangableName="hello"
//         // Cannot assign to 'unchangableName' because it is a read-only property.
//     };
//     User.prototype.getFullName = function () {
//         return this.fname + ' ' + this.lname;
//     };
//     User.maxAge = 50; //CAN NOT DO OBJ1.MAXAGE BUT CAN DO user.maxAge as maxAge is accessible to class only as it is marked static
//     return User;
// }());
// var class1 = /** @class */ (function (_super) {
//     __extends(class1, _super);
//     function class1() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     class1.prototype.setEditor = function (editor) {
//         this.editor = editor;
//     };
//     class1.prototype.getEditor = function () {
//         return this.editor;
//     };
//     return class1;
// }(User));
// var obj1 = new User('mansi', 'vashistha');
// console.log(obj1.getFullName());
// var obj2 = new class1('heelo', 'world');
// console.log(obj2.getFullName());
// console.log(obj2.setEditor('krish'));
// console.log(obj2.getEditor());
