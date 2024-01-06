interface Persona{
    id:number;
    name:string;
}

interface Employee extends Persona{
    dept:string;
}

interface Customer extends Persona{
    country: string;
}

interface Animal{
    getDogs:()=>void;
    getCats:()=>void;
}

class Zoo implements Animal{
    getDogs(): void{

    }
    getCats(): void{

    }
}