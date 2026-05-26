---
name: Serial Ports in .NET
---

The documentation for this can be found [Here](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1)

# The SerialPort Class

## Important Methods and Properties

`GetPortNames`:
- [GetPortNames()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.getportnames?view=netframework-4.8.1#system-io-ports-serialport-getportnames) - Returns an array of strings containing the names of all available serial ports.

`Write`:
- [Write()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.write?view=netframework-4.8.1#system-io-ports-serialport-write) - Writes a string to the serial port.

`ReadByte()`:
- [ReadByte()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readbyte?view=netframework-4.8.1#system-io-ports-serialport-readbyte) - Reads a byte from the serial port.



## Class Details

> [!info]- Constructors:
> | Name | Description |
> | --- | --- |
> | [SerialPort()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class. |
> | [SerialPort(IContainer)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor\(system-componentmodel-icontainer\)) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class using the specified [IContainer](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.icontainer?view=netframework-4.8.1) object. |
> | [SerialPort(String, Int32, Parity, Int32, StopBits)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor\(system-string-system-int32-system-io-ports-parity-system-int32-system-io-ports-stopbits\)) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class using the specified port name, baud rate, parity bit, data bits, and stop bit. |
> | [SerialPort(String, Int32, Parity, Int32)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor\(system-string-system-int32-system-io-ports-parity-system-int32\)) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class using the specified port name, baud rate, parity bit, and data bits. |
> | [SerialPort(String, Int32, Parity)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor\(system-string-system-int32-system-io-ports-parity\)) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class using the specified port name, baud rate, and parity bit. |
> | [SerialPort(String, Int32)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor\(system-string-system-int32\)) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class using the specified port name and baud rate. |
> | [SerialPort(String)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.-ctor?view=netframework-4.8.1#system-io-ports-serialport-ctor\(system-string\)) | Initializes a new instance of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) class using the specified port name. |
 
> [!info]- Fields
> | Name | Description |
> | --- | --- |
> | [InfiniteTimeout](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.infinitetimeout?view=netframework-4.8.1#system-io-ports-serialport-infinitetimeout) | Indicates that no time-out should occur. |

> [!info]- Properties
> | Name | Description |
> | --- | --- |
> | [BaseStream](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.basestream?view=netframework-4.8.1#system-io-ports-serialport-basestream) | Gets the underlying [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream?view=netframework-4.8.1) object for a [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) object. |
> | [BaudRate](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.baudrate?view=netframework-4.8.1#system-io-ports-serialport-baudrate) | Gets or sets the serial baud rate. |
> | [BreakState](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.breakstate?view=netframework-4.8.1#system-io-ports-serialport-breakstate) | Gets or sets the break signal state. |
> | [BytesToRead](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.bytestoread?view=netframework-4.8.1#system-io-ports-serialport-bytestoread) | Gets the number of bytes of data in the receive buffer. |
> | [BytesToWrite](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.bytestowrite?view=netframework-4.8.1#system-io-ports-serialport-bytestowrite) | Gets the number of bytes of data in the send buffer. |
> | [CanRaiseEvents](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.canraiseevents?view=netframework-4.8.1#system-componentmodel-component-canraiseevents) | Gets a value indicating whether the component can raise an event.  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [CDHolding](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.cdholding?view=netframework-4.8.1#system-io-ports-serialport-cdholding) | Gets the state of the Carrier Detect line for the port. |
> | [Container](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.container?view=netframework-4.8.1#system-componentmodel-component-container) | Gets the [IContainer](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.icontainer?view=netframework-4.8.1) that contains the [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1).  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [CtsHolding](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.ctsholding?view=netframework-4.8.1#system-io-ports-serialport-ctsholding) | Gets the state of the Clear-to-Send line. |
> | [DataBits](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.databits?view=netframework-4.8.1#system-io-ports-serialport-databits) | Gets or sets the standard length of data bits per byte. |
> | [DesignMode](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.designmode?view=netframework-4.8.1#system-componentmodel-component-designmode) | Gets a value that indicates whether the [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1) is currently in design mode.  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [DiscardNull](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.discardnull?view=netframework-4.8.1#system-io-ports-serialport-discardnull) | Gets or sets a value indicating whether null bytes are ignored when transmitted between the port and the receive buffer. |
> | [DsrHolding](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.dsrholding?view=netframework-4.8.1#system-io-ports-serialport-dsrholding) | Gets the state of the Data Set Ready (DSR) signal. |
> | [DtrEnable](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.dtrenable?view=netframework-4.8.1#system-io-ports-serialport-dtrenable) | Gets or sets a value that enables the Data Terminal Ready (DTR) signal during serial communication. |
> | [Encoding](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.encoding?view=netframework-4.8.1#system-io-ports-serialport-encoding) | Gets or sets the byte encoding for pre- and post-transmission conversion of text. |
> | [Events](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.events?view=netframework-4.8.1#system-componentmodel-component-events) | Gets the list of event handlers that are attached to this [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1).  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [Handshake](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.handshake?view=netframework-4.8.1#system-io-ports-serialport-handshake) | Gets or sets the handshaking protocol for serial port transmission of data using a value from [Handshake](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.handshake?view=netframework-4.8.1). |
> | [IsOpen](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.isopen?view=netframework-4.8.1#system-io-ports-serialport-isopen) | Gets a value indicating the open or closed status of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) object. |
> | [NewLine](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.newline?view=netframework-4.8.1#system-io-ports-serialport-newline) | Gets or sets the value used to interpret the end of a call to the [ReadLine()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readline?view=netframework-4.8.1#system-io-ports-serialport-readline) and [WriteLine(String)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.writeline?view=netframework-4.8.1#system-io-ports-serialport-writeline\(system-string\)) methods. |
> | [Parity](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.parity?view=netframework-4.8.1#system-io-ports-serialport-parity) | Gets or sets the parity-checking protocol. |
> | [ParityReplace](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.parityreplace?view=netframework-4.8.1#system-io-ports-serialport-parityreplace) | Gets or sets the byte that replaces invalid bytes in a data stream when a parity error occurs. |
> | [PortName](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.portname?view=netframework-4.8.1#system-io-ports-serialport-portname) | Gets or sets the port for communications, including but not limited to all available COM ports. |
> | [ReadBufferSize](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readbuffersize?view=netframework-4.8.1#system-io-ports-serialport-readbuffersize) | Gets or sets the size of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) input buffer. |
> | [ReadTimeout](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readtimeout?view=netframework-4.8.1#system-io-ports-serialport-readtimeout) | Gets or sets the number of milliseconds before a time-out occurs when a read operation does not finish. |
> | [ReceivedBytesThreshold](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.receivedbytesthreshold?view=netframework-4.8.1#system-io-ports-serialport-receivedbytesthreshold) | Gets or sets the number of bytes in the internal input buffer before a [DataReceived](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.datareceived?view=netframework-4.8.1#system-io-ports-serialport-datareceived) event occurs. |
> | [RtsEnable](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.rtsenable?view=netframework-4.8.1#system-io-ports-serialport-rtsenable) | Gets or sets a value indicating whether the Request to Send (RTS) signal is enabled during serial communication. |
> | [Site](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.site?view=netframework-4.8.1#system-componentmodel-component-site) | Gets or sets the [ISite](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.isite?view=netframework-4.8.1) of the [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1).  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [StopBits](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.stopbits?view=netframework-4.8.1#system-io-ports-serialport-stopbits) | Gets or sets the standard number of stopbits per byte. |
> | [WriteBufferSize](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.writebuffersize?view=netframework-4.8.1#system-io-ports-serialport-writebuffersize) | Gets or sets the size of the serial port output buffer. |
> | [WriteTimeout](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.writetimeout?view=netframework-4.8.1#system-io-ports-serialport-writetimeout) | Gets or sets the number of milliseconds before a time-out occurs when a write operation does not finish. |

> [!info]- Methods
> | Name | Description |
> | --- | --- |
> | [Close()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.close?view=netframework-4.8.1#system-io-ports-serialport-close) | Closes the port connection, sets the [IsOpen](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.isopen?view=netframework-4.8.1#system-io-ports-serialport-isopen) property to `false`, and disposes of the internal [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream?view=netframework-4.8.1) object. |
> | [CreateObjRef(Type)](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject.createobjref?view=netframework-4.8.1#system-marshalbyrefobject-createobjref\(system-type\)) | Creates an object that contains all the relevant information required to generate a proxy used to communicate with a remote object.  (Inherited from [MarshalByRefObject](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject?view=netframework-4.8.1)) |
> | [DiscardInBuffer()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.discardinbuffer?view=netframework-4.8.1#system-io-ports-serialport-discardinbuffer) | Discards data from the serial driver's receive buffer. |
> | [DiscardOutBuffer()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.discardoutbuffer?view=netframework-4.8.1#system-io-ports-serialport-discardoutbuffer) | Discards data from the serial driver's transmit buffer. |
> | [Dispose()](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.dispose?view=netframework-4.8.1#system-componentmodel-component-dispose) | Releases all resources used by the [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1).  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [Dispose(Boolean)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.dispose?view=netframework-4.8.1#system-io-ports-serialport-dispose\(system-boolean\)) | Releases the unmanaged resources used by the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) and optionally releases the managed resources. |
> | [Equals(Object)](https://learn.microsoft.com/en-us/dotnet/api/system.object.equals?view=netframework-4.8.1#system-object-equals\(system-object\)) | Determines whether the specified object is equal to the current object.  (Inherited from [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=netframework-4.8.1)) |
> | [GetHashCode()](https://learn.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=netframework-4.8.1#system-object-gethashcode) | Serves as the default hash function.  (Inherited from [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=netframework-4.8.1)) |
> | [GetLifetimeService()](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject.getlifetimeservice?view=netframework-4.8.1#system-marshalbyrefobject-getlifetimeservice) | Retrieves the current lifetime service object that controls the lifetime policy for this instance.  (Inherited from [MarshalByRefObject](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject?view=netframework-4.8.1)) |
> | [GetPortNames()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.getportnames?view=netframework-4.8.1#system-io-ports-serialport-getportnames) | Gets an array of serial port names for the current computer. |
> | [GetService(Type)](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.getservice?view=netframework-4.8.1#system-componentmodel-component-getservice\(system-type\)) | Returns an object that represents a service provided by the [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1) or by its [Container](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.container?view=netframework-4.8.1).  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [GetType()](https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=netframework-4.8.1#system-object-gettype) | Gets the [Type](https://learn.microsoft.com/en-us/dotnet/api/system.type?view=netframework-4.8.1) of the current instance.  (Inherited from [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=netframework-4.8.1)) |
> | [InitializeLifetimeService()](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject.initializelifetimeservice?view=netframework-4.8.1#system-marshalbyrefobject-initializelifetimeservice) | Obtains a lifetime service object to control the lifetime policy for this instance.  (Inherited from [MarshalByRefObject](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject?view=netframework-4.8.1)) |
> | [MemberwiseClone()](https://learn.microsoft.com/en-us/dotnet/api/system.object.memberwiseclone?view=netframework-4.8.1#system-object-memberwiseclone) | Creates a shallow copy of the current [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=netframework-4.8.1).  (Inherited from [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=netframework-4.8.1)) |
> | [MemberwiseClone(Boolean)](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject.memberwiseclone?view=netframework-4.8.1#system-marshalbyrefobject-memberwiseclone\(system-boolean\)) | Creates a shallow copy of the current [MarshalByRefObject](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject?view=netframework-4.8.1) object.  (Inherited from [MarshalByRefObject](https://learn.microsoft.com/en-us/dotnet/api/system.marshalbyrefobject?view=netframework-4.8.1)) |
> | [Open()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.open?view=netframework-4.8.1#system-io-ports-serialport-open) | Opens a new serial port connection. |
> | [Read(Byte\[\], Int32, Int32)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.read?view=netframework-4.8.1#system-io-ports-serialport-read\(system-byte\(\)-system-int32-system-int32\)) | Reads a number of bytes from the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) input buffer and writes those bytes into a byte array at the specified offset. |
> | [Read(Char\[\], Int32, Int32)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.read?view=netframework-4.8.1#system-io-ports-serialport-read\(system-char\(\)-system-int32-system-int32\)) | Reads a number of characters from the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) input buffer and writes them into an array of characters at a given offset. |
> | [ReadByte()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readbyte?view=netframework-4.8.1#system-io-ports-serialport-readbyte) | Synchronously reads one byte from the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) input buffer. |
> | [ReadChar()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readchar?view=netframework-4.8.1#system-io-ports-serialport-readchar) | Synchronously reads one character from the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) input buffer. |
> | [ReadExisting()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readexisting?view=netframework-4.8.1#system-io-ports-serialport-readexisting) | Reads all immediately available bytes, based on the encoding, in both the stream and the input buffer of the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) object. |
> | [ReadLine()](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readline?view=netframework-4.8.1#system-io-ports-serialport-readline) | Reads up to the [NewLine](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.newline?view=netframework-4.8.1#system-io-ports-serialport-newline) value in the input buffer. |
> | [ReadTo(String)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.readto?view=netframework-4.8.1#system-io-ports-serialport-readto\(system-string\)) | Reads a string up to the specified `value` in the input buffer. |
> | [ToString()](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.tostring?view=netframework-4.8.1#system-componentmodel-component-tostring) | Returns a [String](https://learn.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.8.1) containing the name of the [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1), if any. This method should not be overridden.  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [Write(Byte\[\], Int32, Int32)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.write?view=netframework-4.8.1#system-io-ports-serialport-write\(system-byte\(\)-system-int32-system-int32\)) | Writes a specified number of bytes to the serial port using data from a buffer. |
> | [Write(Char\[\], Int32, Int32)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.write?view=netframework-4.8.1#system-io-ports-serialport-write\(system-char\(\)-system-int32-system-int32\)) | Writes a specified number of characters to the serial port using data from a buffer. |
> | [Write(String)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.write?view=netframework-4.8.1#system-io-ports-serialport-write\(system-string\)) | Writes the specified string to the serial port. |
> | [WriteLine(String)](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.writeline?view=netframework-4.8.1#system-io-ports-serialport-writeline\(system-string\)) | Writes the specified string and the [NewLine](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.newline?view=netframework-4.8.1#system-io-ports-serialport-newline) value to the output buffer. |

> [!info]- Events
> | Name | Description |
> | --- | --- |
> | [DataReceived](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.datareceived?view=netframework-4.8.1#system-io-ports-serialport-datareceived) | Indicates that data has been received through a port represented by the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) object. |
> | [Disposed](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.disposed?view=netframework-4.8.1#system-componentmodel-component-disposed) | Occurs when the component is disposed by a call to the [Dispose()](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component.dispose?view=netframework-4.8.1#system-componentmodel-component-dispose) method.  (Inherited from [Component](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.component?view=netframework-4.8.1)) |
> | [ErrorReceived](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.errorreceived?view=netframework-4.8.1#system-io-ports-serialport-errorreceived) | Indicates that an error has occurred with a port represented by a [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) object. |
> | [PinChanged](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport.pinchanged?view=netframework-4.8.1#system-io-ports-serialport-pinchanged) | Indicates that a non-data signal event has occurred on the port represented by the [SerialPort](https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=netframework-4.8.1) object. |


# Basic Usage:

To use the serial port, you must include the `SerialPort` class from `System.IO.Ports`

Minimal example:
```cs
using System.IO.Ports;

using var port = new SerialPort("COM3", 9600);
port.Open();

// Send 0xAA
port.Write(new byte[] { 0xAA }, 0, 1); // Byte to send, offset, number of bytes to send

// Read response
Thread.Sleep(100); // crude: wait for device to respond
if (port.BytesToRead > 0)
{
    byte[] response = new byte[port.BytesToRead];
    port.Read(response, 0, response.Length);
    Console.WriteLine(BitConverter.ToString(response));
}
```

# Microsoft Example

```cs
using System;
using System.IO.Ports;
using System.Threading;

public class PortChat {
    static bool _continue;
    static SerialPort _serialPort;

    public static void Main() {
        string name;
        string message;
        StringComparer stringComparer = StringComparer.OrdinalIgnoreCase;
        Thread readThread = new Thread(Read);

        // Create a new SerialPort object with default settings.
        _serialPort = new SerialPort();

        // Allow the user to set the appropriate properties.
        _serialPort.PortName = SetPortName(_serialPort.PortName);
        _serialPort.BaudRate = SetPortBaudRate(_serialPort.BaudRate);
        _serialPort.Parity = SetPortParity(_serialPort.Parity);
        _serialPort.DataBits = SetPortDataBits(_serialPort.DataBits);
        _serialPort.StopBits = SetPortStopBits(_serialPort.StopBits);
        _serialPort.Handshake = SetPortHandshake(_serialPort.Handshake);

        // Set the read/write timeouts
        _serialPort.ReadTimeout = 500;
        _serialPort.WriteTimeout = 500;

        _serialPort.Open();
        _continue = true;
        readThread.Start();

        Console.Write("Name: ");
        name = Console.ReadLine();

        Console.WriteLine("Type QUIT to exit");

        while (_continue) {
            message = Console.ReadLine();

            if (stringComparer.Equals("quit", message)) {
                _continue = false;
            }
            else {
                _serialPort.WriteLine(
                    String.Format("<{0}>: {1}", name, message));
            }
        }

        readThread.Join();
        _serialPort.Close();
    }

    public static void Read() {
        while (_continue) {
            try {
                string message = _serialPort.ReadLine();
                Console.WriteLine(message);
            }
            catch (TimeoutException) { }
        }
    }

    // Display Port values and prompt user to enter a port.
    public static string SetPortName(string defaultPortName) {
        string portName;

        Console.WriteLine("Available Ports:");
        foreach (string s in SerialPort.GetPortNames()) {
            Console.WriteLine("   {0}", s);
        }

        Console.Write("Enter COM port value (Default: {0}): ", defaultPortName);
        portName = Console.ReadLine();

        if (portName == "" || !(portName.ToLower()).StartsWith("com")) {
            portName = defaultPortName;
        }
        return portName;
    }
    // Display BaudRate values and prompt user to enter a value.
    public static int SetPortBaudRate(int defaultPortBaudRate) {
        string baudRate;

        Console.Write("Baud Rate(default:{0}): ", defaultPortBaudRate);
        baudRate = Console.ReadLine();

        if (baudRate == "") {
            baudRate = defaultPortBaudRate.ToString();
        }

        return int.Parse(baudRate);
    }

    // Display PortParity values and prompt user to enter a value.
    public static Parity SetPortParity(Parity defaultPortParity) {
        string parity;

        Console.WriteLine("Available Parity options:");
        foreach (string s in Enum.GetNames(typeof(Parity))) {
            Console.WriteLine("   {0}", s);
        }

        Console.Write("Enter Parity value (Default: {0}):", defaultPortParity.ToString(), true);
        parity = Console.ReadLine();

        if (parity == "") {
            parity = defaultPortParity.ToString();
        }

        return (Parity)Enum.Parse(typeof(Parity), parity, true);
    }
    // Display DataBits values and prompt user to enter a value.
    public static int SetPortDataBits(int defaultPortDataBits) {
        string dataBits;

        Console.Write("Enter DataBits value (Default: {0}): ", defaultPortDataBits);
        dataBits = Console.ReadLine();

        if (dataBits == "") {
            dataBits = defaultPortDataBits.ToString();
        }

        return int.Parse(dataBits.ToUpperInvariant());
    }

    // Display StopBits values and prompt user to enter a value.
    public static StopBits SetPortStopBits(StopBits defaultPortStopBits) {
        string stopBits;

        Console.WriteLine("Available StopBits options:");
        foreach (string s in Enum.GetNames(typeof(StopBits))) {
            Console.WriteLine("   {0}", s);
        }

        Console.Write("Enter StopBits value (None is not supported and \n" +
         "raises an ArgumentOutOfRangeException. \n (Default: {0}):", defaultPortStopBits.ToString());
        stopBits = Console.ReadLine();

        if (stopBits == "" ) {
            stopBits = defaultPortStopBits.ToString();
        }

        return (StopBits)Enum.Parse(typeof(StopBits), stopBits, true);
    }
    public static Handshake SetPortHandshake(Handshake defaultPortHandshake) {
        string handshake;

        Console.WriteLine("Available Handshake options:");
        foreach (string s in Enum.GetNames(typeof(Handshake))) {
            Console.WriteLine("   {0}", s);
        }

        Console.Write("Enter Handshake value (Default: {0}):", defaultPortHandshake.ToString());
        handshake = Console.ReadLine();

        if (handshake == "") {
            handshake = defaultPortHandshake.ToString();
        }

        return (Handshake)Enum.Parse(typeof(Handshake), handshake, true);
    }
}
```
