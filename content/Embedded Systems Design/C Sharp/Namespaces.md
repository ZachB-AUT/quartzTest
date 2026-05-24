---
title: Namespaces
---

Namespaces in C# are used to organize code and prevent naming collisions. They
provide a way to group related types (classes, structs, interfaces, enums,
delegates) under a common name. This makes code more manageable, especially in
larger projects where multiple developers might be working on different parts of
the application.

### Declaring Namespaces

You declare a namespace using the `namespace` keyword, followed by the namespace
name and a block of code enclosed in curly braces.

```csharp
namespace MyApplication
{
    // Classes, structs, etc., go here
    class MyClass
    {
        // ...
    }

    namespace DataAccess
    {
        class UserRepository
        {
            // ...
        }
    }
}
```

In the example above, `MyApplication` is the parent namespace, and `DataAccess`
is a nested namespace. To refer to `MyClass`, you would use
`MyApplication.MyClass`. To refer to `UserRepository`, you would use
`MyApplication.DataAccess.UserRepository`.

### Using Namespaces

To avoid typing the fully qualified name of a type every time you use it, you
can import a namespace using the `using` directive.

```csharp
using System;
using MyApplication.DataAccess;

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello from MyApplication!");
            UserRepository repository = new UserRepository();
            // ...
        }
    }
}
```

The `using System;` directive allows you to use types from the `System`
namespace (like `Console`) without fully qualifying them. Similarly, `using
MyApplication.DataAccess;` allows you to use `UserRepository` directly.

### Global Namespace

Every C# file implicitly belongs to the global namespace if no explicit
namespace is declared. Types declared directly in a file without a `namespace`
keyword reside in the global namespace.

### Namespace Aliases

You can create an alias for a namespace to simplify long namespace names or
resolve ambiguities when two different namespaces contain types with the same
name.

```csharp
using DAL = MyApplication.DataAccess;

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            DAL.UserRepository repository = new DAL.UserRepository();
            // ...
        }
    }
}
```

Here, `DAL` is an alias for `MyApplication.DataAccess`.

### File-Scoped Namespaces (C# 10 and later)

C# 10 introduced file-scoped namespaces, which simplify namespace declarations
by applying the namespace to the entire file without needing curly braces.

```csharp
// MyFile.cs
namespace MyApplication.Utilities;

class Helper
{
    // This class is automatically part of MyApplication.Utilities
}
```

This syntax applies the `MyApplication.Utilities` namespace to all types declared within `MyFile.cs`.