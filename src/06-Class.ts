class Person{
    public zone = 'Caribean';
    protected city = 'Santo Domingo';
    private country = 'R.D'
    constructor(){};

    greet():void{
        console.log('HELLO !!')
    }
}


class Employee extends Person{
    constructor(id: number, name: string, dept: string){
        super();
        this.showInfo();
    }

    showInfo():void{
        console.log(`NOMBRE ${this.name} - ZONA ${this.zone} CITY ${this.city}`);
    }
}

const emp = new Employee(111, 'ANA', 'CONTABILIDAD');
emp.greet();

