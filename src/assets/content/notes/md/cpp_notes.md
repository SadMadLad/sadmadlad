## **Some diary notes for C++**

- `htonl` translates to **Host to Network Long**. Basically takes care of the endianness of the input host depending on the machine.
- `htons` is **Host to Network Short**. Same as `htonl` but for shorter integer.
- `void*` is a generic pointer type. "A pointer to something but I don't know it's type yet". `malloc` in C returns a `void*` type. In C++, you can use `std::any` or templates as well in pace of `void*`.
- **Basic Memory Manipulation Functions**. `bzero`: Fill n bytes of the memory with 0. `bcopy`: Copy n bytes from source to dest. `bcomp`: Compare two blocks of memory. Returns 0 if equal, nonzero if not. `memset`: Fill n bytes of the memory with `c`, not 0. `memcpy`: Copy n bytes. Faster than `bzero` but unsafe. `memmove`: Copy memory safely even when regions overlap. `memcmp`: Compare memory.
- `size_t` is **unsigned integer type**. `ssize_t` is **signed_integer_type**.
- `EINTR` is an error code for **Error, Interrupted**.
- `MSG_WAITALL` is a flag passed to `recv` to make sure that all amount is received.
- `ETIMEDOUT` is reached when the server is unable to respond to client's SYN segment. `ECONNREFUSED` is raised when server is not responding to any requests. `ENETUNREACH` is raised by intermediary router if the SYN segment is not reaching the server.
