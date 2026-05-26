# Question One

## Q1A
> [!Question]
> Describe how does a microcontroller work when the power is switched on.
> (4 marks)

## Q1B
> [!Question]
> What is the main difference between microcontroller unit (MCU) and microprocessor unit (MPU)? List three advantages of MPU as compared to MCU.
> (4 marks)

## Q1C
> [!Question]
> Define what is Von Neumann Architecture and explain its main disadvantage.
> (2 marks)

---

# Question Two

## Q2A
> [!Question]
> Is SPI an asynchronous interface? Justify your answer using Figure 1.
> (2 marks)

## Q2B
> [!Question]
> Does SPI support duplex communications? Justify your answer using Figure 1.
> (2 marks)

## Q2C
> [!Question]
> Explain the key steps to enable the master device to communicate to a particular slave device.
> (4 marks)

## Q2D
> [!Question]
> As compared to RS485, explain the two key disadvantage of SPI.
> (2 marks)

---

# Question Three

## Q3A
> [!Question]
> Suppose you have chosen the following components from Element 14: (1) MIKROE-1298 GSM ClickTM Board; (2) MIKROE-1032 GPS ClickTM Board (3) Ledex ® Solenoid C5-273-B-1. The datasheets for the above devices are provided in the appendices (Appendix A-C). Using the datasheets, together with the specifications for the smart lock, draw a hardware block diagram including all major components, and where applicable, the connection type between the MCU and the peripheral (e.g. logic level / analogue voltage / SPI / UART / I2C).
> (4 marks)

## Q3B
> [!Question]
> Take the smart lock as an example, state four considerations when selecting a microcontroller for this embedded digital system.
> (4 marks)

## Q3C
> [!Question]
> What are the five common architectures for a software development? Which one is more suitable to the smart lock? Justify your answer.
> (3 marks)

## Q3D
> [!Question]
> Suppose the customer requires adding an alarm to your first design of the smart lock. How will you revise your design?
> (4 marks)

---

# Question Four

## Q4A
> [!Question]
> List the three major components in .NET and briefly explain each one.
> (3 marks)

## Q4B
> [!Question]
> What are the four advantages of .NET framework.
> (4 marks)

## Q4C
> [!Question]
> Explain the two key words used for passing by reference in C#, and the key difference between them.
> (3 marks)

---

# Question Five

## Q5A
> [!Question]
> Explain the main difference between properties and methods of a class.
> (2 marks)

## Q5B
> [!Question]
> Why do we need encapsulation in OOP?
> (2 marks)

## Q5C
> [!Question]
> When do we use the get and set methods in a class?
> (2 marks)

## Q5D
> [!Question]
> Why do we need inheritance in OOP?
> (2 marks)

## Q5E
> [!Question]
> Explain static data members in a class and given one example on how they are used.
> (2 marks)

---

# Question Six

## Q6A
> [!Question]
> Consider the following piece of C# code, will the compiler show an error? Justify your answer.
> 
> ```csharp
> int age;
> Console.WriteLine(age);
> ```
> (1 mark)

## Q6B
> [!Question]
> In the following piece of C# code, we have three abstract methods. Explain the precautions we need to take when creating an object of this class?
> 
> ```csharp
> abstract class WashingMachine
> {
>     public WashingMachine()
>     {
>         // Code to initialize the class goes here.
>     }
>     abstract public void Wash();
>     abstract public void Rinse(int loadSize);
>     abstract public long Spin(int speed);
> }
> ```
> (3 marks)

## Q6C
> [!Question]
> Explain the two steps of garbage collection algorithm in .NET memory management.
> (4 marks)

## Q6D
> [!Question]
> Write a C# class definition with appropriate comments for controlling the light intensity of the lamp on the AUT application board through a C# application. The class with a name LampControl should include the following:
> 
> 1. One private data member, a SerialPort object.
> 2. A constructor that accepts one string (the COM port) and one int (the baudrate), which then uses these parameters to create a new SerialPort object, and then open it.
> 3. A public method called setIntensity, which accepts one double, the desired intensity level (0->100%) of the lamp, and then sends the required intensity to the MCU using the SerialPort object, and uart_Tx (below). The intensity level is sent as an unsigned 8 bit integer (0 = 0%, 255 = 100%).
> 4. A public method called readLightIntensity, which returns the current light intensity of the lamp, as measured by the MCU. The method should query the MCU using the SerialPort object and uart_Rx (below), and return the light intensity as a double, where light intensity is 1.68 times the value of the received byte.
> 5. A private method called uart_Tx, which accepts one unsigned 8 bit integer. The method sends two bytes to the MCU via the Serial Port: 0x01 (which is the set instruction) and the data contained in the argument.
> 6. A private method called uart_Rx, which accepts no arguments, and returns 1 unsigned 8 bit integer. The method sends one byte to the MCU via the Serial Port (0x02, which is the read instruction) and receives one 8 bit unsigned integer, which it then returns.
> (7 marks)