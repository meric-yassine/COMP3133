class Customer {
    firstName!: string;
    lastName!: string;

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer();
customer.firstName = "Meriç";
customer.lastName = "Yassine";

customer.greeter();