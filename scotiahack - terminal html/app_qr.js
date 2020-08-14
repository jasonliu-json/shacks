class Queue {
   
    constructor(){
      
      this.data = [];
      this.rear = 0;
      this.size = 10;
    }
    
    enqueue(element) {
        if(this.rear < this.size ) {
            this.data[this.rear] = element;
            this.rear = this.rear + 1;
        }
    }

    dequeue() {
        
        if(this.isEmpty() === false) {
            
            this.rear = this.rear-1;
            return this.data.shift();
        }
    }

    length() {
        return this.rear;
    }
    
    isEmpty() {
        return this.rear === 0;
    }

    getFront() {
        if(this.isEmpty() === false) {
            return this.data[0];
        }
    }

    getLast() {
        
        if(this.isEmpty() === false) {
            
            return this.data[ this.rear - 1 ] ;
        }
    }

    print() { 
        for(let i =0; i < this.rear; i++) {
        console.log(this.data[i]);
        }
    }

    clear() {
        this.data.length = 0;
        this.rear = 0;
    }
}

class Customer {
    constructor(info=[]) {
        if (info != []) {
            this.id = info[0];
            this.name = info[1];
            this.status = info[2];
            this.purpose = info[3];
            this.service = info[4];
            this.checkedIn = info[5];
            this.hasApp = info[6];
            this.customerNumber = 1;
            this.info = info;
        }
    }

    printInfo(){
        console.log("id: " + this.id);
        console.log("name: " + this.name);
        console.log("status: " + this.status);
        console.log("purpose: " + this.purpose);
        console.log("service: " + this.service);
        console.log("checkedIn: " + this.checkedIn);
        console.log("hasApp: " + this.hasApp);
        var info = "Success! \n";
        info += "customer id: " + this.id + "\n";
        info += "name: " + this.name + "\n";
        info += "status: " + this.status + "\n";
        info += "purpose: " + this.purpose + "\n";
        info += "service: " + this.service + "\n";
        info += "checkedIn: " + this.checkedIn + "\n";
        info += "hasApp: " + this.hasApp + "\n";
        return info;
    }
}

class CustomerManager {
    constructor() {
        this.regularCustomers = new Queue();
        this.priorityCustomers = new Queue();
        this.customerNumber = 1;
    }

    addCustomerLocal() {
        var customer = new Customer();
        customer.purpose = localStorage.getItem("purpose");
        customer.service = localStorage.getItem("service");
        customer.checkedIn = true
        customer.hasApp = false
        this.regularCustomers.enqueue(customer);
    }

    addCustomerQR() {
        var customer = new Customer(this.scanQRcode());
        if (customer.status == "senior" || customer.status == "health") {
            this.priorityCustomers.enqueue(customer);
        } else {
            this.regularCustomers.enqueue(customer);
        }
    }

    serveNextCustomer() {
        if (this.priorityCustomers.isEmpty()){
            var customer = this.regularCustomers.dequeue();
        } else {
            var customer = this.priorityCustomers.dequeue();
        }
        customer.printInfo();
        return customer;
    }

    scanQRcode() {
        var id;
        var name;
        var status;
        var purpose;
        var service;
        var checkedIn;
        var hasApp;
        if (this.customerNumber == 1) {
            id = "001";
            name = "Joshua Hur";
            status = "senior";
            purpose = "personal";
            service = "open account";
            checkedIn = true
            hasApp = true
        } else if (this.customerNumber == 2) {
            id = "002";
            name = "Jason Liu";
            status = "noob";
            purpose = "business";
            service = "loans and leases";
            checkedIn = false
            hasApp = true
        }
        this.customerNumber += 1;
        var infoArray = [id, name, status, purpose, service, checkedIn, hasApp];
        return infoArray;
    }
}

m = new CustomerManager();
m.addCustomerQR();
m.addCustomerQR();
var next = m.serveNextCustomer().printInfo();
console.log(next);
localStorage.setItem("2", next)
alert(next);
