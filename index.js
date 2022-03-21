
//question 1 
class Employee { 
    constructor(name, ID, permissions, storenumb ) {
    this.name = name ; 
    this.ID = ID; 
    this.permissions = permissions; 
    this.storenumb = storenumb; 
    }; 


}
let Jack = new Employee ('jack', 2, 'none', 1); 
//question 2 
class Manager extends Employee { 
    constructor(name, ID, permissions, storenumb, employeelist) { 
        super(name, ID, permissions, storenumb) ;
        this.employeelist = employeelist; 

    }
//Need to fix if statement to get method to work ;
    changePermissions(name, newPermission) { 
        if (name=Employee.name) { 
            
            Employee.permissions = newPermission; 
        }


    }
}
let Emily = new Manager('Emily', 1, 'All', 1, Jack); 
//console.log(Emily); 

Emily.changePermissions('Jack', 'all'); 
//console.log(Jack); 
//question 3 
const countries = ['Finland','Estonia', 'Sweden', 'Denmark', 'Norway' ]; 

const [fin, est, sw, den, nor] = countries; 

console.log(fin); 
//question 4
const rectangle = { 
    width: 20, 
    height: 10, 
    area: 200, 
    perimeter:60
}


const { width: x, height: y, area: z, perimeter: q } = rectangle;

console.log(x); 

//question 5 
function generate() { 
    Numerical();  
};

let Numerical = () => { 
    //why doesn't this work when evens and odds are defined outside of the function;
    const evens = [0, 2, 4, 6, 8, 10]; 
    const odds = [1,3,5,7,9];
    //let span = document.getElementById('span');
    const empty = [...evens, ...odds] ;
    empty.sort(function(a,b) { 
        return a-b ; 
    })
    //I couldn't figure out how to use map well 
    emptyMap = empty.map((x) => x+1 );
    emptyMap2 = emptyMap.map((x) => x -1 ); 
    console.log(emptyMap);
    console.log(emptyMap2); 

    //const empty1 = empty.map((x) => <p> x </p>)

    console.log(empty); 
    //why does innertext or replace children not work; 
    span.innerHTML = emptyMap2; 
    console.log(span.innerText);

}; 

