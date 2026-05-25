---
title: Past Paper (2025)
description: This past paper was shown to me by a student who took this course in 2025. If they are reusing questions that is on them.
---
## Question One

> [!Question] 
> Explain the concept of encapsulation in Object-Oriented Programming (OOP) and list two benefits of encapsulation

Encapsulation is the concept of restricting access to data and methods to where they are needed.

The benefits of encapsulation include:
- Improved security.
- Improved ease of writing code.
- Improved east of debugging.

## Question Two

> [!Question] 
> Explain the concept of inheritance in OOP and list two benefits of inheritance.

Inheritance is when a child class "inherits" the methods and properties of a parent class.

Benefits of inheritance include:
- Easier reuse of code common to multiple classes
- Simpler relationships between classes

## Question Three

> [!Question] 
> Explain virtual methods and abstract methods in OOP, and state the main difference between these two types of methods.

Virtual methods are methods implemented by a class that *may* be overridden by a child class, abstract methods are [[Method Signature|method signatures]] which *must* be implemented by any child class.


## Question Four

> [!Question]
> Explain the concept of a namespace, and why it is required in Microsoft .NET framework.

A [[Namespaces|namespace]] is way of separating the names of variables and methods between different sections of code.

This is useful in the Microsoft .NET framework as it allows the user to write code without conflicting with the names of variables and methods internal to the framework.

## Question Five

> [!Question]
> List and discuss three key responsibilities of the Common Language Runtime (CLR) in the Microsoft .NET Framework.

The responsibilities of the Common Language Runtime include:
- Memory Management:
	- The CLR is responsible for managing the memory allocated to a program.
- Garbage Collection:
	- The CLR is responsible for freeing memory regions once they become inaccessible.
- Security:
	- The CLR is used to encrypt the program after compilation, preventing decompilation
- Threading
	- The CLR manages the threads produced by a program, providing thread safety.
- Exception Handling
	- The CLR helps manage and catch exceptions encountered by a program.

More information about the CLR can be found [here](https://learn.microsoft.com/en-us/dotnet/standard/clr).

## Question Six

> [!Question]
> Suppose you are working on an embedded system project for a book publisher, and you are required to write a C# class definition with the name **Book** which includes the following:
> 1. Three private data members, `title`, `author`, and `price` in `string`, `string`, and `double` respectively.
> 2. A constructor that accepts a string `title_in`, another string `author_in`, and a double `price_in` as inputs and saves them to the class data members accordingly.
> 3. A public method `applyDiscount(double a)` reduces the price of the book by the given percentage and updates the price of the book. Note that this method should use the data member `price` for the calculation using the following equation: 
> $$ \text{price}_\text{new} = \text{price}_\text{old} \times (1-a\%)$$
>  Remember to comment your code.

```csharp
namespace EmbeddedExamQuestion {

	public class Book {
		// Class properties
		private string title;
		private string author;
		private double price;
		
		// Constructor
		public Book(string author_in, string title_in, string price_in) {
			this.title = title_in;
			this.author = author_in;
			this.price = price_in;
		}
		
		// Apply discount function
		public void applyDiscount(double a) {
			// Check to make sure `a` actually applies a discount
			if (a > 0) {
				// Apply discount
				this.price = this.price * (1 - 0.01*a);
			}
			return;
		}
	}
}
```