export const quizQuestions: Record<string, { id: string; question: string; options: string[]; correctAnswer: string; explanation: string; }[]> = {
  "Java": [
    {
      "id": "java-1",
      "question": "Which of the following is not a Java feature?",
      "options": [
        "Dynamic",
        "Architecture Neutral",
        "Use of pointers",
        "Object-oriented"
      ],
      "correctAnswer": "Use of pointers",
      "explanation": "The correct answer is Use of pointers. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-2",
      "question": "What is the return type of the hashCode() method in the Object class?",
      "options": [
        "Object",
        "int",
        "long",
        "void"
      ],
      "correctAnswer": "int",
      "explanation": "The correct answer is int. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-3",
      "question": "Which of these cannot be used for a variable name in Java?",
      "options": [
        "identifier",
        "keyword",
        "identifier & keyword",
        "none of the mentioned"
      ],
      "correctAnswer": "keyword",
      "explanation": "The correct answer is keyword. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-4",
      "question": "What is the size of float and double in Java?",
      "options": [
        "32 and 64",
        "32 and 32",
        "64 and 64",
        "64 and 32"
      ],
      "correctAnswer": "32 and 64",
      "explanation": "The correct answer is 32 and 64. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-5",
      "question": "Automatic type conversion is possible in which of the possible cases?",
      "options": [
        "Byte to int",
        "Int to long",
        "Long to int",
        "Short to int"
      ],
      "correctAnswer": "Int to long",
      "explanation": "The correct answer is Int to long. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-6",
      "question": "Find the output of the following code: `int Integer = 24; char String = 'I'; System.out.print(Integer); System.out.print(String);`",
      "options": [
        "Compile error",
        "Throws exception",
        "24I",
        "24 I"
      ],
      "correctAnswer": "24I",
      "explanation": "The correct answer is 24I. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-7",
      "question": "Which class provides system independent server side implementation?",
      "options": [
        "Server",
        "ServerReader",
        "Socket",
        "ServerSocket"
      ],
      "correctAnswer": "ServerSocket",
      "explanation": "The correct answer is ServerSocket. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-8",
      "question": "Which of the following is true about String?",
      "options": [
        "String is mutable",
        "String is immutable",
        "String is a data type",
        "None of the above"
      ],
      "correctAnswer": "String is immutable",
      "explanation": "The correct answer is String is immutable. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-9",
      "question": "What is the default value of a local variable?",
      "options": [
        "null",
        "0",
        "Depends on data type",
        "Not assigned"
      ],
      "correctAnswer": "Not assigned",
      "explanation": "The correct answer is Not assigned. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-10",
      "question": "What is the default value of a boolean variable?",
      "options": [
        "true",
        "false",
        "null",
        "not defined"
      ],
      "correctAnswer": "false",
      "explanation": "The correct answer is false. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-11",
      "question": "Which of these packages contains the exception Stack Overflow in Java?",
      "options": [
        "java.io",
        "java.system",
        "java.lang",
        "java.util"
      ],
      "correctAnswer": "java.lang",
      "explanation": "The correct answer is java.lang. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-12",
      "question": "Which of these keywords is used to make a class?",
      "options": [
        "class",
        "struct",
        "int",
        "none of the mentioned"
      ],
      "correctAnswer": "class",
      "explanation": "The correct answer is class. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-13",
      "question": "Which of these access specifiers can be used for an interface?",
      "options": [
        "public",
        "protected",
        "private",
        "All of the mentioned"
      ],
      "correctAnswer": "public",
      "explanation": "The correct answer is public. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-14",
      "question": "Which of the following is a superclass of every class in Java?",
      "options": [
        "ArrayList",
        "Abstract class",
        "Object class",
        "String"
      ],
      "correctAnswer": "Object class",
      "explanation": "The correct answer is Object class. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-15",
      "question": "Which of the below is valid way to instantiate an array in java?",
      "options": [
        "int arr[] = new int(3);",
        "int []arr = new int[3];",
        "int arr[] = new int[3]();",
        "int arr = new int[3];"
      ],
      "correctAnswer": "int []arr = new int[3];",
      "explanation": "The correct answer is int []arr = new int[3];. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-16",
      "question": "What is the output of Math.floor(3.6)?",
      "options": [
        "3",
        "3.0",
        "4",
        "4.0"
      ],
      "correctAnswer": "3.0",
      "explanation": "The correct answer is 3.0. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-17",
      "question": "Which statement is true regarding an object?",
      "options": [
        "An object is what classes instantiated are from",
        "An object is an instance of a class",
        "An object is a variable",
        "An object is a reference to an attribute"
      ],
      "correctAnswer": "An object is an instance of a class",
      "explanation": "The correct answer is An object is an instance of a class. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-18",
      "question": "What is polymorphism in Java?",
      "options": [
        "Hiding internal details",
        "Showing essential features",
        "Ability to take many forms",
        "Binding data and methods"
      ],
      "correctAnswer": "Ability to take many forms",
      "explanation": "The correct answer is Ability to take many forms. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-19",
      "question": "Which method must be implemented by all threads?",
      "options": [
        "wait()",
        "start()",
        "stop()",
        "run()"
      ],
      "correctAnswer": "run()",
      "explanation": "The correct answer is run(). This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-20",
      "question": "Which of these is not a collection interface?",
      "options": [
        "List",
        "Set",
        "Map",
        "Queue"
      ],
      "correctAnswer": "Map",
      "explanation": "The correct answer is Map. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-21",
      "question": "What is a common concept in Java related to topic 21?",
      "options": [
        "Option A for Java Q21",
        "Option B for Java Q21",
        "Option C for Java Q21",
        "Option D for Java Q21"
      ],
      "correctAnswer": "Option A for Java Q21",
      "explanation": "The correct answer is Option A for Java Q21. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-22",
      "question": "What is a common concept in Java related to topic 22?",
      "options": [
        "Option B for Java Q22",
        "Option A for Java Q22",
        "Option C for Java Q22",
        "Option D for Java Q22"
      ],
      "correctAnswer": "Option A for Java Q22",
      "explanation": "The correct answer is Option A for Java Q22. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-23",
      "question": "What is a common concept in Java related to topic 23?",
      "options": [
        "Option B for Java Q23",
        "Option A for Java Q23",
        "Option C for Java Q23",
        "Option D for Java Q23"
      ],
      "correctAnswer": "Option A for Java Q23",
      "explanation": "The correct answer is Option A for Java Q23. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-24",
      "question": "What is a common concept in Java related to topic 24?",
      "options": [
        "Option A for Java Q24",
        "Option B for Java Q24",
        "Option C for Java Q24",
        "Option D for Java Q24"
      ],
      "correctAnswer": "Option A for Java Q24",
      "explanation": "The correct answer is Option A for Java Q24. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-25",
      "question": "What is a common concept in Java related to topic 25?",
      "options": [
        "Option B for Java Q25",
        "Option A for Java Q25",
        "Option C for Java Q25",
        "Option D for Java Q25"
      ],
      "correctAnswer": "Option A for Java Q25",
      "explanation": "The correct answer is Option A for Java Q25. This is a fundamental concept in Java interviews."
    }
  ],
  "Python": [
    {
      "id": "python-1",
      "question": "Who developed Python Programming Language?",
      "options": [
        "Wick van Rossum",
        "Rasmus Lerdorf",
        "Guido van Rossum",
        "Niene Stom"
      ],
      "correctAnswer": "Guido van Rossum",
      "explanation": "The correct answer is Guido van Rossum. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-2",
      "question": "Which type of Programming does Python support?",
      "options": [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned"
      ],
      "correctAnswer": "all of the mentioned",
      "explanation": "The correct answer is all of the mentioned. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-3",
      "question": "Is Python case sensitive when dealing with identifiers?",
      "options": [
        "no",
        "yes",
        "machine dependent",
        "none of the mentioned"
      ],
      "correctAnswer": "yes",
      "explanation": "The correct answer is yes. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-4",
      "question": "Which of the following is the correct extension of the Python file?",
      "options": [
        ".python",
        ".pl",
        ".py",
        ".p"
      ],
      "correctAnswer": ".py",
      "explanation": "The correct answer is .py. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-5",
      "question": "Is Python code compiled or interpreted?",
      "options": [
        "Python code is both compiled and interpreted",
        "Python code is neither compiled nor interpreted",
        "Python code is only compiled",
        "Python code is only interpreted"
      ],
      "correctAnswer": "Python code is both compiled and interpreted",
      "explanation": "The correct answer is Python code is both compiled and interpreted. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-6",
      "question": "All keywords in Python are in _________",
      "options": [
        "Capitalized",
        "lower case",
        "UPPER CASE",
        "None of the mentioned"
      ],
      "correctAnswer": "None of the mentioned",
      "explanation": "The correct answer is None of the mentioned. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-7",
      "question": "What will be the value of the following Python expression: 4 + 3 % 5",
      "options": [
        "7",
        "2",
        "4",
        "1"
      ],
      "correctAnswer": "7",
      "explanation": "The correct answer is 7. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-8",
      "question": "Which of the following is used to define a block of code in Python language?",
      "options": [
        "Indentation",
        "Key",
        "Brackets",
        "All of the mentioned"
      ],
      "correctAnswer": "Indentation",
      "explanation": "The correct answer is Indentation. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-9",
      "question": "Which keyword is used for function in Python language?",
      "options": [
        "Function",
        "def",
        "Fun",
        "Define"
      ],
      "correctAnswer": "def",
      "explanation": "The correct answer is def. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-10",
      "question": "Which of the following character is used to give single-line comments in Python?",
      "options": [
        "//",
        "#",
        "!",
        "/*"
      ],
      "correctAnswer": "#",
      "explanation": "The correct answer is #. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-11",
      "question": "Which of the following functions can help us to find the version of python that we are currently working on?",
      "options": [
        "sys.version(1)",
        "sys.version(0)",
        "sys.version()",
        "sys.version"
      ],
      "correctAnswer": "sys.version",
      "explanation": "The correct answer is sys.version. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-12",
      "question": "Python supports the creation of anonymous functions at runtime, using a construct called __________",
      "options": [
        "pi",
        "anonymous",
        "lambda",
        "none of the mentioned"
      ],
      "correctAnswer": "lambda",
      "explanation": "The correct answer is lambda. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-13",
      "question": "What is the order of precedence in python?",
      "options": [
        "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
        "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
        "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
        "Parentheses, Exponential, Multiplication, Addition, Division, Subtraction"
      ],
      "correctAnswer": "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
      "explanation": "The correct answer is Parentheses, Exponential, Multiplication, Division, Addition, Subtraction. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-14",
      "question": "What does pip stand for python?",
      "options": [
        "Pip Installs Python",
        "Pip Installs Packages",
        "Preferred Installer Program",
        "All of the mentioned"
      ],
      "correctAnswer": "Preferred Installer Program",
      "explanation": "The correct answer is Preferred Installer Program. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-15",
      "question": "Which of the following is true for variable names in Python?",
      "options": [
        "underscore and ampersand are the only two special characters allowed",
        "unlimited length",
        "all private members must have leading and trailing underscores",
        "none of the mentioned"
      ],
      "correctAnswer": "unlimited length",
      "explanation": "The correct answer is unlimited length. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-16",
      "question": "What are the values of the following Python expressions? `2**(3**2)`, `(2**3)**2`, `2**3**2`",
      "options": [
        "512, 64, 512",
        "512, 512, 512",
        "64, 512, 64",
        "64, 64, 64"
      ],
      "correctAnswer": "512, 64, 512",
      "explanation": "The correct answer is 512, 64, 512. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-17",
      "question": "Which of the following is the truncation division operator in Python?",
      "options": [
        "|",
        "//",
        "/",
        "%"
      ],
      "correctAnswer": "//",
      "explanation": "The correct answer is //. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-18",
      "question": "What is the maximum possible length of an identifier in Python?",
      "options": [
        "31 characters",
        "63 characters",
        "79 characters",
        "none of the mentioned"
      ],
      "correctAnswer": "none of the mentioned",
      "explanation": "The correct answer is none of the mentioned. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-19",
      "question": "Which of the following is not a core data type in Python programming?",
      "options": [
        "Tuples",
        "Lists",
        "Class",
        "Dictionary"
      ],
      "correctAnswer": "Class",
      "explanation": "The correct answer is Class. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-20",
      "question": "Which of these is the definition for packages in Python?",
      "options": [
        "A set of main modules",
        "A folder of python modules",
        "A number of files containing Python definitions and statements",
        "A set of programs making use of Python modules"
      ],
      "correctAnswer": "A folder of python modules",
      "explanation": "The correct answer is A folder of python modules. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-21",
      "question": "What is a common concept in Python related to topic 21?",
      "options": [
        "Option A for Python Q21",
        "Option B for Python Q21",
        "Option C for Python Q21",
        "Option D for Python Q21"
      ],
      "correctAnswer": "Option A for Python Q21",
      "explanation": "The correct answer is Option A for Python Q21. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-22",
      "question": "What is a common concept in Python related to topic 22?",
      "options": [
        "Option D for Python Q22",
        "Option B for Python Q22",
        "Option C for Python Q22",
        "Option A for Python Q22"
      ],
      "correctAnswer": "Option A for Python Q22",
      "explanation": "The correct answer is Option A for Python Q22. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-23",
      "question": "What is a common concept in Python related to topic 23?",
      "options": [
        "Option A for Python Q23",
        "Option B for Python Q23",
        "Option C for Python Q23",
        "Option D for Python Q23"
      ],
      "correctAnswer": "Option A for Python Q23",
      "explanation": "The correct answer is Option A for Python Q23. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-24",
      "question": "What is a common concept in Python related to topic 24?",
      "options": [
        "Option A for Python Q24",
        "Option B for Python Q24",
        "Option C for Python Q24",
        "Option D for Python Q24"
      ],
      "correctAnswer": "Option A for Python Q24",
      "explanation": "The correct answer is Option A for Python Q24. This is a fundamental concept in Python interviews."
    },
    {
      "id": "python-25",
      "question": "What is a common concept in Python related to topic 25?",
      "options": [
        "Option D for Python Q25",
        "Option B for Python Q25",
        "Option C for Python Q25",
        "Option A for Python Q25"
      ],
      "correctAnswer": "Option A for Python Q25",
      "explanation": "The correct answer is Option A for Python Q25. This is a fundamental concept in Python interviews."
    }
  ],
  "SQL": [
    {
      "id": "sql-1",
      "question": "What is the full form of SQL?",
      "options": [
        "Structured Query Language",
        "Structured Query List",
        "Simple Query Language",
        "None of these"
      ],
      "correctAnswer": "Structured Query Language",
      "explanation": "The correct answer is Structured Query Language. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-2",
      "question": "Which of the following is not a valid SQL type?",
      "options": [
        "FLOAT",
        "NUMERIC",
        "DECIMAL",
        "CHARACTER"
      ],
      "correctAnswer": "DECIMAL",
      "explanation": "The correct answer is DECIMAL. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-3",
      "question": "Which of the following is not a valid SQL type?",
      "options": [
        "FLOAT",
        "NUMERIC",
        "DECIMAL",
        "DECIMAL(10,2)"
      ],
      "correctAnswer": "DECIMAL",
      "explanation": "The correct answer is DECIMAL. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-4",
      "question": "Which statement is used to extract data from a database?",
      "options": [
        "EXTRACT",
        "GET",
        "SELECT",
        "OPEN"
      ],
      "correctAnswer": "SELECT",
      "explanation": "The correct answer is SELECT. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-5",
      "question": "Which statement is used to update data in a database?",
      "options": [
        "SAVE AS",
        "MODIFY",
        "SAVE",
        "UPDATE"
      ],
      "correctAnswer": "UPDATE",
      "explanation": "The correct answer is UPDATE. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-6",
      "question": "Which statement is used to delete data from a database?",
      "options": [
        "REMOVE",
        "DELETE",
        "COLLAPSE",
        "DROP"
      ],
      "correctAnswer": "DELETE",
      "explanation": "The correct answer is DELETE. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-7",
      "question": "Which statement is used to insert new data in a database?",
      "options": [
        "INSERT NEW",
        "ADD RECORD",
        "ADD NEW",
        "INSERT INTO"
      ],
      "correctAnswer": "INSERT INTO",
      "explanation": "The correct answer is INSERT INTO. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-8",
      "question": "With SQL, how do you select a column named 'FirstName' from a table named 'Persons'?",
      "options": [
        "EXTRACT FirstName FROM Persons",
        "SELECT FirstName FROM Persons",
        "SELECT Persons.FirstName",
        "None of the above"
      ],
      "correctAnswer": "SELECT FirstName FROM Persons",
      "explanation": "The correct answer is SELECT FirstName FROM Persons. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-9",
      "question": "With SQL, how do you select all the columns from a table named 'Persons'?",
      "options": [
        "SELECT * FROM Persons",
        "SELECT Persons",
        "SELECT *.Persons",
        "SELECT [all] FROM Persons"
      ],
      "correctAnswer": "SELECT * FROM Persons",
      "explanation": "The correct answer is SELECT * FROM Persons. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-10",
      "question": "With SQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' is 'Peter'?",
      "options": [
        "SELECT * FROM Persons WHERE FirstName='Peter'",
        "SELECT [all] FROM Persons WHERE FirstName='Peter'",
        "SELECT * FROM Persons WHERE FirstName<>'Peter'",
        "SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'"
      ],
      "correctAnswer": "SELECT * FROM Persons WHERE FirstName='Peter'",
      "explanation": "The correct answer is SELECT * FROM Persons WHERE FirstName='Peter'. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-11",
      "question": "With SQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' starts with an 'a'?",
      "options": [
        "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
        "SELECT * FROM Persons WHERE FirstName='a'",
        "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
        "SELECT * FROM Persons WHERE FirstName='%a%'"
      ],
      "correctAnswer": "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
      "explanation": "The correct answer is SELECT * FROM Persons WHERE FirstName LIKE 'a%'. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-12",
      "question": "The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are true",
      "options": [
        "True",
        "False",
        "Sometimes",
        "None"
      ],
      "correctAnswer": "True",
      "explanation": "The correct answer is True. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-13",
      "question": "With SQL, how do you select all the records from a table named 'Persons' where the 'FirstName' is 'Peter' and 'LastName' is 'Jackson'?",
      "options": [
        "SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'",
        "SELECT FirstName='Peter', LastName='Jackson' FROM Persons",
        "SELECT * FROM Persons WHERE FirstName<>'Peter' AND LastName<>'Jackson'",
        "None of the above"
      ],
      "correctAnswer": "SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'",
      "explanation": "The correct answer is SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-14",
      "question": "With SQL, how do you select all the records from a table named 'Persons' where the 'LastName' is alphabetically between (and including) 'Hansen' and 'Pettersen'?",
      "options": [
        "SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'",
        "SELECT * FROM Persons WHERE LastName>'Hansen' AND LastName<'Pettersen'",
        "SELECT LastName>'Hansen' AND LastName<'Pettersen' FROM Persons",
        "None of the above"
      ],
      "correctAnswer": "SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'",
      "explanation": "The correct answer is SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-15",
      "question": "Which SQL statement is used to return only different values?",
      "options": [
        "SELECT DISTINCT",
        "SELECT UNIQUE",
        "SELECT DIFFERENT",
        "None of the above"
      ],
      "correctAnswer": "SELECT DISTINCT",
      "explanation": "The correct answer is SELECT DISTINCT. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-16",
      "question": "Which SQL keyword is used to sort the result-set?",
      "options": [
        "SORT BY",
        "ORDER BY",
        "SORT",
        "ORDER"
      ],
      "correctAnswer": "ORDER BY",
      "explanation": "The correct answer is ORDER BY. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-17",
      "question": "With SQL, how can you return all the records from a table named 'Persons' sorted descending by 'FirstName'?",
      "options": [
        "SELECT * FROM Persons ORDER BY FirstName DESC",
        "SELECT * FROM Persons ORDER FirstName DESC",
        "SELECT * FROM Persons SORT BY 'FirstName' DESC",
        "SELECT * FROM Persons ORDER BY 'FirstName' DESC"
      ],
      "correctAnswer": "SELECT * FROM Persons ORDER BY FirstName DESC",
      "explanation": "The correct answer is SELECT * FROM Persons ORDER BY FirstName DESC. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-18",
      "question": "With SQL, how can you insert a new record into the 'Persons' table?",
      "options": [
        "INSERT INTO Persons VALUES ('Jimmy', 'Jackson')",
        "INSERT ('Jimmy', 'Jackson') INTO Persons",
        "INSERT VALUES ('Jimmy', 'Jackson') INTO Persons",
        "None of the above"
      ],
      "correctAnswer": "INSERT INTO Persons VALUES ('Jimmy', 'Jackson')",
      "explanation": "The correct answer is INSERT INTO Persons VALUES ('Jimmy', 'Jackson'). This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-19",
      "question": "How can you change 'Hansen' into 'Nilsen' in the 'LastName' column in the Persons table?",
      "options": [
        "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
        "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
        "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
        "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen'"
      ],
      "correctAnswer": "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "explanation": "The correct answer is UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-20",
      "question": "With SQL, how can you delete the records where the 'FirstName' is 'Peter' in the Persons Table?",
      "options": [
        "DELETE FROM Persons WHERE FirstName = 'Peter'",
        "DELETE FirstName='Peter' FROM Persons",
        "DELETE ROW FirstName='Peter' FROM Persons",
        "None of the above"
      ],
      "correctAnswer": "DELETE FROM Persons WHERE FirstName = 'Peter'",
      "explanation": "The correct answer is DELETE FROM Persons WHERE FirstName = 'Peter'. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-21",
      "question": "The MIN() function returns the:",
      "options": [
        "smallest value of the selected column",
        "largest value of the selected column",
        "number of records in a table",
        "average value of a numeric column"
      ],
      "correctAnswer": "smallest value of the selected column",
      "explanation": "The correct answer is smallest value of the selected column. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-22",
      "question": "What is a common concept in SQL related to topic 22?",
      "options": [
        "Option A for SQL Q22",
        "Option B for SQL Q22",
        "Option C for SQL Q22",
        "Option D for SQL Q22"
      ],
      "correctAnswer": "Option A for SQL Q22",
      "explanation": "The correct answer is Option A for SQL Q22. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-23",
      "question": "What is a common concept in SQL related to topic 23?",
      "options": [
        "Option A for SQL Q23",
        "Option B for SQL Q23",
        "Option C for SQL Q23",
        "Option D for SQL Q23"
      ],
      "correctAnswer": "Option A for SQL Q23",
      "explanation": "The correct answer is Option A for SQL Q23. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-24",
      "question": "What is a common concept in SQL related to topic 24?",
      "options": [
        "Option A for SQL Q24",
        "Option B for SQL Q24",
        "Option C for SQL Q24",
        "Option D for SQL Q24"
      ],
      "correctAnswer": "Option A for SQL Q24",
      "explanation": "The correct answer is Option A for SQL Q24. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-25",
      "question": "What is a common concept in SQL related to topic 25?",
      "options": [
        "Option C for SQL Q25",
        "Option B for SQL Q25",
        "Option A for SQL Q25",
        "Option D for SQL Q25"
      ],
      "correctAnswer": "Option A for SQL Q25",
      "explanation": "The correct answer is Option A for SQL Q25. This is a fundamental concept in SQL interviews."
    }
  ],
  "React": [
    {
      "id": "react-1",
      "question": "What is React?",
      "options": [
        "A framework for building user interfaces",
        "A library for building user interfaces",
        "A database management system",
        "A programming language"
      ],
      "correctAnswer": "A library for building user interfaces",
      "explanation": "The correct answer is A library for building user interfaces. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-2",
      "question": "Who developed React?",
      "options": [
        "Google",
        "Facebook",
        "Microsoft",
        "Twitter"
      ],
      "correctAnswer": "Facebook",
      "explanation": "The correct answer is Facebook. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-3",
      "question": "Which of the following is used to pass data to a component from outside?",
      "options": [
        "setState",
        "render with arguments",
        "props",
        "PropTypes"
      ],
      "correctAnswer": "props",
      "explanation": "The correct answer is props. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-4",
      "question": "What does JSX stand for?",
      "options": [
        "JavaScript XML",
        "JavaScript Syntax Extension",
        "Both A and B",
        "None of the above"
      ],
      "correctAnswer": "JavaScript XML",
      "explanation": "The correct answer is JavaScript XML. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-5",
      "question": "What is the purpose of the virtual DOM in React?",
      "options": [
        "To directly manipulate the actual DOM",
        "To increase the size of the application",
        "To optimize rendering performance",
        "To replace HTML"
      ],
      "correctAnswer": "To optimize rendering performance",
      "explanation": "The correct answer is To optimize rendering performance. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-6",
      "question": "Which hook is used to perform side effects in functional components?",
      "options": [
        "useState",
        "useEffect",
        "useContext",
        "useReducer"
      ],
      "correctAnswer": "useEffect",
      "explanation": "The correct answer is useEffect. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-7",
      "question": "What is a state in React?",
      "options": [
        "A persistent storage",
        "An internal data store (object) of a component",
        "A way to pass data between components",
        "A CSS styling approach"
      ],
      "correctAnswer": "An internal data store (object) of a component",
      "explanation": "The correct answer is An internal data store (object) of a component. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-8",
      "question": "Which method is called after a component is rendered for the first time?",
      "options": [
        "componentDidUpdate",
        "componentDidMount",
        "componentWillMount",
        "componentWillUpdate"
      ],
      "correctAnswer": "componentDidMount",
      "explanation": "The correct answer is componentDidMount. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-9",
      "question": "How do you create a React app using the command line?",
      "options": [
        "npx create-react-app my-app",
        "npm install react-app",
        "npm run create-react-app",
        "react new my-app"
      ],
      "correctAnswer": "npx create-react-app my-app",
      "explanation": "The correct answer is npx create-react-app my-app. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-10",
      "question": "What is the use of the map() function in React?",
      "options": [
        "To render a list of elements",
        "To update the state",
        "To bind functions",
        "To fetch data"
      ],
      "correctAnswer": "To render a list of elements",
      "explanation": "The correct answer is To render a list of elements. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-11",
      "question": "Which of the following is a way to handle state in React?",
      "options": [
        "Redux",
        "Context API",
        "useState",
        "All of the above"
      ],
      "correctAnswer": "All of the above",
      "explanation": "The correct answer is All of the above. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-12",
      "question": "What is the default port for the React development server?",
      "options": [
        "3000",
        "8080",
        "5000",
        "4200"
      ],
      "correctAnswer": "3000",
      "explanation": "The correct answer is 3000. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-13",
      "question": "What is a higher-order component (HOC) in React?",
      "options": [
        "A component that renders another component",
        "A function that takes a component and returns a new component",
        "A component that manages state",
        "A component with advanced styling"
      ],
      "correctAnswer": "A function that takes a component and returns a new component",
      "explanation": "The correct answer is A function that takes a component and returns a new component. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-14",
      "question": "Which keyword is used to create a class component?",
      "options": [
        "function",
        "class",
        "createClass",
        "component"
      ],
      "correctAnswer": "class",
      "explanation": "The correct answer is class. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-15",
      "question": "What is the significance of keys in React lists?",
      "options": [
        "They improve styling",
        "They help React identify which items have changed, are added, or are removed",
        "They make the list items clickable",
        "They store the state of the list"
      ],
      "correctAnswer": "They help React identify which items have changed, are added, or are removed",
      "explanation": "The correct answer is They help React identify which items have changed, are added, or are removed. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-16",
      "question": "What does the useState hook return?",
      "options": [
        "Only the current state",
        "Only a function to update the state",
        "An array with the current state and a function to update it",
        "An object with the state and updater"
      ],
      "correctAnswer": "An array with the current state and a function to update it",
      "explanation": "The correct answer is An array with the current state and a function to update it. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-17",
      "question": "How do you conditionally render a component in React?",
      "options": [
        "Using if-else statements",
        "Using the ternary operator",
        "Using logical AND (&&)",
        "All of the above"
      ],
      "correctAnswer": "All of the above",
      "explanation": "The correct answer is All of the above. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-18",
      "question": "What is the purpose of React Router?",
      "options": [
        "To manage state",
        "To navigate between different views/pages in a React application",
        "To make API calls",
        "To style components"
      ],
      "correctAnswer": "To navigate between different views/pages in a React application",
      "explanation": "The correct answer is To navigate between different views/pages in a React application. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-19",
      "question": "Which of the following is TRUE about functional components?",
      "options": [
        "They cannot use state",
        "They do not have lifecycle methods",
        "They are simpler and easier to test",
        "Both A and B (prior to hooks)"
      ],
      "correctAnswer": "They are simpler and easier to test",
      "explanation": "The correct answer is They are simpler and easier to test. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-20",
      "question": "What does strict mode do in React?",
      "options": [
        "Enforces strict typing",
        "Highlights potential problems in an application",
        "Prevents components from re-rendering",
        "Automatically formats code"
      ],
      "correctAnswer": "Highlights potential problems in an application",
      "explanation": "The correct answer is Highlights potential problems in an application. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-21",
      "question": "What is a common concept in React related to topic 21?",
      "options": [
        "Option C for React Q21",
        "Option B for React Q21",
        "Option A for React Q21",
        "Option D for React Q21"
      ],
      "correctAnswer": "Option A for React Q21",
      "explanation": "The correct answer is Option A for React Q21. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-22",
      "question": "What is a common concept in React related to topic 22?",
      "options": [
        "Option B for React Q22",
        "Option A for React Q22",
        "Option C for React Q22",
        "Option D for React Q22"
      ],
      "correctAnswer": "Option A for React Q22",
      "explanation": "The correct answer is Option A for React Q22. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-23",
      "question": "What is a common concept in React related to topic 23?",
      "options": [
        "Option D for React Q23",
        "Option B for React Q23",
        "Option C for React Q23",
        "Option A for React Q23"
      ],
      "correctAnswer": "Option A for React Q23",
      "explanation": "The correct answer is Option A for React Q23. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-24",
      "question": "What is a common concept in React related to topic 24?",
      "options": [
        "Option A for React Q24",
        "Option B for React Q24",
        "Option C for React Q24",
        "Option D for React Q24"
      ],
      "correctAnswer": "Option A for React Q24",
      "explanation": "The correct answer is Option A for React Q24. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-25",
      "question": "What is a common concept in React related to topic 25?",
      "options": [
        "Option C for React Q25",
        "Option B for React Q25",
        "Option A for React Q25",
        "Option D for React Q25"
      ],
      "correctAnswer": "Option A for React Q25",
      "explanation": "The correct answer is Option A for React Q25. This is a fundamental concept in React interviews."
    }
  ]
};
