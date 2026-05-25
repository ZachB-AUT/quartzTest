---
title: Types in C#
---
In C# all variables have a *type*, which determines what kind of data they store. There are two types of type, *value* and *reference*.

# Value Types

Value types store a value. 

Here is the list of value types in C#:

| C# type keyword | .NET type      |
| --------------- | -------------- |
| bool            | System.Boolean |
| byte            | System.Byte    |
| sbyte           | System.SByte   |
| char            | System.Char    |
| decimal         | System.Decimal |
| double          | System.Double  |
| float           | System.Single  |
| int             | System.Int32   |
| uint            | System.UInt32  |
| nint            | System.IntPtr  |
| nuint           | System.UIntPtr |
| long            | System.Int64   |
| ulong           | System.UInt64  |
| short           | System.Int16   |
| ushort          | System.UInt16  |
# Reference Types

Reference types store a reference to something (kind of like a pointer in C)
Notably, all objects (instances of a [[Classes|class]]) are reference types!

Here is the list of reference types in C#:

| C# type keyword | .NET type       |
| --------------- | --------------- |
| object          | System.Object   |
| string          | System.String   |
| delegate        | System.Delegate |
| dynamic         | System.Object   |

# The "var" keyword

The `var` keyword allows C# to perform something called *type inference*, where the runtime decides what type something is based on what value is assigned to it.

For example:

```csharp
var a = 1;        // a becomes an integer
var b = 1.123;    // b becomes a float
var c = "Hello!"; // c becomes a string
```

Note that this can only be used when the compiler knows what the type is upon compilation!

The following is not legal:
```csharp
int add(var a, var b) {
	return a+b;
}
```
