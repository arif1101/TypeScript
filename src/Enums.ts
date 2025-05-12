// so, enums are types that group related constants under one name
// Enums come in two flavors string and numeric

{
enum Day1 {
    Monday,
    Tuesday,
    Wednesday
}
let today: Day1 = Day1.Monday;
console.log(Day1.Monday) //output : 0
console.log(Day1[2])  // output: Wednesday
console.log('-----day2-------')
enum Day2 {
    Monday = 4,
    Tuesday = 2,
    Wednesday = 3
}
console.log(Day2.Monday)
console.log(Day2[4])

// string enums 

enum Status {
    Success = 'success',
    Fail = "fail"
};
let result: Status = Status.Success;
console.log(result)

// Real life example 

enum Role {
    Admin="ADMIN",
    User="USER",
    Guest="GUEST"
}
function checkPermission(role: Role) {
    if (role === Role.Admin) {
      console.log("Full access");
    } else if (role === Role.User) {
      console.log("Limited access");
    } else {
      console.log("Guest access");
    }
  }
checkPermission(Role.User) // output: Limited access


}