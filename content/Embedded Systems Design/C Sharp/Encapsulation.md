In object oriented programming, encapsulation allows data and methods to have their access restricted.

# C# Encapsulation Keywords

| Keyword              | Accessibility                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `public`             | Anywhere                                                                                   |
| `private`            | Accessible from within the same class                                                      |
| `protected`          | Accessible from within the same class or child classes                                     |
| `internal`           | Accessible from within the same project                                                    |
| `protected internal` | Accessible within the same<br>assembly or in derived classes<br>(even in other assemblies) |
| `private protected`  | Accessible only within the same class *and* derived classes within the same assembly       |

## Examples

```cs
using System;

namespace EncapsulationDemo
{
    public class BankAccount
    {
        // 1. Private fields - hidden from direct external access
        private string _accountHolder;
        private decimal _balance;

        // 2. Encapsulated Property with validation
        public string AccountHolder
        {
            get { return _accountHolder; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Account holder name cannot be empty.");
                }
                _accountHolder = value;
            }
        }

        // Read-only property (only has a getter)
        // This ensures the balance can only be modified via Deposit and Withdraw methods
        public decimal Balance
        {
            get { return _balance; }
        }

        // Constructor
        public BankAccount(string accountHolder, decimal initialDeposit)
        {
            AccountHolder = accountHolder; // Uses the property setter for validation
            
            if (initialDeposit < 0)
            {
                throw new ArgumentException("Initial deposit cannot be negative.");
            }
            _balance = initialDeposit;
        }

        // 3. Public methods to control how the private state is modified
        public void Deposit(decimal amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentException("Deposit amount must be positive.");
            }
            _balance += amount;
            Console.WriteLine($"Successfully deposited ${amount}. Current balance: ${_balance}");
        }

        public void Withdraw(decimal amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentException("Withdrawal amount must be positive.");
            }
            
            if (amount > _balance)
            {
                Console.WriteLine("Transaction Declined: Insufficient funds.");
                return;
            }

            _balance -= amount;
            Console.WriteLine($"Successfully withdrew ${amount}. Current balance: ${_balance}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Create a new bank account
                BankAccount account = new BankAccount("Zach", 500.00m);
                Console.WriteLine($"Account created for {account.AccountHolder} with balance: ${account.Balance}");

                // Try to deposit money (Allowed)
                account.Deposit(150.50m);

                // Try to withdraw money (Allowed)
                account.Withdraw(100.00m);

                // Try to perform an invalid withdrawal (Handled safely by business logic)
                account.Withdraw(1000.00m);

                // Compilation Errors if you try to bypass encapsulation:
                // account._balance = 1000000.00m; // Error: '_balance' is inaccessible due to its protection level
                // account.Balance = 1000000.00m;  // Error: Property 'Balance' cannot be assigned to because it is read-only
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
```

# Get and Set Methods in C\#

Get and Set methods allow controlled access to private properties.
This allows us to validate inputs and give outputs in specified formats.

C# has dedicated syntax for get and set methods, as you can see below.

```cs
public class User
{
    // The private backing field
    private string _username;

    // The public property containing the get/set accessors
    public string Username
    {
        get 
        { 
            return _username; 
        }
        set 
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                throw new ArgumentException("Username cannot be empty.");
            }
            // 'value' is a built-in keyword representing the incoming data
            _username = value; 
        }
    }
}
```

C# also has ways of *automatically* generating get and set methods:

```cs
public class Product
{
    // The compiler automatically handles the get and set logic
    public string Name { get; set; }
    public decimal Price { get; set; }
}
```

and omitting the `set;` allows the creation of read-only properties:

```cs
public class Product
{
    // The compiler automatically handles the get and set logic
    public string Name { get; }
    public decimal Price { get; }
}
```

Along with `init` only setting:

```cs
public class Product
{
    public string Name { get; init; }
    public decimal Price { get; init; }
}
```

With `init`, you are able to *set* the value of the variable only on initialization, for example:

```cs
public class Product
{
    public string Name { get; init; }
    public decimal Price { get; init; }
}

// This works
Product cheese = new() {name = "Cheese", price = 5.00};

// But this does not!
cheese.Name = "Milk"; // <- This will throw a compiler error
```
