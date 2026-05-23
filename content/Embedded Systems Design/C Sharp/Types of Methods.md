---
title: Types of Methods
---
# Virtual Methods
Virtual methods provide an example implementation of a method that *may* be overridden.
In order to override an abstract method, the new method must have the same [[Method Signature|method signature]] as the provided method.

# Abstract Methods
- Abstract methods provide an interface that *must* be overridden by a child class.
- Abstract methods must be declared inside an [[Classes#Abstract Classes|abstract class]].
- Abstract methods may have different method signatures to the original method!

```csharp
public abstract class A {
	public string name {get; set;}
	
	public abstract string Greet() {
		return ("Hello " + this.name);
	}
}

public class B : A {
	public override string Greet() {
		return ("Greetings " + this.name);
	}
}
```
# Instance Methods
Instance methods are methods that belong to a specific instance of a class.  (i.e. creating using the `new` keyword)

Instance methods have access to things particular to that specific instance (object), and can be used to store state regarding **that specific object.**

# Static Methods
Static methods allow usage of properties and methods without instantiating an instance of a class.

This is useful whenever you do not need access to a "state" to do something.

```csharp
public class PiMultiplier {
	private static final double pi = 3.1415926;
	
	// Dont need to instantiate a PiMultiplier to use this function!
	public static double multiplyByPi(double input) {
		return this.pi * input; 
	}
	
	// The result depends strictly on the input parameters.
    // It doesn't need to retain any "memory" or state between calls.
    public static double CelsiusToKelvin(double celsius)
    {
        return celsius + 273.15;
    }
}
```

Static methods also allow you to create "factory" methods, allowing multiple descriptive ways of building an instance of an object.

```csharp
public class ComplexNumber
{
    public double Real { get; set; }
    public double Imaginary { get; set; }

    // Private constructor forces usage of the static factory methods
    private ComplexNumber(double real, double imaginary)
    {
        Real = real;
        Imaginary = imaginary;
    }

    // Static Factory Method for Cartesian Coordinates
    public static ComplexNumber FromCartesian(double real, double imaginary)
    {
        return new ComplexNumber(real, imaginary);
    }

    // Static Factory Method for Polar Coordinates
    public static ComplexNumber FromPolar(double magnitude, double angleRad)
    {
        double real = magnitude * Math.Cos(angleRad);
        double imaginary = magnitude * Math.Sin(angleRad);
        return new ComplexNumber(real, imaginary);
    }
}

// Usage (much clearer than 'new ComplexNumber(...)')
var point1 = ComplexNumber.FromCartesian(3.0, 4.0);
var point2 = ComplexNumber.FromPolar(5.0, Math.PI / 4);
```

Static methods also allow you to share information between all instances of a class:

```csharp
class Connection {
	public static int _connectionCount = 0;
	
	public Connection() {
		_connectionCount++;
	}
	
	// All instances of Connection will share the same connectionCount value!
	public static int GetConnectionCount() {
		return _connectionCount;
	}
}
```
