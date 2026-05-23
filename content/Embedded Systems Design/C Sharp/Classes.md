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
}
```


# Abstract Classes
Abstract classes provide a template to instantiate a class, but cannot be instantiated directly.

Attempting to instantiate an abstract class will lead to a compiler error.






