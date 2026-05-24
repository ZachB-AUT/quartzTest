---
title: Classes
---
# Declaring classes

```csharp
using System;

namespace ClassDemo {
	public class Computer {
		private string _brand;

		public string Model { get; set; }
		public int RamGB { get; set; }
		public string Processor { get; set; }

		public string Brand {
        get => _brand;
        set {
            if (string.IsNullOrWhiteSpace(value))
            {
                throw new ArgumentException("Brand cannot be empty or null.");
            }
            _brand = value;
        }
    }
    public Computer(string brand, string model, string processor, int ramGB) {
        Brand = brand;
        Model = model;
        Processor = processor;
        RamGB = ramGB;
    }
}
```

# Abstract Classes
Abstract classes provide a template to instantiate a class, but cannot be instantiated directly.

Attempting to instantiate an abstract class will lead to a compiler error.
Abstract methods can only be created inside abstract classes.

```cs
// Animal cannot be instantiated directly!
public abstract class Animal
{
    public string Name { get; set; }

    public abstract void MakeSound();

    public void Sleep()
    {
        Console.WriteLine($"{Name} is sleeping.");
    }
}

// But Dog can!
public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}
```

