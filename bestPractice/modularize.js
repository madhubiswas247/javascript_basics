/*
Modularize — one function per task
This is a general programming best practice — making sure that you create functions that fulfill one 
job at a time makes it easy for other developers to debug and change your code without having to 
scan through all the code to work out what code block performs what function.

This also applies to creating helper functions for common tasks. If you find yourself doing the 
same thing in several different functions then it is a good idea to create a more generic helper
 function instead, and reuse that functionality where it is needed.

Also, one way in and one way out makes more sense than forking the code in the function itself.
 Say you wanted to write a helper function to create new links.
*/