---
title: Extending Classes
---
Like most Object Oriented Classes, C# allows you to "derive" classes. This means creating a new class which inherits the properties and methods of another class.

# Syntax:

```cs
public class A {
    private int _value = 10;

    public class B : A {
        public int GetValue() {
            return _value;
        }
    }
}

public class C : A {
    //    public int GetValue()
    //    {
    //        return _value;
    //    }
}

public class AccessExample {
    public static void Main(string[] args) {
        var b = new A.B();
        Console.WriteLine(b.GetValue());
    }
}
// The example displays the following output:
//       10
```