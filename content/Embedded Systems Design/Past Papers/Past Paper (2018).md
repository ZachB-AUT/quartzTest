# Question One

## Q1A
> [!Question]
> What is a Program Counter? Explain how a program counter is used in a microcontroller.

A program counter is a location in the hardware which stores the index of the current instruction.
Branching in code is performed by changing the value of the program counter.

## Q1B
> [!Question]
> What is the main difference between a microcontroller unit (MCU) and a
  microprocessor unit (MPU)? List three disadvantages of an MPU.

> [!Answer]
> An MCU is a combination of a processing unit and hardware inferfaces such as digital IO ports, ADCs, and peripheral interfaces.
> An MPU (while much more powerful), typically only contains the processor.


## Q1C
> [!Question]
> Find the odd and even components of the given signal $f(s)$.
> $$
> x(t) = 1+t cos(5) + 5(t)^3
> $$

Not relevant.

# Question Two
> INSET DIAGRAM HERE!
> Figure 1.

## Q2A
> [!Question]
> Why does AVR adopt a Harvard architecture? Justify your answer using figure 1.

The Harvard architecture separates the program memory from the data memory, as
opposed to the von Neumann architecture which combines both.
AVR micro controllers use the Harvard architecture because they have very small
amounts of program and data memory, and keeping them seperate allows for the MCU
to use different bus widths for instructions vs data. (i.e. 8 bit instructions,
16 bit data.).


## Q2B
> [!Question]
> The central processing unit (CPU) consists of arithmetic logic unit (ALU), General Purpose Registers, Status Registers, Program Counter, Instruction Register, Instruction Decoder. What is the purpose of using Status Registers? Explain how Status Registers are used in AVR.

Status registers allow for a simple, high performance method of checking the
status of different peripheral devices. Because checking or changing the status
registers can be performed as bit-operations, doing so is extremely performant.

## Q2C
> [!Question]
> What are the basic operations of ALU in AVR?

- Addition
- Subtraction
- Multiplication
- Division
- Logical operations (AND, OR, XOR, NOT)

## Q2D
> [!Question]
> What is the main advantage of General Purpose Registers over Random Access Memory (RAM). Justify your answer.

General Purpose Registers are non-memory-mapped registers that can be used to store, access, and manipulate data in the MCU extremely   quickly (typically operations can be completed within a single instruction cycle).


# Question Three

A quadcopter, also known as a quadrotor helicopter, is a helicopter that is lifted and propelled by four rotors. As compared to conventional helicopters, quadcopters have smaller blades, thus less kinetic energy, reducing their ability to cause damage. Suppose you are working as an Embedded System Engineer in SkyFly, a company that designs and manufacturers unmanned aerial vehicles (UAVs), including quadcopters. Your current project is to design a simple quadcopter, as illustrated in Figure 2, with the following requirements: (1) The quadcopter is driven by four brushless DC motors, capable of a collective thrust of 400g using a 11V Lithium-Polymer (LiPo) battery. (2) Each motor is driven by a brushless electronic speed controller (ESC), with the control signal from the avionics printed circuit board (PCB). (3) The Avionics PCB generates the control signal based on a combination of sensor feedback collected from inertial measurement unit (IMU) and the received signal from a remote controller. (4) The quadcopter communicates with the remote controller through a Bluetooth module. (5) A voltage regulator board is used to convert the 11 V power supply to 5 V and a 3.3 V for auxiliary purpose. (6) The components are mounted on a frame made of carbon-fiber composite material with a foam core for its durability, low weight and bending stiffness. 

> INSET DIAGRAM HERE
> FIGURE 2

## Q3A
> [!Question]
> Suppose you have chosen the following components from Element 14: (1) the InvenSense MPU-6050 sensor for IMU; (2) DualSky XC406ULT for ESCs; (3) Panasonic Bluetooth module PAN1321. The datasheets for the above devices are provided in the appendices (Appendix A-C). Using the datasheets, together with the specifications for the quadcopter, draw a hardware block diagram including all major components, and where applicable, the connection type between the MCU and the peripheral (e.g. logic level / analogue voltage / SPI / UART / I2C). 

## Q3B
> [!Question]
> What are the factors that you need to consider when selecting a microcontroller for this quadcopter design? Justify your answer. 


## Q3C
> [!Question]
> For the software development of the quadcopter, which software architecture is more suitable? Justify your answer. 

## Q3D
> [!Question]
> Suppose the customer requires recording the real-time flight trajectory of the quadcopter. How will you revise your design? 

Depending on the accuracy required, the design may not require revision. Given the onboard IMU, the trajectory can be estimated using dead-reckoning. My concern would be *recording* the data, but if the bluetooth connection is fast enough we may simply transmit measurements from the IMU and reconstruct the path on the control device.

# Question Four

## Q4A
> [!Question]
> What is Just-In-Time compilation? What is its main advantage?

Just-In-Time compilation is a technique where code is compiled at run-time by a
JIT compiler. This allows the compiler to optimize the code for the specific
hardware it is running on.

## Q4B
> [!Question]
> What is a namespace? How are namespaces used in .NET?

Namespaces are used to organize code into logical groups and avoid naming conflicts.

## Q4C
> [!Question]
> Explain the main difference between managed and unmanaged code?

Managed code is code that is executed by the .NET runtime, while unmanaged code
is code that is executed by the operating system.

# Question Five
Object Oriented Programming (OOP) creates objects / classes to modularize the code.

## Q5A
> [!Question]
> Explain the main difference between a *class* and an *object*.

An object is a specific instantiation of a class.

## Q5B
> [!Question]
> What are the two purposes of encapsulation in OOP?

Encapsulation is when access to the methods or properties of a class is restricted.

This improves security and allows controlled access to those methods and properties.

## Q5C
> [!Question]
> What is constructor overloading in OOP?

Constructor overloading allows a class to have multiple constructors with different parameter lists.

## Q5D
> [!Question]
> What is a derived class?

A derived class is a class that inherits the properties and methods of its parent class.

## Q5E
> [!Question]
> Explain how protected access is used in OOP.

The `protected` keyword in C# indicates that a method or property may be accessed only by a class or its derived classes.

# Question Six
Code analysis is an important skill for software engineers. Answer the following questions in the context of OOP.

## Q6A
> [!Question]
> What is the purpose of having two keywords `virtual` and `override` in the following piece of C# code?
> ```cs
> namespace system {
>     class Object {
>         public virtual string ToString() {
>             // Default code.
>         }
>     }
> 
>     class Circle : System.Object {
>         public override string ToString() {
>             // Your code here
>         }
>     }
> }
> ```

The `virtual` keyword indicates that a method *may* be overridden, and the `override` keyword indicates that a method is intended to override another. 

## Q6B
> [!Question]
> When do we use sealed classes?

Sealed classes are used when we want to prevent a class from being inherited.

## Q6C
> [!Question]
> How is memory management achieved in .NET? Explain the two major steps to reclaim memory.

C# is a garbage-collected language, meaning that memory is automatically reclaimed when it is no longer needed.

The two steps are:
1. The .NET framework detects that there are no more active references to an object.
2. The garbage collector reclaims the memory used by the object.

## Q6D
> [!Question]
> Write a C# class definition with appropriate comments for managing banking accounts through a C# application. The class with the name `BankAccount` should include the following:
> 
> 1. One private data member `owner` with type `string`.
> 2. One private data member `balance` with type `decimal`.
> 3. One private data member `interestRate` with type `double`.
> 4. One default constructor that accepts a `string`, a `decimal`, and `double`, and uses these to create a new bank account.
> 5. One overloaded constructor that accepts a `string` and a `double` to open a bank account with a balance of `0.0`.
> 6. A public virtual method `Balance` that reads the balance value of the bank account.
> 7. A public virtual method Withdraw that accepts the decimal withdraw amount, and deducts the withdraw amount from the balance amount.
> 8. A public virtual method `Deposit` that accepts the decimal deposit amount, and adds the deposit amount to the balance amount.
> 9. A public virtual method `AddInterests` adds the corresponding interests to the balance amount (e.g. at the end of the year.)

```cs
namespace Q6 {
    class BankAccount {
        private string owner;
        private decimal balance;
        private double interestRate;

        public BankAccount(string owner, decimal balance, double interestRate) {
            this.owner = owner;
            this.balance = balance;
            this.interestRate = interestRate;
        }

        public BankAccount(string owner, double interestRate) {
            this.owner = owner;
            this.balance = 0.0m;
            this.interestRate = interestRate;
        }

        public decimal Balance {
            get { return balance; }
        }

        public void Withdraw(decimal amount) {
            balance -= amount;
        }

        public void Deposit(decimal amount) {
            balance += amount;
        }

        public void AddInterests() {
            balance += (decimal)interestRate * balance;
        }
    }
    
}
```