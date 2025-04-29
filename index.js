//1.Create a function constructor called Employee that accepts a name, position, and salary.Create an array of 5 employees. Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. (5 pts)

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary
}
let employees = [new Employee("Mahder", "developer", 50000), new Employee("Nahela", "PM", 100000), new Employee("Mahlet", "developer", 10000), new Employee("Barsanet", "QA person", 20000), new Employee("Nate", "developer", 30000)]

function increaseSalary(employees){
  return employees.map(employee=>{
        if (employee["position"]=="developer"){
           return employee.salary=employee.salary+(employee.salary*0.1)
        }
        else{
            return employee.salary
        }
    })
}
console.log(increaseSalary(employees))
console.log(employees)

//2. Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order. (5 pts)

function inStockProducts(products){
    return products.filter(product=>product.inStock=="true").sort((priceA,priceB)=> priceA-priceB)
}
let products=[{name:"Computer",inStock:"true",price:20000},{name:"Phone",inStock:"true",price:50000},{name:"Tv",inStock:"false",price:80000}]
console.log(inStockProducts(products))

//3  Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. 

const grades={
    Mahder:[60,80,89,57,90,90],
    Nahela:[70,80,69,90,85,70],
    Melat:[50,70,69,40,20,20],
};
function averageScore(grades){
const gradesObject=Object.entries(grades);
 gradesObject.map(([studentname,scores])=>{
    if(scores.reduce((accum,score)=>accum+score,0)/scores.length >70){
        console.log(`${studentname}:"Pass"`)
    }
    else{
        console.log(`${studentname}:"Fail"`)
    }
})
}
console.log(averageScore(grades))
// console.log(grades)
//4  Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)

function User(username,email,isActive){
    this.username=username;
    this.email=email;
    this.isActive=isActive
}
const users=[new User("mahder12","mahderbeletebekele@gmail.com",false), new User("emily42","emily@gmail.com", true), new User("hiluM","hilinamesfin@gmail.com",true)]
function activeUsers(users){
    users.map(user=>{
        if(user.isActive==false){
            console.log(`Deactivated Account`)
        }
        else{
            console.log(`Active user :${user.username}`)
        }
    })
}
activeUsers(users)


//5  You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance".
 const destination=[
    {name:"Ethiopia",
        distance:1470,
        budgetRequired:400
    },
    {name:"Uganda",
        distance:903,
        budgetRequired:380
    },  
     {name:"Ethiopia",
        distance:1470,
        budgetRequired:400
    }
 ]