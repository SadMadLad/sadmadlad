## **Endianness**

Endianness basically means the way the bytes are stored in memory of a multibyte value.

### **Little Endian**

The **Least Significant Byte (LSB)** is stored at the lowest address.
> LSB is the 'right most' byte.

For example, for `0x12345678`, the LSB is `0x78`. It would be stored like:

| **Memory Address** | **Byte**  |
|----------------|-------|
| `0x1000`       | `0x78` |
| `0x1001`       | `0x56` |
| `0x1002`       | `0x34` |
| `0x1003`       | `0x12` |

### **Big Endian**

The **Most Significant Byte (MSB)** is stored at the lowest address.
> MSB is the 'left most' byte.

For example, for `0x12345678`, the MSB is `0x12`. It would be stored like:

| **Memory Address** | **Byte**  |
|----------------|-------|
| `0x1000`       | `0x12` |
| `0x1001`       | `0x34` |
| `0x1002`       | `0x56` |
| `0x1003`       | `0x78` |
