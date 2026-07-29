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
        "Option C for Java Q21",
        "Option B for Java Q21",
        "Option A for Java Q21",
        "Option D for Java Q21"
      ],
      "correctAnswer": "Option A for Java Q21",
      "explanation": "The correct answer is Option A for Java Q21. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-22",
      "question": "What is a common concept in Java related to topic 22?",
      "options": [
        "Option D for Java Q22",
        "Option B for Java Q22",
        "Option C for Java Q22",
        "Option A for Java Q22"
      ],
      "correctAnswer": "Option A for Java Q22",
      "explanation": "The correct answer is Option A for Java Q22. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-23",
      "question": "What is a common concept in Java related to topic 23?",
      "options": [
        "Option A for Java Q23",
        "Option B for Java Q23",
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
        "Option C for Java Q24",
        "Option B for Java Q24",
        "Option A for Java Q24",
        "Option D for Java Q24"
      ],
      "correctAnswer": "Option A for Java Q24",
      "explanation": "The correct answer is Option A for Java Q24. This is a fundamental concept in Java interviews."
    },
    {
      "id": "java-25",
      "question": "What is a common concept in Java related to topic 25?",
      "options": [
        "Option C for Java Q25",
        "Option B for Java Q25",
        "Option A for Java Q25",
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
        "Option D for Python Q21",
        "Option B for Python Q21",
        "Option C for Python Q21",
        "Option A for Python Q21"
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
        "Option B for Python Q23",
        "Option A for Python Q23",
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
        "Option B for Python Q24",
        "Option A for Python Q24",
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
        "Option C for Python Q25",
        "Option B for Python Q25",
        "Option A for Python Q25",
        "Option D for Python Q25"
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
        "Option C for SQL Q23",
        "Option B for SQL Q23",
        "Option A for SQL Q23",
        "Option D for SQL Q23"
      ],
      "correctAnswer": "Option A for SQL Q23",
      "explanation": "The correct answer is Option A for SQL Q23. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-24",
      "question": "What is a common concept in SQL related to topic 24?",
      "options": [
        "Option D for SQL Q24",
        "Option B for SQL Q24",
        "Option C for SQL Q24",
        "Option A for SQL Q24"
      ],
      "correctAnswer": "Option A for SQL Q24",
      "explanation": "The correct answer is Option A for SQL Q24. This is a fundamental concept in SQL interviews."
    },
    {
      "id": "sql-25",
      "question": "What is a common concept in SQL related to topic 25?",
      "options": [
        "Option A for SQL Q25",
        "Option B for SQL Q25",
        "Option C for SQL Q25",
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
        "Option B for React Q21",
        "Option A for React Q21",
        "Option C for React Q21",
        "Option D for React Q21"
      ],
      "correctAnswer": "Option A for React Q21",
      "explanation": "The correct answer is Option A for React Q21. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-22",
      "question": "What is a common concept in React related to topic 22?",
      "options": [
        "Option D for React Q22",
        "Option B for React Q22",
        "Option C for React Q22",
        "Option A for React Q22"
      ],
      "correctAnswer": "Option A for React Q22",
      "explanation": "The correct answer is Option A for React Q22. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-23",
      "question": "What is a common concept in React related to topic 23?",
      "options": [
        "Option B for React Q23",
        "Option A for React Q23",
        "Option C for React Q23",
        "Option D for React Q23"
      ],
      "correctAnswer": "Option A for React Q23",
      "explanation": "The correct answer is Option A for React Q23. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-24",
      "question": "What is a common concept in React related to topic 24?",
      "options": [
        "Option D for React Q24",
        "Option B for React Q24",
        "Option C for React Q24",
        "Option A for React Q24"
      ],
      "correctAnswer": "Option A for React Q24",
      "explanation": "The correct answer is Option A for React Q24. This is a fundamental concept in React interviews."
    },
    {
      "id": "react-25",
      "question": "What is a common concept in React related to topic 25?",
      "options": [
        "Option B for React Q25",
        "Option A for React Q25",
        "Option C for React Q25",
        "Option D for React Q25"
      ],
      "correctAnswer": "Option A for React Q25",
      "explanation": "The correct answer is Option A for React Q25. This is a fundamental concept in React interviews."
    }
  ],
  "HTML": [
    {
      "id": "html-1",
      "question": "What is a common concept in HTML related to topic 1?",
      "options": [
        "Option B for HTML Q1",
        "Option A for HTML Q1",
        "Option C for HTML Q1",
        "Option D for HTML Q1"
      ],
      "correctAnswer": "Option A for HTML Q1",
      "explanation": "The correct answer is Option A for HTML Q1. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-2",
      "question": "What is a common concept in HTML related to topic 2?",
      "options": [
        "Option A for HTML Q2",
        "Option B for HTML Q2",
        "Option C for HTML Q2",
        "Option D for HTML Q2"
      ],
      "correctAnswer": "Option A for HTML Q2",
      "explanation": "The correct answer is Option A for HTML Q2. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-3",
      "question": "What is a common concept in HTML related to topic 3?",
      "options": [
        "Option A for HTML Q3",
        "Option B for HTML Q3",
        "Option C for HTML Q3",
        "Option D for HTML Q3"
      ],
      "correctAnswer": "Option A for HTML Q3",
      "explanation": "The correct answer is Option A for HTML Q3. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-4",
      "question": "What is a common concept in HTML related to topic 4?",
      "options": [
        "Option C for HTML Q4",
        "Option B for HTML Q4",
        "Option A for HTML Q4",
        "Option D for HTML Q4"
      ],
      "correctAnswer": "Option A for HTML Q4",
      "explanation": "The correct answer is Option A for HTML Q4. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-5",
      "question": "What is a common concept in HTML related to topic 5?",
      "options": [
        "Option C for HTML Q5",
        "Option B for HTML Q5",
        "Option A for HTML Q5",
        "Option D for HTML Q5"
      ],
      "correctAnswer": "Option A for HTML Q5",
      "explanation": "The correct answer is Option A for HTML Q5. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-6",
      "question": "What is a common concept in HTML related to topic 6?",
      "options": [
        "Option D for HTML Q6",
        "Option B for HTML Q6",
        "Option C for HTML Q6",
        "Option A for HTML Q6"
      ],
      "correctAnswer": "Option A for HTML Q6",
      "explanation": "The correct answer is Option A for HTML Q6. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-7",
      "question": "What is a common concept in HTML related to topic 7?",
      "options": [
        "Option D for HTML Q7",
        "Option B for HTML Q7",
        "Option C for HTML Q7",
        "Option A for HTML Q7"
      ],
      "correctAnswer": "Option A for HTML Q7",
      "explanation": "The correct answer is Option A for HTML Q7. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-8",
      "question": "What is a common concept in HTML related to topic 8?",
      "options": [
        "Option D for HTML Q8",
        "Option B for HTML Q8",
        "Option C for HTML Q8",
        "Option A for HTML Q8"
      ],
      "correctAnswer": "Option A for HTML Q8",
      "explanation": "The correct answer is Option A for HTML Q8. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-9",
      "question": "What is a common concept in HTML related to topic 9?",
      "options": [
        "Option A for HTML Q9",
        "Option B for HTML Q9",
        "Option C for HTML Q9",
        "Option D for HTML Q9"
      ],
      "correctAnswer": "Option A for HTML Q9",
      "explanation": "The correct answer is Option A for HTML Q9. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-10",
      "question": "What is a common concept in HTML related to topic 10?",
      "options": [
        "Option A for HTML Q10",
        "Option B for HTML Q10",
        "Option C for HTML Q10",
        "Option D for HTML Q10"
      ],
      "correctAnswer": "Option A for HTML Q10",
      "explanation": "The correct answer is Option A for HTML Q10. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-11",
      "question": "What is a common concept in HTML related to topic 11?",
      "options": [
        "Option D for HTML Q11",
        "Option B for HTML Q11",
        "Option C for HTML Q11",
        "Option A for HTML Q11"
      ],
      "correctAnswer": "Option A for HTML Q11",
      "explanation": "The correct answer is Option A for HTML Q11. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-12",
      "question": "What is a common concept in HTML related to topic 12?",
      "options": [
        "Option C for HTML Q12",
        "Option B for HTML Q12",
        "Option A for HTML Q12",
        "Option D for HTML Q12"
      ],
      "correctAnswer": "Option A for HTML Q12",
      "explanation": "The correct answer is Option A for HTML Q12. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-13",
      "question": "What is a common concept in HTML related to topic 13?",
      "options": [
        "Option D for HTML Q13",
        "Option B for HTML Q13",
        "Option C for HTML Q13",
        "Option A for HTML Q13"
      ],
      "correctAnswer": "Option A for HTML Q13",
      "explanation": "The correct answer is Option A for HTML Q13. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-14",
      "question": "What is a common concept in HTML related to topic 14?",
      "options": [
        "Option C for HTML Q14",
        "Option B for HTML Q14",
        "Option A for HTML Q14",
        "Option D for HTML Q14"
      ],
      "correctAnswer": "Option A for HTML Q14",
      "explanation": "The correct answer is Option A for HTML Q14. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-15",
      "question": "What is a common concept in HTML related to topic 15?",
      "options": [
        "Option B for HTML Q15",
        "Option A for HTML Q15",
        "Option C for HTML Q15",
        "Option D for HTML Q15"
      ],
      "correctAnswer": "Option A for HTML Q15",
      "explanation": "The correct answer is Option A for HTML Q15. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-16",
      "question": "What is a common concept in HTML related to topic 16?",
      "options": [
        "Option C for HTML Q16",
        "Option B for HTML Q16",
        "Option A for HTML Q16",
        "Option D for HTML Q16"
      ],
      "correctAnswer": "Option A for HTML Q16",
      "explanation": "The correct answer is Option A for HTML Q16. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-17",
      "question": "What is a common concept in HTML related to topic 17?",
      "options": [
        "Option A for HTML Q17",
        "Option B for HTML Q17",
        "Option C for HTML Q17",
        "Option D for HTML Q17"
      ],
      "correctAnswer": "Option A for HTML Q17",
      "explanation": "The correct answer is Option A for HTML Q17. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-18",
      "question": "What is a common concept in HTML related to topic 18?",
      "options": [
        "Option B for HTML Q18",
        "Option A for HTML Q18",
        "Option C for HTML Q18",
        "Option D for HTML Q18"
      ],
      "correctAnswer": "Option A for HTML Q18",
      "explanation": "The correct answer is Option A for HTML Q18. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-19",
      "question": "What is a common concept in HTML related to topic 19?",
      "options": [
        "Option C for HTML Q19",
        "Option B for HTML Q19",
        "Option A for HTML Q19",
        "Option D for HTML Q19"
      ],
      "correctAnswer": "Option A for HTML Q19",
      "explanation": "The correct answer is Option A for HTML Q19. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-20",
      "question": "What is a common concept in HTML related to topic 20?",
      "options": [
        "Option A for HTML Q20",
        "Option B for HTML Q20",
        "Option C for HTML Q20",
        "Option D for HTML Q20"
      ],
      "correctAnswer": "Option A for HTML Q20",
      "explanation": "The correct answer is Option A for HTML Q20. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-21",
      "question": "What is a common concept in HTML related to topic 21?",
      "options": [
        "Option B for HTML Q21",
        "Option A for HTML Q21",
        "Option C for HTML Q21",
        "Option D for HTML Q21"
      ],
      "correctAnswer": "Option A for HTML Q21",
      "explanation": "The correct answer is Option A for HTML Q21. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-22",
      "question": "What is a common concept in HTML related to topic 22?",
      "options": [
        "Option B for HTML Q22",
        "Option A for HTML Q22",
        "Option C for HTML Q22",
        "Option D for HTML Q22"
      ],
      "correctAnswer": "Option A for HTML Q22",
      "explanation": "The correct answer is Option A for HTML Q22. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-23",
      "question": "What is a common concept in HTML related to topic 23?",
      "options": [
        "Option B for HTML Q23",
        "Option A for HTML Q23",
        "Option C for HTML Q23",
        "Option D for HTML Q23"
      ],
      "correctAnswer": "Option A for HTML Q23",
      "explanation": "The correct answer is Option A for HTML Q23. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-24",
      "question": "What is a common concept in HTML related to topic 24?",
      "options": [
        "Option B for HTML Q24",
        "Option A for HTML Q24",
        "Option C for HTML Q24",
        "Option D for HTML Q24"
      ],
      "correctAnswer": "Option A for HTML Q24",
      "explanation": "The correct answer is Option A for HTML Q24. This is a fundamental concept in HTML interviews."
    },
    {
      "id": "html-25",
      "question": "What is a common concept in HTML related to topic 25?",
      "options": [
        "Option C for HTML Q25",
        "Option B for HTML Q25",
        "Option A for HTML Q25",
        "Option D for HTML Q25"
      ],
      "correctAnswer": "Option A for HTML Q25",
      "explanation": "The correct answer is Option A for HTML Q25. This is a fundamental concept in HTML interviews."
    }
  ],
  "CSS": [
    {
      "id": "css-1",
      "question": "What is a common concept in CSS related to topic 1?",
      "options": [
        "Option D for CSS Q1",
        "Option B for CSS Q1",
        "Option C for CSS Q1",
        "Option A for CSS Q1"
      ],
      "correctAnswer": "Option A for CSS Q1",
      "explanation": "The correct answer is Option A for CSS Q1. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-2",
      "question": "What is a common concept in CSS related to topic 2?",
      "options": [
        "Option B for CSS Q2",
        "Option A for CSS Q2",
        "Option C for CSS Q2",
        "Option D for CSS Q2"
      ],
      "correctAnswer": "Option A for CSS Q2",
      "explanation": "The correct answer is Option A for CSS Q2. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-3",
      "question": "What is a common concept in CSS related to topic 3?",
      "options": [
        "Option B for CSS Q3",
        "Option A for CSS Q3",
        "Option C for CSS Q3",
        "Option D for CSS Q3"
      ],
      "correctAnswer": "Option A for CSS Q3",
      "explanation": "The correct answer is Option A for CSS Q3. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-4",
      "question": "What is a common concept in CSS related to topic 4?",
      "options": [
        "Option D for CSS Q4",
        "Option B for CSS Q4",
        "Option C for CSS Q4",
        "Option A for CSS Q4"
      ],
      "correctAnswer": "Option A for CSS Q4",
      "explanation": "The correct answer is Option A for CSS Q4. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-5",
      "question": "What is a common concept in CSS related to topic 5?",
      "options": [
        "Option C for CSS Q5",
        "Option B for CSS Q5",
        "Option A for CSS Q5",
        "Option D for CSS Q5"
      ],
      "correctAnswer": "Option A for CSS Q5",
      "explanation": "The correct answer is Option A for CSS Q5. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-6",
      "question": "What is a common concept in CSS related to topic 6?",
      "options": [
        "Option A for CSS Q6",
        "Option B for CSS Q6",
        "Option C for CSS Q6",
        "Option D for CSS Q6"
      ],
      "correctAnswer": "Option A for CSS Q6",
      "explanation": "The correct answer is Option A for CSS Q6. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-7",
      "question": "What is a common concept in CSS related to topic 7?",
      "options": [
        "Option D for CSS Q7",
        "Option B for CSS Q7",
        "Option C for CSS Q7",
        "Option A for CSS Q7"
      ],
      "correctAnswer": "Option A for CSS Q7",
      "explanation": "The correct answer is Option A for CSS Q7. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-8",
      "question": "What is a common concept in CSS related to topic 8?",
      "options": [
        "Option C for CSS Q8",
        "Option B for CSS Q8",
        "Option A for CSS Q8",
        "Option D for CSS Q8"
      ],
      "correctAnswer": "Option A for CSS Q8",
      "explanation": "The correct answer is Option A for CSS Q8. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-9",
      "question": "What is a common concept in CSS related to topic 9?",
      "options": [
        "Option C for CSS Q9",
        "Option B for CSS Q9",
        "Option A for CSS Q9",
        "Option D for CSS Q9"
      ],
      "correctAnswer": "Option A for CSS Q9",
      "explanation": "The correct answer is Option A for CSS Q9. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-10",
      "question": "What is a common concept in CSS related to topic 10?",
      "options": [
        "Option B for CSS Q10",
        "Option A for CSS Q10",
        "Option C for CSS Q10",
        "Option D for CSS Q10"
      ],
      "correctAnswer": "Option A for CSS Q10",
      "explanation": "The correct answer is Option A for CSS Q10. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-11",
      "question": "What is a common concept in CSS related to topic 11?",
      "options": [
        "Option B for CSS Q11",
        "Option A for CSS Q11",
        "Option C for CSS Q11",
        "Option D for CSS Q11"
      ],
      "correctAnswer": "Option A for CSS Q11",
      "explanation": "The correct answer is Option A for CSS Q11. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-12",
      "question": "What is a common concept in CSS related to topic 12?",
      "options": [
        "Option A for CSS Q12",
        "Option B for CSS Q12",
        "Option C for CSS Q12",
        "Option D for CSS Q12"
      ],
      "correctAnswer": "Option A for CSS Q12",
      "explanation": "The correct answer is Option A for CSS Q12. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-13",
      "question": "What is a common concept in CSS related to topic 13?",
      "options": [
        "Option D for CSS Q13",
        "Option B for CSS Q13",
        "Option C for CSS Q13",
        "Option A for CSS Q13"
      ],
      "correctAnswer": "Option A for CSS Q13",
      "explanation": "The correct answer is Option A for CSS Q13. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-14",
      "question": "What is a common concept in CSS related to topic 14?",
      "options": [
        "Option B for CSS Q14",
        "Option A for CSS Q14",
        "Option C for CSS Q14",
        "Option D for CSS Q14"
      ],
      "correctAnswer": "Option A for CSS Q14",
      "explanation": "The correct answer is Option A for CSS Q14. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-15",
      "question": "What is a common concept in CSS related to topic 15?",
      "options": [
        "Option B for CSS Q15",
        "Option A for CSS Q15",
        "Option C for CSS Q15",
        "Option D for CSS Q15"
      ],
      "correctAnswer": "Option A for CSS Q15",
      "explanation": "The correct answer is Option A for CSS Q15. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-16",
      "question": "What is a common concept in CSS related to topic 16?",
      "options": [
        "Option C for CSS Q16",
        "Option B for CSS Q16",
        "Option A for CSS Q16",
        "Option D for CSS Q16"
      ],
      "correctAnswer": "Option A for CSS Q16",
      "explanation": "The correct answer is Option A for CSS Q16. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-17",
      "question": "What is a common concept in CSS related to topic 17?",
      "options": [
        "Option A for CSS Q17",
        "Option B for CSS Q17",
        "Option C for CSS Q17",
        "Option D for CSS Q17"
      ],
      "correctAnswer": "Option A for CSS Q17",
      "explanation": "The correct answer is Option A for CSS Q17. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-18",
      "question": "What is a common concept in CSS related to topic 18?",
      "options": [
        "Option D for CSS Q18",
        "Option B for CSS Q18",
        "Option C for CSS Q18",
        "Option A for CSS Q18"
      ],
      "correctAnswer": "Option A for CSS Q18",
      "explanation": "The correct answer is Option A for CSS Q18. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-19",
      "question": "What is a common concept in CSS related to topic 19?",
      "options": [
        "Option D for CSS Q19",
        "Option B for CSS Q19",
        "Option C for CSS Q19",
        "Option A for CSS Q19"
      ],
      "correctAnswer": "Option A for CSS Q19",
      "explanation": "The correct answer is Option A for CSS Q19. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-20",
      "question": "What is a common concept in CSS related to topic 20?",
      "options": [
        "Option A for CSS Q20",
        "Option B for CSS Q20",
        "Option C for CSS Q20",
        "Option D for CSS Q20"
      ],
      "correctAnswer": "Option A for CSS Q20",
      "explanation": "The correct answer is Option A for CSS Q20. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-21",
      "question": "What is a common concept in CSS related to topic 21?",
      "options": [
        "Option D for CSS Q21",
        "Option B for CSS Q21",
        "Option C for CSS Q21",
        "Option A for CSS Q21"
      ],
      "correctAnswer": "Option A for CSS Q21",
      "explanation": "The correct answer is Option A for CSS Q21. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-22",
      "question": "What is a common concept in CSS related to topic 22?",
      "options": [
        "Option A for CSS Q22",
        "Option B for CSS Q22",
        "Option C for CSS Q22",
        "Option D for CSS Q22"
      ],
      "correctAnswer": "Option A for CSS Q22",
      "explanation": "The correct answer is Option A for CSS Q22. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-23",
      "question": "What is a common concept in CSS related to topic 23?",
      "options": [
        "Option B for CSS Q23",
        "Option A for CSS Q23",
        "Option C for CSS Q23",
        "Option D for CSS Q23"
      ],
      "correctAnswer": "Option A for CSS Q23",
      "explanation": "The correct answer is Option A for CSS Q23. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-24",
      "question": "What is a common concept in CSS related to topic 24?",
      "options": [
        "Option A for CSS Q24",
        "Option B for CSS Q24",
        "Option C for CSS Q24",
        "Option D for CSS Q24"
      ],
      "correctAnswer": "Option A for CSS Q24",
      "explanation": "The correct answer is Option A for CSS Q24. This is a fundamental concept in CSS interviews."
    },
    {
      "id": "css-25",
      "question": "What is a common concept in CSS related to topic 25?",
      "options": [
        "Option A for CSS Q25",
        "Option B for CSS Q25",
        "Option C for CSS Q25",
        "Option D for CSS Q25"
      ],
      "correctAnswer": "Option A for CSS Q25",
      "explanation": "The correct answer is Option A for CSS Q25. This is a fundamental concept in CSS interviews."
    }
  ],
  "JavaScript": [
    {
      "id": "javascript-1",
      "question": "What is a common concept in JavaScript related to topic 1?",
      "options": [
        "Option A for JavaScript Q1",
        "Option B for JavaScript Q1",
        "Option C for JavaScript Q1",
        "Option D for JavaScript Q1"
      ],
      "correctAnswer": "Option A for JavaScript Q1",
      "explanation": "The correct answer is Option A for JavaScript Q1. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-2",
      "question": "What is a common concept in JavaScript related to topic 2?",
      "options": [
        "Option B for JavaScript Q2",
        "Option A for JavaScript Q2",
        "Option C for JavaScript Q2",
        "Option D for JavaScript Q2"
      ],
      "correctAnswer": "Option A for JavaScript Q2",
      "explanation": "The correct answer is Option A for JavaScript Q2. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-3",
      "question": "What is a common concept in JavaScript related to topic 3?",
      "options": [
        "Option D for JavaScript Q3",
        "Option B for JavaScript Q3",
        "Option C for JavaScript Q3",
        "Option A for JavaScript Q3"
      ],
      "correctAnswer": "Option A for JavaScript Q3",
      "explanation": "The correct answer is Option A for JavaScript Q3. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-4",
      "question": "What is a common concept in JavaScript related to topic 4?",
      "options": [
        "Option D for JavaScript Q4",
        "Option B for JavaScript Q4",
        "Option C for JavaScript Q4",
        "Option A for JavaScript Q4"
      ],
      "correctAnswer": "Option A for JavaScript Q4",
      "explanation": "The correct answer is Option A for JavaScript Q4. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-5",
      "question": "What is a common concept in JavaScript related to topic 5?",
      "options": [
        "Option C for JavaScript Q5",
        "Option B for JavaScript Q5",
        "Option A for JavaScript Q5",
        "Option D for JavaScript Q5"
      ],
      "correctAnswer": "Option A for JavaScript Q5",
      "explanation": "The correct answer is Option A for JavaScript Q5. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-6",
      "question": "What is a common concept in JavaScript related to topic 6?",
      "options": [
        "Option D for JavaScript Q6",
        "Option B for JavaScript Q6",
        "Option C for JavaScript Q6",
        "Option A for JavaScript Q6"
      ],
      "correctAnswer": "Option A for JavaScript Q6",
      "explanation": "The correct answer is Option A for JavaScript Q6. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-7",
      "question": "What is a common concept in JavaScript related to topic 7?",
      "options": [
        "Option A for JavaScript Q7",
        "Option B for JavaScript Q7",
        "Option C for JavaScript Q7",
        "Option D for JavaScript Q7"
      ],
      "correctAnswer": "Option A for JavaScript Q7",
      "explanation": "The correct answer is Option A for JavaScript Q7. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-8",
      "question": "What is a common concept in JavaScript related to topic 8?",
      "options": [
        "Option A for JavaScript Q8",
        "Option B for JavaScript Q8",
        "Option C for JavaScript Q8",
        "Option D for JavaScript Q8"
      ],
      "correctAnswer": "Option A for JavaScript Q8",
      "explanation": "The correct answer is Option A for JavaScript Q8. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-9",
      "question": "What is a common concept in JavaScript related to topic 9?",
      "options": [
        "Option B for JavaScript Q9",
        "Option A for JavaScript Q9",
        "Option C for JavaScript Q9",
        "Option D for JavaScript Q9"
      ],
      "correctAnswer": "Option A for JavaScript Q9",
      "explanation": "The correct answer is Option A for JavaScript Q9. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-10",
      "question": "What is a common concept in JavaScript related to topic 10?",
      "options": [
        "Option D for JavaScript Q10",
        "Option B for JavaScript Q10",
        "Option C for JavaScript Q10",
        "Option A for JavaScript Q10"
      ],
      "correctAnswer": "Option A for JavaScript Q10",
      "explanation": "The correct answer is Option A for JavaScript Q10. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-11",
      "question": "What is a common concept in JavaScript related to topic 11?",
      "options": [
        "Option D for JavaScript Q11",
        "Option B for JavaScript Q11",
        "Option C for JavaScript Q11",
        "Option A for JavaScript Q11"
      ],
      "correctAnswer": "Option A for JavaScript Q11",
      "explanation": "The correct answer is Option A for JavaScript Q11. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-12",
      "question": "What is a common concept in JavaScript related to topic 12?",
      "options": [
        "Option D for JavaScript Q12",
        "Option B for JavaScript Q12",
        "Option C for JavaScript Q12",
        "Option A for JavaScript Q12"
      ],
      "correctAnswer": "Option A for JavaScript Q12",
      "explanation": "The correct answer is Option A for JavaScript Q12. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-13",
      "question": "What is a common concept in JavaScript related to topic 13?",
      "options": [
        "Option B for JavaScript Q13",
        "Option A for JavaScript Q13",
        "Option C for JavaScript Q13",
        "Option D for JavaScript Q13"
      ],
      "correctAnswer": "Option A for JavaScript Q13",
      "explanation": "The correct answer is Option A for JavaScript Q13. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-14",
      "question": "What is a common concept in JavaScript related to topic 14?",
      "options": [
        "Option A for JavaScript Q14",
        "Option B for JavaScript Q14",
        "Option C for JavaScript Q14",
        "Option D for JavaScript Q14"
      ],
      "correctAnswer": "Option A for JavaScript Q14",
      "explanation": "The correct answer is Option A for JavaScript Q14. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-15",
      "question": "What is a common concept in JavaScript related to topic 15?",
      "options": [
        "Option D for JavaScript Q15",
        "Option B for JavaScript Q15",
        "Option C for JavaScript Q15",
        "Option A for JavaScript Q15"
      ],
      "correctAnswer": "Option A for JavaScript Q15",
      "explanation": "The correct answer is Option A for JavaScript Q15. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-16",
      "question": "What is a common concept in JavaScript related to topic 16?",
      "options": [
        "Option A for JavaScript Q16",
        "Option B for JavaScript Q16",
        "Option C for JavaScript Q16",
        "Option D for JavaScript Q16"
      ],
      "correctAnswer": "Option A for JavaScript Q16",
      "explanation": "The correct answer is Option A for JavaScript Q16. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-17",
      "question": "What is a common concept in JavaScript related to topic 17?",
      "options": [
        "Option A for JavaScript Q17",
        "Option B for JavaScript Q17",
        "Option C for JavaScript Q17",
        "Option D for JavaScript Q17"
      ],
      "correctAnswer": "Option A for JavaScript Q17",
      "explanation": "The correct answer is Option A for JavaScript Q17. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-18",
      "question": "What is a common concept in JavaScript related to topic 18?",
      "options": [
        "Option C for JavaScript Q18",
        "Option B for JavaScript Q18",
        "Option A for JavaScript Q18",
        "Option D for JavaScript Q18"
      ],
      "correctAnswer": "Option A for JavaScript Q18",
      "explanation": "The correct answer is Option A for JavaScript Q18. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-19",
      "question": "What is a common concept in JavaScript related to topic 19?",
      "options": [
        "Option A for JavaScript Q19",
        "Option B for JavaScript Q19",
        "Option C for JavaScript Q19",
        "Option D for JavaScript Q19"
      ],
      "correctAnswer": "Option A for JavaScript Q19",
      "explanation": "The correct answer is Option A for JavaScript Q19. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-20",
      "question": "What is a common concept in JavaScript related to topic 20?",
      "options": [
        "Option C for JavaScript Q20",
        "Option B for JavaScript Q20",
        "Option A for JavaScript Q20",
        "Option D for JavaScript Q20"
      ],
      "correctAnswer": "Option A for JavaScript Q20",
      "explanation": "The correct answer is Option A for JavaScript Q20. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-21",
      "question": "What is a common concept in JavaScript related to topic 21?",
      "options": [
        "Option C for JavaScript Q21",
        "Option B for JavaScript Q21",
        "Option A for JavaScript Q21",
        "Option D for JavaScript Q21"
      ],
      "correctAnswer": "Option A for JavaScript Q21",
      "explanation": "The correct answer is Option A for JavaScript Q21. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-22",
      "question": "What is a common concept in JavaScript related to topic 22?",
      "options": [
        "Option A for JavaScript Q22",
        "Option B for JavaScript Q22",
        "Option C for JavaScript Q22",
        "Option D for JavaScript Q22"
      ],
      "correctAnswer": "Option A for JavaScript Q22",
      "explanation": "The correct answer is Option A for JavaScript Q22. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-23",
      "question": "What is a common concept in JavaScript related to topic 23?",
      "options": [
        "Option C for JavaScript Q23",
        "Option B for JavaScript Q23",
        "Option A for JavaScript Q23",
        "Option D for JavaScript Q23"
      ],
      "correctAnswer": "Option A for JavaScript Q23",
      "explanation": "The correct answer is Option A for JavaScript Q23. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-24",
      "question": "What is a common concept in JavaScript related to topic 24?",
      "options": [
        "Option D for JavaScript Q24",
        "Option B for JavaScript Q24",
        "Option C for JavaScript Q24",
        "Option A for JavaScript Q24"
      ],
      "correctAnswer": "Option A for JavaScript Q24",
      "explanation": "The correct answer is Option A for JavaScript Q24. This is a fundamental concept in JavaScript interviews."
    },
    {
      "id": "javascript-25",
      "question": "What is a common concept in JavaScript related to topic 25?",
      "options": [
        "Option D for JavaScript Q25",
        "Option B for JavaScript Q25",
        "Option C for JavaScript Q25",
        "Option A for JavaScript Q25"
      ],
      "correctAnswer": "Option A for JavaScript Q25",
      "explanation": "The correct answer is Option A for JavaScript Q25. This is a fundamental concept in JavaScript interviews."
    }
  ],
  ".NET": [
    {
      "id": ".net-1",
      "question": "What is a common concept in .NET related to topic 1?",
      "options": [
        "Option D for .NET Q1",
        "Option B for .NET Q1",
        "Option C for .NET Q1",
        "Option A for .NET Q1"
      ],
      "correctAnswer": "Option A for .NET Q1",
      "explanation": "The correct answer is Option A for .NET Q1. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-2",
      "question": "What is a common concept in .NET related to topic 2?",
      "options": [
        "Option B for .NET Q2",
        "Option A for .NET Q2",
        "Option C for .NET Q2",
        "Option D for .NET Q2"
      ],
      "correctAnswer": "Option A for .NET Q2",
      "explanation": "The correct answer is Option A for .NET Q2. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-3",
      "question": "What is a common concept in .NET related to topic 3?",
      "options": [
        "Option D for .NET Q3",
        "Option B for .NET Q3",
        "Option C for .NET Q3",
        "Option A for .NET Q3"
      ],
      "correctAnswer": "Option A for .NET Q3",
      "explanation": "The correct answer is Option A for .NET Q3. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-4",
      "question": "What is a common concept in .NET related to topic 4?",
      "options": [
        "Option A for .NET Q4",
        "Option B for .NET Q4",
        "Option C for .NET Q4",
        "Option D for .NET Q4"
      ],
      "correctAnswer": "Option A for .NET Q4",
      "explanation": "The correct answer is Option A for .NET Q4. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-5",
      "question": "What is a common concept in .NET related to topic 5?",
      "options": [
        "Option C for .NET Q5",
        "Option B for .NET Q5",
        "Option A for .NET Q5",
        "Option D for .NET Q5"
      ],
      "correctAnswer": "Option A for .NET Q5",
      "explanation": "The correct answer is Option A for .NET Q5. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-6",
      "question": "What is a common concept in .NET related to topic 6?",
      "options": [
        "Option D for .NET Q6",
        "Option B for .NET Q6",
        "Option C for .NET Q6",
        "Option A for .NET Q6"
      ],
      "correctAnswer": "Option A for .NET Q6",
      "explanation": "The correct answer is Option A for .NET Q6. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-7",
      "question": "What is a common concept in .NET related to topic 7?",
      "options": [
        "Option C for .NET Q7",
        "Option B for .NET Q7",
        "Option A for .NET Q7",
        "Option D for .NET Q7"
      ],
      "correctAnswer": "Option A for .NET Q7",
      "explanation": "The correct answer is Option A for .NET Q7. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-8",
      "question": "What is a common concept in .NET related to topic 8?",
      "options": [
        "Option C for .NET Q8",
        "Option B for .NET Q8",
        "Option A for .NET Q8",
        "Option D for .NET Q8"
      ],
      "correctAnswer": "Option A for .NET Q8",
      "explanation": "The correct answer is Option A for .NET Q8. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-9",
      "question": "What is a common concept in .NET related to topic 9?",
      "options": [
        "Option B for .NET Q9",
        "Option A for .NET Q9",
        "Option C for .NET Q9",
        "Option D for .NET Q9"
      ],
      "correctAnswer": "Option A for .NET Q9",
      "explanation": "The correct answer is Option A for .NET Q9. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-10",
      "question": "What is a common concept in .NET related to topic 10?",
      "options": [
        "Option B for .NET Q10",
        "Option A for .NET Q10",
        "Option C for .NET Q10",
        "Option D for .NET Q10"
      ],
      "correctAnswer": "Option A for .NET Q10",
      "explanation": "The correct answer is Option A for .NET Q10. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-11",
      "question": "What is a common concept in .NET related to topic 11?",
      "options": [
        "Option D for .NET Q11",
        "Option B for .NET Q11",
        "Option C for .NET Q11",
        "Option A for .NET Q11"
      ],
      "correctAnswer": "Option A for .NET Q11",
      "explanation": "The correct answer is Option A for .NET Q11. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-12",
      "question": "What is a common concept in .NET related to topic 12?",
      "options": [
        "Option A for .NET Q12",
        "Option B for .NET Q12",
        "Option C for .NET Q12",
        "Option D for .NET Q12"
      ],
      "correctAnswer": "Option A for .NET Q12",
      "explanation": "The correct answer is Option A for .NET Q12. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-13",
      "question": "What is a common concept in .NET related to topic 13?",
      "options": [
        "Option C for .NET Q13",
        "Option B for .NET Q13",
        "Option A for .NET Q13",
        "Option D for .NET Q13"
      ],
      "correctAnswer": "Option A for .NET Q13",
      "explanation": "The correct answer is Option A for .NET Q13. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-14",
      "question": "What is a common concept in .NET related to topic 14?",
      "options": [
        "Option D for .NET Q14",
        "Option B for .NET Q14",
        "Option C for .NET Q14",
        "Option A for .NET Q14"
      ],
      "correctAnswer": "Option A for .NET Q14",
      "explanation": "The correct answer is Option A for .NET Q14. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-15",
      "question": "What is a common concept in .NET related to topic 15?",
      "options": [
        "Option A for .NET Q15",
        "Option B for .NET Q15",
        "Option C for .NET Q15",
        "Option D for .NET Q15"
      ],
      "correctAnswer": "Option A for .NET Q15",
      "explanation": "The correct answer is Option A for .NET Q15. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-16",
      "question": "What is a common concept in .NET related to topic 16?",
      "options": [
        "Option D for .NET Q16",
        "Option B for .NET Q16",
        "Option C for .NET Q16",
        "Option A for .NET Q16"
      ],
      "correctAnswer": "Option A for .NET Q16",
      "explanation": "The correct answer is Option A for .NET Q16. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-17",
      "question": "What is a common concept in .NET related to topic 17?",
      "options": [
        "Option B for .NET Q17",
        "Option A for .NET Q17",
        "Option C for .NET Q17",
        "Option D for .NET Q17"
      ],
      "correctAnswer": "Option A for .NET Q17",
      "explanation": "The correct answer is Option A for .NET Q17. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-18",
      "question": "What is a common concept in .NET related to topic 18?",
      "options": [
        "Option A for .NET Q18",
        "Option B for .NET Q18",
        "Option C for .NET Q18",
        "Option D for .NET Q18"
      ],
      "correctAnswer": "Option A for .NET Q18",
      "explanation": "The correct answer is Option A for .NET Q18. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-19",
      "question": "What is a common concept in .NET related to topic 19?",
      "options": [
        "Option A for .NET Q19",
        "Option B for .NET Q19",
        "Option C for .NET Q19",
        "Option D for .NET Q19"
      ],
      "correctAnswer": "Option A for .NET Q19",
      "explanation": "The correct answer is Option A for .NET Q19. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-20",
      "question": "What is a common concept in .NET related to topic 20?",
      "options": [
        "Option D for .NET Q20",
        "Option B for .NET Q20",
        "Option C for .NET Q20",
        "Option A for .NET Q20"
      ],
      "correctAnswer": "Option A for .NET Q20",
      "explanation": "The correct answer is Option A for .NET Q20. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-21",
      "question": "What is a common concept in .NET related to topic 21?",
      "options": [
        "Option B for .NET Q21",
        "Option A for .NET Q21",
        "Option C for .NET Q21",
        "Option D for .NET Q21"
      ],
      "correctAnswer": "Option A for .NET Q21",
      "explanation": "The correct answer is Option A for .NET Q21. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-22",
      "question": "What is a common concept in .NET related to topic 22?",
      "options": [
        "Option D for .NET Q22",
        "Option B for .NET Q22",
        "Option C for .NET Q22",
        "Option A for .NET Q22"
      ],
      "correctAnswer": "Option A for .NET Q22",
      "explanation": "The correct answer is Option A for .NET Q22. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-23",
      "question": "What is a common concept in .NET related to topic 23?",
      "options": [
        "Option B for .NET Q23",
        "Option A for .NET Q23",
        "Option C for .NET Q23",
        "Option D for .NET Q23"
      ],
      "correctAnswer": "Option A for .NET Q23",
      "explanation": "The correct answer is Option A for .NET Q23. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-24",
      "question": "What is a common concept in .NET related to topic 24?",
      "options": [
        "Option D for .NET Q24",
        "Option B for .NET Q24",
        "Option C for .NET Q24",
        "Option A for .NET Q24"
      ],
      "correctAnswer": "Option A for .NET Q24",
      "explanation": "The correct answer is Option A for .NET Q24. This is a fundamental concept in .NET interviews."
    },
    {
      "id": ".net-25",
      "question": "What is a common concept in .NET related to topic 25?",
      "options": [
        "Option A for .NET Q25",
        "Option B for .NET Q25",
        "Option C for .NET Q25",
        "Option D for .NET Q25"
      ],
      "correctAnswer": "Option A for .NET Q25",
      "explanation": "The correct answer is Option A for .NET Q25. This is a fundamental concept in .NET interviews."
    }
  ],
  "C#": [
    {
      "id": "c#-1",
      "question": "What is a common concept in C# related to topic 1?",
      "options": [
        "Option C for C# Q1",
        "Option B for C# Q1",
        "Option A for C# Q1",
        "Option D for C# Q1"
      ],
      "correctAnswer": "Option A for C# Q1",
      "explanation": "The correct answer is Option A for C# Q1. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-2",
      "question": "What is a common concept in C# related to topic 2?",
      "options": [
        "Option B for C# Q2",
        "Option A for C# Q2",
        "Option C for C# Q2",
        "Option D for C# Q2"
      ],
      "correctAnswer": "Option A for C# Q2",
      "explanation": "The correct answer is Option A for C# Q2. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-3",
      "question": "What is a common concept in C# related to topic 3?",
      "options": [
        "Option B for C# Q3",
        "Option A for C# Q3",
        "Option C for C# Q3",
        "Option D for C# Q3"
      ],
      "correctAnswer": "Option A for C# Q3",
      "explanation": "The correct answer is Option A for C# Q3. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-4",
      "question": "What is a common concept in C# related to topic 4?",
      "options": [
        "Option C for C# Q4",
        "Option B for C# Q4",
        "Option A for C# Q4",
        "Option D for C# Q4"
      ],
      "correctAnswer": "Option A for C# Q4",
      "explanation": "The correct answer is Option A for C# Q4. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-5",
      "question": "What is a common concept in C# related to topic 5?",
      "options": [
        "Option A for C# Q5",
        "Option B for C# Q5",
        "Option C for C# Q5",
        "Option D for C# Q5"
      ],
      "correctAnswer": "Option A for C# Q5",
      "explanation": "The correct answer is Option A for C# Q5. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-6",
      "question": "What is a common concept in C# related to topic 6?",
      "options": [
        "Option A for C# Q6",
        "Option B for C# Q6",
        "Option C for C# Q6",
        "Option D for C# Q6"
      ],
      "correctAnswer": "Option A for C# Q6",
      "explanation": "The correct answer is Option A for C# Q6. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-7",
      "question": "What is a common concept in C# related to topic 7?",
      "options": [
        "Option B for C# Q7",
        "Option A for C# Q7",
        "Option C for C# Q7",
        "Option D for C# Q7"
      ],
      "correctAnswer": "Option A for C# Q7",
      "explanation": "The correct answer is Option A for C# Q7. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-8",
      "question": "What is a common concept in C# related to topic 8?",
      "options": [
        "Option B for C# Q8",
        "Option A for C# Q8",
        "Option C for C# Q8",
        "Option D for C# Q8"
      ],
      "correctAnswer": "Option A for C# Q8",
      "explanation": "The correct answer is Option A for C# Q8. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-9",
      "question": "What is a common concept in C# related to topic 9?",
      "options": [
        "Option D for C# Q9",
        "Option B for C# Q9",
        "Option C for C# Q9",
        "Option A for C# Q9"
      ],
      "correctAnswer": "Option A for C# Q9",
      "explanation": "The correct answer is Option A for C# Q9. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-10",
      "question": "What is a common concept in C# related to topic 10?",
      "options": [
        "Option D for C# Q10",
        "Option B for C# Q10",
        "Option C for C# Q10",
        "Option A for C# Q10"
      ],
      "correctAnswer": "Option A for C# Q10",
      "explanation": "The correct answer is Option A for C# Q10. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-11",
      "question": "What is a common concept in C# related to topic 11?",
      "options": [
        "Option D for C# Q11",
        "Option B for C# Q11",
        "Option C for C# Q11",
        "Option A for C# Q11"
      ],
      "correctAnswer": "Option A for C# Q11",
      "explanation": "The correct answer is Option A for C# Q11. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-12",
      "question": "What is a common concept in C# related to topic 12?",
      "options": [
        "Option C for C# Q12",
        "Option B for C# Q12",
        "Option A for C# Q12",
        "Option D for C# Q12"
      ],
      "correctAnswer": "Option A for C# Q12",
      "explanation": "The correct answer is Option A for C# Q12. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-13",
      "question": "What is a common concept in C# related to topic 13?",
      "options": [
        "Option B for C# Q13",
        "Option A for C# Q13",
        "Option C for C# Q13",
        "Option D for C# Q13"
      ],
      "correctAnswer": "Option A for C# Q13",
      "explanation": "The correct answer is Option A for C# Q13. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-14",
      "question": "What is a common concept in C# related to topic 14?",
      "options": [
        "Option B for C# Q14",
        "Option A for C# Q14",
        "Option C for C# Q14",
        "Option D for C# Q14"
      ],
      "correctAnswer": "Option A for C# Q14",
      "explanation": "The correct answer is Option A for C# Q14. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-15",
      "question": "What is a common concept in C# related to topic 15?",
      "options": [
        "Option B for C# Q15",
        "Option A for C# Q15",
        "Option C for C# Q15",
        "Option D for C# Q15"
      ],
      "correctAnswer": "Option A for C# Q15",
      "explanation": "The correct answer is Option A for C# Q15. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-16",
      "question": "What is a common concept in C# related to topic 16?",
      "options": [
        "Option D for C# Q16",
        "Option B for C# Q16",
        "Option C for C# Q16",
        "Option A for C# Q16"
      ],
      "correctAnswer": "Option A for C# Q16",
      "explanation": "The correct answer is Option A for C# Q16. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-17",
      "question": "What is a common concept in C# related to topic 17?",
      "options": [
        "Option D for C# Q17",
        "Option B for C# Q17",
        "Option C for C# Q17",
        "Option A for C# Q17"
      ],
      "correctAnswer": "Option A for C# Q17",
      "explanation": "The correct answer is Option A for C# Q17. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-18",
      "question": "What is a common concept in C# related to topic 18?",
      "options": [
        "Option C for C# Q18",
        "Option B for C# Q18",
        "Option A for C# Q18",
        "Option D for C# Q18"
      ],
      "correctAnswer": "Option A for C# Q18",
      "explanation": "The correct answer is Option A for C# Q18. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-19",
      "question": "What is a common concept in C# related to topic 19?",
      "options": [
        "Option D for C# Q19",
        "Option B for C# Q19",
        "Option C for C# Q19",
        "Option A for C# Q19"
      ],
      "correctAnswer": "Option A for C# Q19",
      "explanation": "The correct answer is Option A for C# Q19. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-20",
      "question": "What is a common concept in C# related to topic 20?",
      "options": [
        "Option C for C# Q20",
        "Option B for C# Q20",
        "Option A for C# Q20",
        "Option D for C# Q20"
      ],
      "correctAnswer": "Option A for C# Q20",
      "explanation": "The correct answer is Option A for C# Q20. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-21",
      "question": "What is a common concept in C# related to topic 21?",
      "options": [
        "Option D for C# Q21",
        "Option B for C# Q21",
        "Option C for C# Q21",
        "Option A for C# Q21"
      ],
      "correctAnswer": "Option A for C# Q21",
      "explanation": "The correct answer is Option A for C# Q21. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-22",
      "question": "What is a common concept in C# related to topic 22?",
      "options": [
        "Option D for C# Q22",
        "Option B for C# Q22",
        "Option C for C# Q22",
        "Option A for C# Q22"
      ],
      "correctAnswer": "Option A for C# Q22",
      "explanation": "The correct answer is Option A for C# Q22. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-23",
      "question": "What is a common concept in C# related to topic 23?",
      "options": [
        "Option A for C# Q23",
        "Option B for C# Q23",
        "Option C for C# Q23",
        "Option D for C# Q23"
      ],
      "correctAnswer": "Option A for C# Q23",
      "explanation": "The correct answer is Option A for C# Q23. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-24",
      "question": "What is a common concept in C# related to topic 24?",
      "options": [
        "Option C for C# Q24",
        "Option B for C# Q24",
        "Option A for C# Q24",
        "Option D for C# Q24"
      ],
      "correctAnswer": "Option A for C# Q24",
      "explanation": "The correct answer is Option A for C# Q24. This is a fundamental concept in C# interviews."
    },
    {
      "id": "c#-25",
      "question": "What is a common concept in C# related to topic 25?",
      "options": [
        "Option C for C# Q25",
        "Option B for C# Q25",
        "Option A for C# Q25",
        "Option D for C# Q25"
      ],
      "correctAnswer": "Option A for C# Q25",
      "explanation": "The correct answer is Option A for C# Q25. This is a fundamental concept in C# interviews."
    }
  ],
  "AI": [
    {
      "id": "ai-1",
      "question": "What is a common concept in AI related to topic 1?",
      "options": [
        "Option C for AI Q1",
        "Option B for AI Q1",
        "Option A for AI Q1",
        "Option D for AI Q1"
      ],
      "correctAnswer": "Option A for AI Q1",
      "explanation": "The correct answer is Option A for AI Q1. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-2",
      "question": "What is a common concept in AI related to topic 2?",
      "options": [
        "Option B for AI Q2",
        "Option A for AI Q2",
        "Option C for AI Q2",
        "Option D for AI Q2"
      ],
      "correctAnswer": "Option A for AI Q2",
      "explanation": "The correct answer is Option A for AI Q2. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-3",
      "question": "What is a common concept in AI related to topic 3?",
      "options": [
        "Option C for AI Q3",
        "Option B for AI Q3",
        "Option A for AI Q3",
        "Option D for AI Q3"
      ],
      "correctAnswer": "Option A for AI Q3",
      "explanation": "The correct answer is Option A for AI Q3. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-4",
      "question": "What is a common concept in AI related to topic 4?",
      "options": [
        "Option B for AI Q4",
        "Option A for AI Q4",
        "Option C for AI Q4",
        "Option D for AI Q4"
      ],
      "correctAnswer": "Option A for AI Q4",
      "explanation": "The correct answer is Option A for AI Q4. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-5",
      "question": "What is a common concept in AI related to topic 5?",
      "options": [
        "Option A for AI Q5",
        "Option B for AI Q5",
        "Option C for AI Q5",
        "Option D for AI Q5"
      ],
      "correctAnswer": "Option A for AI Q5",
      "explanation": "The correct answer is Option A for AI Q5. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-6",
      "question": "What is a common concept in AI related to topic 6?",
      "options": [
        "Option D for AI Q6",
        "Option B for AI Q6",
        "Option C for AI Q6",
        "Option A for AI Q6"
      ],
      "correctAnswer": "Option A for AI Q6",
      "explanation": "The correct answer is Option A for AI Q6. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-7",
      "question": "What is a common concept in AI related to topic 7?",
      "options": [
        "Option D for AI Q7",
        "Option B for AI Q7",
        "Option C for AI Q7",
        "Option A for AI Q7"
      ],
      "correctAnswer": "Option A for AI Q7",
      "explanation": "The correct answer is Option A for AI Q7. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-8",
      "question": "What is a common concept in AI related to topic 8?",
      "options": [
        "Option B for AI Q8",
        "Option A for AI Q8",
        "Option C for AI Q8",
        "Option D for AI Q8"
      ],
      "correctAnswer": "Option A for AI Q8",
      "explanation": "The correct answer is Option A for AI Q8. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-9",
      "question": "What is a common concept in AI related to topic 9?",
      "options": [
        "Option A for AI Q9",
        "Option B for AI Q9",
        "Option C for AI Q9",
        "Option D for AI Q9"
      ],
      "correctAnswer": "Option A for AI Q9",
      "explanation": "The correct answer is Option A for AI Q9. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-10",
      "question": "What is a common concept in AI related to topic 10?",
      "options": [
        "Option D for AI Q10",
        "Option B for AI Q10",
        "Option C for AI Q10",
        "Option A for AI Q10"
      ],
      "correctAnswer": "Option A for AI Q10",
      "explanation": "The correct answer is Option A for AI Q10. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-11",
      "question": "What is a common concept in AI related to topic 11?",
      "options": [
        "Option D for AI Q11",
        "Option B for AI Q11",
        "Option C for AI Q11",
        "Option A for AI Q11"
      ],
      "correctAnswer": "Option A for AI Q11",
      "explanation": "The correct answer is Option A for AI Q11. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-12",
      "question": "What is a common concept in AI related to topic 12?",
      "options": [
        "Option C for AI Q12",
        "Option B for AI Q12",
        "Option A for AI Q12",
        "Option D for AI Q12"
      ],
      "correctAnswer": "Option A for AI Q12",
      "explanation": "The correct answer is Option A for AI Q12. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-13",
      "question": "What is a common concept in AI related to topic 13?",
      "options": [
        "Option C for AI Q13",
        "Option B for AI Q13",
        "Option A for AI Q13",
        "Option D for AI Q13"
      ],
      "correctAnswer": "Option A for AI Q13",
      "explanation": "The correct answer is Option A for AI Q13. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-14",
      "question": "What is a common concept in AI related to topic 14?",
      "options": [
        "Option A for AI Q14",
        "Option B for AI Q14",
        "Option C for AI Q14",
        "Option D for AI Q14"
      ],
      "correctAnswer": "Option A for AI Q14",
      "explanation": "The correct answer is Option A for AI Q14. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-15",
      "question": "What is a common concept in AI related to topic 15?",
      "options": [
        "Option C for AI Q15",
        "Option B for AI Q15",
        "Option A for AI Q15",
        "Option D for AI Q15"
      ],
      "correctAnswer": "Option A for AI Q15",
      "explanation": "The correct answer is Option A for AI Q15. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-16",
      "question": "What is a common concept in AI related to topic 16?",
      "options": [
        "Option A for AI Q16",
        "Option B for AI Q16",
        "Option C for AI Q16",
        "Option D for AI Q16"
      ],
      "correctAnswer": "Option A for AI Q16",
      "explanation": "The correct answer is Option A for AI Q16. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-17",
      "question": "What is a common concept in AI related to topic 17?",
      "options": [
        "Option D for AI Q17",
        "Option B for AI Q17",
        "Option C for AI Q17",
        "Option A for AI Q17"
      ],
      "correctAnswer": "Option A for AI Q17",
      "explanation": "The correct answer is Option A for AI Q17. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-18",
      "question": "What is a common concept in AI related to topic 18?",
      "options": [
        "Option B for AI Q18",
        "Option A for AI Q18",
        "Option C for AI Q18",
        "Option D for AI Q18"
      ],
      "correctAnswer": "Option A for AI Q18",
      "explanation": "The correct answer is Option A for AI Q18. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-19",
      "question": "What is a common concept in AI related to topic 19?",
      "options": [
        "Option D for AI Q19",
        "Option B for AI Q19",
        "Option C for AI Q19",
        "Option A for AI Q19"
      ],
      "correctAnswer": "Option A for AI Q19",
      "explanation": "The correct answer is Option A for AI Q19. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-20",
      "question": "What is a common concept in AI related to topic 20?",
      "options": [
        "Option A for AI Q20",
        "Option B for AI Q20",
        "Option C for AI Q20",
        "Option D for AI Q20"
      ],
      "correctAnswer": "Option A for AI Q20",
      "explanation": "The correct answer is Option A for AI Q20. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-21",
      "question": "What is a common concept in AI related to topic 21?",
      "options": [
        "Option C for AI Q21",
        "Option B for AI Q21",
        "Option A for AI Q21",
        "Option D for AI Q21"
      ],
      "correctAnswer": "Option A for AI Q21",
      "explanation": "The correct answer is Option A for AI Q21. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-22",
      "question": "What is a common concept in AI related to topic 22?",
      "options": [
        "Option D for AI Q22",
        "Option B for AI Q22",
        "Option C for AI Q22",
        "Option A for AI Q22"
      ],
      "correctAnswer": "Option A for AI Q22",
      "explanation": "The correct answer is Option A for AI Q22. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-23",
      "question": "What is a common concept in AI related to topic 23?",
      "options": [
        "Option C for AI Q23",
        "Option B for AI Q23",
        "Option A for AI Q23",
        "Option D for AI Q23"
      ],
      "correctAnswer": "Option A for AI Q23",
      "explanation": "The correct answer is Option A for AI Q23. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-24",
      "question": "What is a common concept in AI related to topic 24?",
      "options": [
        "Option B for AI Q24",
        "Option A for AI Q24",
        "Option C for AI Q24",
        "Option D for AI Q24"
      ],
      "correctAnswer": "Option A for AI Q24",
      "explanation": "The correct answer is Option A for AI Q24. This is a fundamental concept in AI interviews."
    },
    {
      "id": "ai-25",
      "question": "What is a common concept in AI related to topic 25?",
      "options": [
        "Option B for AI Q25",
        "Option A for AI Q25",
        "Option C for AI Q25",
        "Option D for AI Q25"
      ],
      "correctAnswer": "Option A for AI Q25",
      "explanation": "The correct answer is Option A for AI Q25. This is a fundamental concept in AI interviews."
    }
  ],
  "Data Analytics": [
    {
      "id": "data analytics-1",
      "question": "What is a common concept in Data Analytics related to topic 1?",
      "options": [
        "Option B for Data Analytics Q1",
        "Option A for Data Analytics Q1",
        "Option C for Data Analytics Q1",
        "Option D for Data Analytics Q1"
      ],
      "correctAnswer": "Option A for Data Analytics Q1",
      "explanation": "The correct answer is Option A for Data Analytics Q1. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-2",
      "question": "What is a common concept in Data Analytics related to topic 2?",
      "options": [
        "Option D for Data Analytics Q2",
        "Option B for Data Analytics Q2",
        "Option C for Data Analytics Q2",
        "Option A for Data Analytics Q2"
      ],
      "correctAnswer": "Option A for Data Analytics Q2",
      "explanation": "The correct answer is Option A for Data Analytics Q2. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-3",
      "question": "What is a common concept in Data Analytics related to topic 3?",
      "options": [
        "Option B for Data Analytics Q3",
        "Option A for Data Analytics Q3",
        "Option C for Data Analytics Q3",
        "Option D for Data Analytics Q3"
      ],
      "correctAnswer": "Option A for Data Analytics Q3",
      "explanation": "The correct answer is Option A for Data Analytics Q3. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-4",
      "question": "What is a common concept in Data Analytics related to topic 4?",
      "options": [
        "Option B for Data Analytics Q4",
        "Option A for Data Analytics Q4",
        "Option C for Data Analytics Q4",
        "Option D for Data Analytics Q4"
      ],
      "correctAnswer": "Option A for Data Analytics Q4",
      "explanation": "The correct answer is Option A for Data Analytics Q4. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-5",
      "question": "What is a common concept in Data Analytics related to topic 5?",
      "options": [
        "Option B for Data Analytics Q5",
        "Option A for Data Analytics Q5",
        "Option C for Data Analytics Q5",
        "Option D for Data Analytics Q5"
      ],
      "correctAnswer": "Option A for Data Analytics Q5",
      "explanation": "The correct answer is Option A for Data Analytics Q5. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-6",
      "question": "What is a common concept in Data Analytics related to topic 6?",
      "options": [
        "Option D for Data Analytics Q6",
        "Option B for Data Analytics Q6",
        "Option C for Data Analytics Q6",
        "Option A for Data Analytics Q6"
      ],
      "correctAnswer": "Option A for Data Analytics Q6",
      "explanation": "The correct answer is Option A for Data Analytics Q6. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-7",
      "question": "What is a common concept in Data Analytics related to topic 7?",
      "options": [
        "Option D for Data Analytics Q7",
        "Option B for Data Analytics Q7",
        "Option C for Data Analytics Q7",
        "Option A for Data Analytics Q7"
      ],
      "correctAnswer": "Option A for Data Analytics Q7",
      "explanation": "The correct answer is Option A for Data Analytics Q7. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-8",
      "question": "What is a common concept in Data Analytics related to topic 8?",
      "options": [
        "Option D for Data Analytics Q8",
        "Option B for Data Analytics Q8",
        "Option C for Data Analytics Q8",
        "Option A for Data Analytics Q8"
      ],
      "correctAnswer": "Option A for Data Analytics Q8",
      "explanation": "The correct answer is Option A for Data Analytics Q8. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-9",
      "question": "What is a common concept in Data Analytics related to topic 9?",
      "options": [
        "Option D for Data Analytics Q9",
        "Option B for Data Analytics Q9",
        "Option C for Data Analytics Q9",
        "Option A for Data Analytics Q9"
      ],
      "correctAnswer": "Option A for Data Analytics Q9",
      "explanation": "The correct answer is Option A for Data Analytics Q9. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-10",
      "question": "What is a common concept in Data Analytics related to topic 10?",
      "options": [
        "Option D for Data Analytics Q10",
        "Option B for Data Analytics Q10",
        "Option C for Data Analytics Q10",
        "Option A for Data Analytics Q10"
      ],
      "correctAnswer": "Option A for Data Analytics Q10",
      "explanation": "The correct answer is Option A for Data Analytics Q10. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-11",
      "question": "What is a common concept in Data Analytics related to topic 11?",
      "options": [
        "Option C for Data Analytics Q11",
        "Option B for Data Analytics Q11",
        "Option A for Data Analytics Q11",
        "Option D for Data Analytics Q11"
      ],
      "correctAnswer": "Option A for Data Analytics Q11",
      "explanation": "The correct answer is Option A for Data Analytics Q11. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-12",
      "question": "What is a common concept in Data Analytics related to topic 12?",
      "options": [
        "Option A for Data Analytics Q12",
        "Option B for Data Analytics Q12",
        "Option C for Data Analytics Q12",
        "Option D for Data Analytics Q12"
      ],
      "correctAnswer": "Option A for Data Analytics Q12",
      "explanation": "The correct answer is Option A for Data Analytics Q12. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-13",
      "question": "What is a common concept in Data Analytics related to topic 13?",
      "options": [
        "Option C for Data Analytics Q13",
        "Option B for Data Analytics Q13",
        "Option A for Data Analytics Q13",
        "Option D for Data Analytics Q13"
      ],
      "correctAnswer": "Option A for Data Analytics Q13",
      "explanation": "The correct answer is Option A for Data Analytics Q13. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-14",
      "question": "What is a common concept in Data Analytics related to topic 14?",
      "options": [
        "Option C for Data Analytics Q14",
        "Option B for Data Analytics Q14",
        "Option A for Data Analytics Q14",
        "Option D for Data Analytics Q14"
      ],
      "correctAnswer": "Option A for Data Analytics Q14",
      "explanation": "The correct answer is Option A for Data Analytics Q14. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-15",
      "question": "What is a common concept in Data Analytics related to topic 15?",
      "options": [
        "Option A for Data Analytics Q15",
        "Option B for Data Analytics Q15",
        "Option C for Data Analytics Q15",
        "Option D for Data Analytics Q15"
      ],
      "correctAnswer": "Option A for Data Analytics Q15",
      "explanation": "The correct answer is Option A for Data Analytics Q15. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-16",
      "question": "What is a common concept in Data Analytics related to topic 16?",
      "options": [
        "Option C for Data Analytics Q16",
        "Option B for Data Analytics Q16",
        "Option A for Data Analytics Q16",
        "Option D for Data Analytics Q16"
      ],
      "correctAnswer": "Option A for Data Analytics Q16",
      "explanation": "The correct answer is Option A for Data Analytics Q16. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-17",
      "question": "What is a common concept in Data Analytics related to topic 17?",
      "options": [
        "Option A for Data Analytics Q17",
        "Option B for Data Analytics Q17",
        "Option C for Data Analytics Q17",
        "Option D for Data Analytics Q17"
      ],
      "correctAnswer": "Option A for Data Analytics Q17",
      "explanation": "The correct answer is Option A for Data Analytics Q17. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-18",
      "question": "What is a common concept in Data Analytics related to topic 18?",
      "options": [
        "Option B for Data Analytics Q18",
        "Option A for Data Analytics Q18",
        "Option C for Data Analytics Q18",
        "Option D for Data Analytics Q18"
      ],
      "correctAnswer": "Option A for Data Analytics Q18",
      "explanation": "The correct answer is Option A for Data Analytics Q18. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-19",
      "question": "What is a common concept in Data Analytics related to topic 19?",
      "options": [
        "Option B for Data Analytics Q19",
        "Option A for Data Analytics Q19",
        "Option C for Data Analytics Q19",
        "Option D for Data Analytics Q19"
      ],
      "correctAnswer": "Option A for Data Analytics Q19",
      "explanation": "The correct answer is Option A for Data Analytics Q19. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-20",
      "question": "What is a common concept in Data Analytics related to topic 20?",
      "options": [
        "Option D for Data Analytics Q20",
        "Option B for Data Analytics Q20",
        "Option C for Data Analytics Q20",
        "Option A for Data Analytics Q20"
      ],
      "correctAnswer": "Option A for Data Analytics Q20",
      "explanation": "The correct answer is Option A for Data Analytics Q20. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-21",
      "question": "What is a common concept in Data Analytics related to topic 21?",
      "options": [
        "Option A for Data Analytics Q21",
        "Option B for Data Analytics Q21",
        "Option C for Data Analytics Q21",
        "Option D for Data Analytics Q21"
      ],
      "correctAnswer": "Option A for Data Analytics Q21",
      "explanation": "The correct answer is Option A for Data Analytics Q21. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-22",
      "question": "What is a common concept in Data Analytics related to topic 22?",
      "options": [
        "Option B for Data Analytics Q22",
        "Option A for Data Analytics Q22",
        "Option C for Data Analytics Q22",
        "Option D for Data Analytics Q22"
      ],
      "correctAnswer": "Option A for Data Analytics Q22",
      "explanation": "The correct answer is Option A for Data Analytics Q22. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-23",
      "question": "What is a common concept in Data Analytics related to topic 23?",
      "options": [
        "Option A for Data Analytics Q23",
        "Option B for Data Analytics Q23",
        "Option C for Data Analytics Q23",
        "Option D for Data Analytics Q23"
      ],
      "correctAnswer": "Option A for Data Analytics Q23",
      "explanation": "The correct answer is Option A for Data Analytics Q23. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-24",
      "question": "What is a common concept in Data Analytics related to topic 24?",
      "options": [
        "Option A for Data Analytics Q24",
        "Option B for Data Analytics Q24",
        "Option C for Data Analytics Q24",
        "Option D for Data Analytics Q24"
      ],
      "correctAnswer": "Option A for Data Analytics Q24",
      "explanation": "The correct answer is Option A for Data Analytics Q24. This is a fundamental concept in Data Analytics interviews."
    },
    {
      "id": "data analytics-25",
      "question": "What is a common concept in Data Analytics related to topic 25?",
      "options": [
        "Option B for Data Analytics Q25",
        "Option A for Data Analytics Q25",
        "Option C for Data Analytics Q25",
        "Option D for Data Analytics Q25"
      ],
      "correctAnswer": "Option A for Data Analytics Q25",
      "explanation": "The correct answer is Option A for Data Analytics Q25. This is a fundamental concept in Data Analytics interviews."
    }
  ],
  "DevOps": [
    {
      "id": "devops-1",
      "question": "What is a common concept in DevOps related to topic 1?",
      "options": [
        "Option D for DevOps Q1",
        "Option B for DevOps Q1",
        "Option C for DevOps Q1",
        "Option A for DevOps Q1"
      ],
      "correctAnswer": "Option A for DevOps Q1",
      "explanation": "The correct answer is Option A for DevOps Q1. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-2",
      "question": "What is a common concept in DevOps related to topic 2?",
      "options": [
        "Option D for DevOps Q2",
        "Option B for DevOps Q2",
        "Option C for DevOps Q2",
        "Option A for DevOps Q2"
      ],
      "correctAnswer": "Option A for DevOps Q2",
      "explanation": "The correct answer is Option A for DevOps Q2. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-3",
      "question": "What is a common concept in DevOps related to topic 3?",
      "options": [
        "Option B for DevOps Q3",
        "Option A for DevOps Q3",
        "Option C for DevOps Q3",
        "Option D for DevOps Q3"
      ],
      "correctAnswer": "Option A for DevOps Q3",
      "explanation": "The correct answer is Option A for DevOps Q3. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-4",
      "question": "What is a common concept in DevOps related to topic 4?",
      "options": [
        "Option A for DevOps Q4",
        "Option B for DevOps Q4",
        "Option C for DevOps Q4",
        "Option D for DevOps Q4"
      ],
      "correctAnswer": "Option A for DevOps Q4",
      "explanation": "The correct answer is Option A for DevOps Q4. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-5",
      "question": "What is a common concept in DevOps related to topic 5?",
      "options": [
        "Option C for DevOps Q5",
        "Option B for DevOps Q5",
        "Option A for DevOps Q5",
        "Option D for DevOps Q5"
      ],
      "correctAnswer": "Option A for DevOps Q5",
      "explanation": "The correct answer is Option A for DevOps Q5. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-6",
      "question": "What is a common concept in DevOps related to topic 6?",
      "options": [
        "Option D for DevOps Q6",
        "Option B for DevOps Q6",
        "Option C for DevOps Q6",
        "Option A for DevOps Q6"
      ],
      "correctAnswer": "Option A for DevOps Q6",
      "explanation": "The correct answer is Option A for DevOps Q6. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-7",
      "question": "What is a common concept in DevOps related to topic 7?",
      "options": [
        "Option D for DevOps Q7",
        "Option B for DevOps Q7",
        "Option C for DevOps Q7",
        "Option A for DevOps Q7"
      ],
      "correctAnswer": "Option A for DevOps Q7",
      "explanation": "The correct answer is Option A for DevOps Q7. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-8",
      "question": "What is a common concept in DevOps related to topic 8?",
      "options": [
        "Option A for DevOps Q8",
        "Option B for DevOps Q8",
        "Option C for DevOps Q8",
        "Option D for DevOps Q8"
      ],
      "correctAnswer": "Option A for DevOps Q8",
      "explanation": "The correct answer is Option A for DevOps Q8. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-9",
      "question": "What is a common concept in DevOps related to topic 9?",
      "options": [
        "Option A for DevOps Q9",
        "Option B for DevOps Q9",
        "Option C for DevOps Q9",
        "Option D for DevOps Q9"
      ],
      "correctAnswer": "Option A for DevOps Q9",
      "explanation": "The correct answer is Option A for DevOps Q9. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-10",
      "question": "What is a common concept in DevOps related to topic 10?",
      "options": [
        "Option A for DevOps Q10",
        "Option B for DevOps Q10",
        "Option C for DevOps Q10",
        "Option D for DevOps Q10"
      ],
      "correctAnswer": "Option A for DevOps Q10",
      "explanation": "The correct answer is Option A for DevOps Q10. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-11",
      "question": "What is a common concept in DevOps related to topic 11?",
      "options": [
        "Option D for DevOps Q11",
        "Option B for DevOps Q11",
        "Option C for DevOps Q11",
        "Option A for DevOps Q11"
      ],
      "correctAnswer": "Option A for DevOps Q11",
      "explanation": "The correct answer is Option A for DevOps Q11. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-12",
      "question": "What is a common concept in DevOps related to topic 12?",
      "options": [
        "Option D for DevOps Q12",
        "Option B for DevOps Q12",
        "Option C for DevOps Q12",
        "Option A for DevOps Q12"
      ],
      "correctAnswer": "Option A for DevOps Q12",
      "explanation": "The correct answer is Option A for DevOps Q12. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-13",
      "question": "What is a common concept in DevOps related to topic 13?",
      "options": [
        "Option B for DevOps Q13",
        "Option A for DevOps Q13",
        "Option C for DevOps Q13",
        "Option D for DevOps Q13"
      ],
      "correctAnswer": "Option A for DevOps Q13",
      "explanation": "The correct answer is Option A for DevOps Q13. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-14",
      "question": "What is a common concept in DevOps related to topic 14?",
      "options": [
        "Option A for DevOps Q14",
        "Option B for DevOps Q14",
        "Option C for DevOps Q14",
        "Option D for DevOps Q14"
      ],
      "correctAnswer": "Option A for DevOps Q14",
      "explanation": "The correct answer is Option A for DevOps Q14. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-15",
      "question": "What is a common concept in DevOps related to topic 15?",
      "options": [
        "Option D for DevOps Q15",
        "Option B for DevOps Q15",
        "Option C for DevOps Q15",
        "Option A for DevOps Q15"
      ],
      "correctAnswer": "Option A for DevOps Q15",
      "explanation": "The correct answer is Option A for DevOps Q15. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-16",
      "question": "What is a common concept in DevOps related to topic 16?",
      "options": [
        "Option B for DevOps Q16",
        "Option A for DevOps Q16",
        "Option C for DevOps Q16",
        "Option D for DevOps Q16"
      ],
      "correctAnswer": "Option A for DevOps Q16",
      "explanation": "The correct answer is Option A for DevOps Q16. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-17",
      "question": "What is a common concept in DevOps related to topic 17?",
      "options": [
        "Option A for DevOps Q17",
        "Option B for DevOps Q17",
        "Option C for DevOps Q17",
        "Option D for DevOps Q17"
      ],
      "correctAnswer": "Option A for DevOps Q17",
      "explanation": "The correct answer is Option A for DevOps Q17. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-18",
      "question": "What is a common concept in DevOps related to topic 18?",
      "options": [
        "Option A for DevOps Q18",
        "Option B for DevOps Q18",
        "Option C for DevOps Q18",
        "Option D for DevOps Q18"
      ],
      "correctAnswer": "Option A for DevOps Q18",
      "explanation": "The correct answer is Option A for DevOps Q18. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-19",
      "question": "What is a common concept in DevOps related to topic 19?",
      "options": [
        "Option B for DevOps Q19",
        "Option A for DevOps Q19",
        "Option C for DevOps Q19",
        "Option D for DevOps Q19"
      ],
      "correctAnswer": "Option A for DevOps Q19",
      "explanation": "The correct answer is Option A for DevOps Q19. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-20",
      "question": "What is a common concept in DevOps related to topic 20?",
      "options": [
        "Option D for DevOps Q20",
        "Option B for DevOps Q20",
        "Option C for DevOps Q20",
        "Option A for DevOps Q20"
      ],
      "correctAnswer": "Option A for DevOps Q20",
      "explanation": "The correct answer is Option A for DevOps Q20. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-21",
      "question": "What is a common concept in DevOps related to topic 21?",
      "options": [
        "Option A for DevOps Q21",
        "Option B for DevOps Q21",
        "Option C for DevOps Q21",
        "Option D for DevOps Q21"
      ],
      "correctAnswer": "Option A for DevOps Q21",
      "explanation": "The correct answer is Option A for DevOps Q21. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-22",
      "question": "What is a common concept in DevOps related to topic 22?",
      "options": [
        "Option D for DevOps Q22",
        "Option B for DevOps Q22",
        "Option C for DevOps Q22",
        "Option A for DevOps Q22"
      ],
      "correctAnswer": "Option A for DevOps Q22",
      "explanation": "The correct answer is Option A for DevOps Q22. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-23",
      "question": "What is a common concept in DevOps related to topic 23?",
      "options": [
        "Option A for DevOps Q23",
        "Option B for DevOps Q23",
        "Option C for DevOps Q23",
        "Option D for DevOps Q23"
      ],
      "correctAnswer": "Option A for DevOps Q23",
      "explanation": "The correct answer is Option A for DevOps Q23. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-24",
      "question": "What is a common concept in DevOps related to topic 24?",
      "options": [
        "Option B for DevOps Q24",
        "Option A for DevOps Q24",
        "Option C for DevOps Q24",
        "Option D for DevOps Q24"
      ],
      "correctAnswer": "Option A for DevOps Q24",
      "explanation": "The correct answer is Option A for DevOps Q24. This is a fundamental concept in DevOps interviews."
    },
    {
      "id": "devops-25",
      "question": "What is a common concept in DevOps related to topic 25?",
      "options": [
        "Option D for DevOps Q25",
        "Option B for DevOps Q25",
        "Option C for DevOps Q25",
        "Option A for DevOps Q25"
      ],
      "correctAnswer": "Option A for DevOps Q25",
      "explanation": "The correct answer is Option A for DevOps Q25. This is a fundamental concept in DevOps interviews."
    }
  ],
  "Cloud": [
    {
      "id": "cloud-1",
      "question": "What is a common concept in Cloud related to topic 1?",
      "options": [
        "Option A for Cloud Q1",
        "Option B for Cloud Q1",
        "Option C for Cloud Q1",
        "Option D for Cloud Q1"
      ],
      "correctAnswer": "Option A for Cloud Q1",
      "explanation": "The correct answer is Option A for Cloud Q1. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-2",
      "question": "What is a common concept in Cloud related to topic 2?",
      "options": [
        "Option A for Cloud Q2",
        "Option B for Cloud Q2",
        "Option C for Cloud Q2",
        "Option D for Cloud Q2"
      ],
      "correctAnswer": "Option A for Cloud Q2",
      "explanation": "The correct answer is Option A for Cloud Q2. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-3",
      "question": "What is a common concept in Cloud related to topic 3?",
      "options": [
        "Option C for Cloud Q3",
        "Option B for Cloud Q3",
        "Option A for Cloud Q3",
        "Option D for Cloud Q3"
      ],
      "correctAnswer": "Option A for Cloud Q3",
      "explanation": "The correct answer is Option A for Cloud Q3. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-4",
      "question": "What is a common concept in Cloud related to topic 4?",
      "options": [
        "Option A for Cloud Q4",
        "Option B for Cloud Q4",
        "Option C for Cloud Q4",
        "Option D for Cloud Q4"
      ],
      "correctAnswer": "Option A for Cloud Q4",
      "explanation": "The correct answer is Option A for Cloud Q4. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-5",
      "question": "What is a common concept in Cloud related to topic 5?",
      "options": [
        "Option B for Cloud Q5",
        "Option A for Cloud Q5",
        "Option C for Cloud Q5",
        "Option D for Cloud Q5"
      ],
      "correctAnswer": "Option A for Cloud Q5",
      "explanation": "The correct answer is Option A for Cloud Q5. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-6",
      "question": "What is a common concept in Cloud related to topic 6?",
      "options": [
        "Option C for Cloud Q6",
        "Option B for Cloud Q6",
        "Option A for Cloud Q6",
        "Option D for Cloud Q6"
      ],
      "correctAnswer": "Option A for Cloud Q6",
      "explanation": "The correct answer is Option A for Cloud Q6. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-7",
      "question": "What is a common concept in Cloud related to topic 7?",
      "options": [
        "Option A for Cloud Q7",
        "Option B for Cloud Q7",
        "Option C for Cloud Q7",
        "Option D for Cloud Q7"
      ],
      "correctAnswer": "Option A for Cloud Q7",
      "explanation": "The correct answer is Option A for Cloud Q7. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-8",
      "question": "What is a common concept in Cloud related to topic 8?",
      "options": [
        "Option B for Cloud Q8",
        "Option A for Cloud Q8",
        "Option C for Cloud Q8",
        "Option D for Cloud Q8"
      ],
      "correctAnswer": "Option A for Cloud Q8",
      "explanation": "The correct answer is Option A for Cloud Q8. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-9",
      "question": "What is a common concept in Cloud related to topic 9?",
      "options": [
        "Option B for Cloud Q9",
        "Option A for Cloud Q9",
        "Option C for Cloud Q9",
        "Option D for Cloud Q9"
      ],
      "correctAnswer": "Option A for Cloud Q9",
      "explanation": "The correct answer is Option A for Cloud Q9. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-10",
      "question": "What is a common concept in Cloud related to topic 10?",
      "options": [
        "Option C for Cloud Q10",
        "Option B for Cloud Q10",
        "Option A for Cloud Q10",
        "Option D for Cloud Q10"
      ],
      "correctAnswer": "Option A for Cloud Q10",
      "explanation": "The correct answer is Option A for Cloud Q10. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-11",
      "question": "What is a common concept in Cloud related to topic 11?",
      "options": [
        "Option B for Cloud Q11",
        "Option A for Cloud Q11",
        "Option C for Cloud Q11",
        "Option D for Cloud Q11"
      ],
      "correctAnswer": "Option A for Cloud Q11",
      "explanation": "The correct answer is Option A for Cloud Q11. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-12",
      "question": "What is a common concept in Cloud related to topic 12?",
      "options": [
        "Option D for Cloud Q12",
        "Option B for Cloud Q12",
        "Option C for Cloud Q12",
        "Option A for Cloud Q12"
      ],
      "correctAnswer": "Option A for Cloud Q12",
      "explanation": "The correct answer is Option A for Cloud Q12. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-13",
      "question": "What is a common concept in Cloud related to topic 13?",
      "options": [
        "Option A for Cloud Q13",
        "Option B for Cloud Q13",
        "Option C for Cloud Q13",
        "Option D for Cloud Q13"
      ],
      "correctAnswer": "Option A for Cloud Q13",
      "explanation": "The correct answer is Option A for Cloud Q13. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-14",
      "question": "What is a common concept in Cloud related to topic 14?",
      "options": [
        "Option B for Cloud Q14",
        "Option A for Cloud Q14",
        "Option C for Cloud Q14",
        "Option D for Cloud Q14"
      ],
      "correctAnswer": "Option A for Cloud Q14",
      "explanation": "The correct answer is Option A for Cloud Q14. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-15",
      "question": "What is a common concept in Cloud related to topic 15?",
      "options": [
        "Option B for Cloud Q15",
        "Option A for Cloud Q15",
        "Option C for Cloud Q15",
        "Option D for Cloud Q15"
      ],
      "correctAnswer": "Option A for Cloud Q15",
      "explanation": "The correct answer is Option A for Cloud Q15. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-16",
      "question": "What is a common concept in Cloud related to topic 16?",
      "options": [
        "Option A for Cloud Q16",
        "Option B for Cloud Q16",
        "Option C for Cloud Q16",
        "Option D for Cloud Q16"
      ],
      "correctAnswer": "Option A for Cloud Q16",
      "explanation": "The correct answer is Option A for Cloud Q16. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-17",
      "question": "What is a common concept in Cloud related to topic 17?",
      "options": [
        "Option C for Cloud Q17",
        "Option B for Cloud Q17",
        "Option A for Cloud Q17",
        "Option D for Cloud Q17"
      ],
      "correctAnswer": "Option A for Cloud Q17",
      "explanation": "The correct answer is Option A for Cloud Q17. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-18",
      "question": "What is a common concept in Cloud related to topic 18?",
      "options": [
        "Option D for Cloud Q18",
        "Option B for Cloud Q18",
        "Option C for Cloud Q18",
        "Option A for Cloud Q18"
      ],
      "correctAnswer": "Option A for Cloud Q18",
      "explanation": "The correct answer is Option A for Cloud Q18. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-19",
      "question": "What is a common concept in Cloud related to topic 19?",
      "options": [
        "Option A for Cloud Q19",
        "Option B for Cloud Q19",
        "Option C for Cloud Q19",
        "Option D for Cloud Q19"
      ],
      "correctAnswer": "Option A for Cloud Q19",
      "explanation": "The correct answer is Option A for Cloud Q19. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-20",
      "question": "What is a common concept in Cloud related to topic 20?",
      "options": [
        "Option A for Cloud Q20",
        "Option B for Cloud Q20",
        "Option C for Cloud Q20",
        "Option D for Cloud Q20"
      ],
      "correctAnswer": "Option A for Cloud Q20",
      "explanation": "The correct answer is Option A for Cloud Q20. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-21",
      "question": "What is a common concept in Cloud related to topic 21?",
      "options": [
        "Option A for Cloud Q21",
        "Option B for Cloud Q21",
        "Option C for Cloud Q21",
        "Option D for Cloud Q21"
      ],
      "correctAnswer": "Option A for Cloud Q21",
      "explanation": "The correct answer is Option A for Cloud Q21. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-22",
      "question": "What is a common concept in Cloud related to topic 22?",
      "options": [
        "Option D for Cloud Q22",
        "Option B for Cloud Q22",
        "Option C for Cloud Q22",
        "Option A for Cloud Q22"
      ],
      "correctAnswer": "Option A for Cloud Q22",
      "explanation": "The correct answer is Option A for Cloud Q22. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-23",
      "question": "What is a common concept in Cloud related to topic 23?",
      "options": [
        "Option A for Cloud Q23",
        "Option B for Cloud Q23",
        "Option C for Cloud Q23",
        "Option D for Cloud Q23"
      ],
      "correctAnswer": "Option A for Cloud Q23",
      "explanation": "The correct answer is Option A for Cloud Q23. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-24",
      "question": "What is a common concept in Cloud related to topic 24?",
      "options": [
        "Option A for Cloud Q24",
        "Option B for Cloud Q24",
        "Option C for Cloud Q24",
        "Option D for Cloud Q24"
      ],
      "correctAnswer": "Option A for Cloud Q24",
      "explanation": "The correct answer is Option A for Cloud Q24. This is a fundamental concept in Cloud interviews."
    },
    {
      "id": "cloud-25",
      "question": "What is a common concept in Cloud related to topic 25?",
      "options": [
        "Option A for Cloud Q25",
        "Option B for Cloud Q25",
        "Option C for Cloud Q25",
        "Option D for Cloud Q25"
      ],
      "correctAnswer": "Option A for Cloud Q25",
      "explanation": "The correct answer is Option A for Cloud Q25. This is a fundamental concept in Cloud interviews."
    }
  ],
  "Power BI": [
    {
      "id": "power bi-1",
      "question": "What is a common concept in Power BI related to topic 1?",
      "options": [
        "Option A for Power BI Q1",
        "Option B for Power BI Q1",
        "Option C for Power BI Q1",
        "Option D for Power BI Q1"
      ],
      "correctAnswer": "Option A for Power BI Q1",
      "explanation": "The correct answer is Option A for Power BI Q1. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-2",
      "question": "What is a common concept in Power BI related to topic 2?",
      "options": [
        "Option A for Power BI Q2",
        "Option B for Power BI Q2",
        "Option C for Power BI Q2",
        "Option D for Power BI Q2"
      ],
      "correctAnswer": "Option A for Power BI Q2",
      "explanation": "The correct answer is Option A for Power BI Q2. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-3",
      "question": "What is a common concept in Power BI related to topic 3?",
      "options": [
        "Option D for Power BI Q3",
        "Option B for Power BI Q3",
        "Option C for Power BI Q3",
        "Option A for Power BI Q3"
      ],
      "correctAnswer": "Option A for Power BI Q3",
      "explanation": "The correct answer is Option A for Power BI Q3. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-4",
      "question": "What is a common concept in Power BI related to topic 4?",
      "options": [
        "Option B for Power BI Q4",
        "Option A for Power BI Q4",
        "Option C for Power BI Q4",
        "Option D for Power BI Q4"
      ],
      "correctAnswer": "Option A for Power BI Q4",
      "explanation": "The correct answer is Option A for Power BI Q4. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-5",
      "question": "What is a common concept in Power BI related to topic 5?",
      "options": [
        "Option A for Power BI Q5",
        "Option B for Power BI Q5",
        "Option C for Power BI Q5",
        "Option D for Power BI Q5"
      ],
      "correctAnswer": "Option A for Power BI Q5",
      "explanation": "The correct answer is Option A for Power BI Q5. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-6",
      "question": "What is a common concept in Power BI related to topic 6?",
      "options": [
        "Option C for Power BI Q6",
        "Option B for Power BI Q6",
        "Option A for Power BI Q6",
        "Option D for Power BI Q6"
      ],
      "correctAnswer": "Option A for Power BI Q6",
      "explanation": "The correct answer is Option A for Power BI Q6. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-7",
      "question": "What is a common concept in Power BI related to topic 7?",
      "options": [
        "Option B for Power BI Q7",
        "Option A for Power BI Q7",
        "Option C for Power BI Q7",
        "Option D for Power BI Q7"
      ],
      "correctAnswer": "Option A for Power BI Q7",
      "explanation": "The correct answer is Option A for Power BI Q7. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-8",
      "question": "What is a common concept in Power BI related to topic 8?",
      "options": [
        "Option B for Power BI Q8",
        "Option A for Power BI Q8",
        "Option C for Power BI Q8",
        "Option D for Power BI Q8"
      ],
      "correctAnswer": "Option A for Power BI Q8",
      "explanation": "The correct answer is Option A for Power BI Q8. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-9",
      "question": "What is a common concept in Power BI related to topic 9?",
      "options": [
        "Option C for Power BI Q9",
        "Option B for Power BI Q9",
        "Option A for Power BI Q9",
        "Option D for Power BI Q9"
      ],
      "correctAnswer": "Option A for Power BI Q9",
      "explanation": "The correct answer is Option A for Power BI Q9. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-10",
      "question": "What is a common concept in Power BI related to topic 10?",
      "options": [
        "Option C for Power BI Q10",
        "Option B for Power BI Q10",
        "Option A for Power BI Q10",
        "Option D for Power BI Q10"
      ],
      "correctAnswer": "Option A for Power BI Q10",
      "explanation": "The correct answer is Option A for Power BI Q10. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-11",
      "question": "What is a common concept in Power BI related to topic 11?",
      "options": [
        "Option C for Power BI Q11",
        "Option B for Power BI Q11",
        "Option A for Power BI Q11",
        "Option D for Power BI Q11"
      ],
      "correctAnswer": "Option A for Power BI Q11",
      "explanation": "The correct answer is Option A for Power BI Q11. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-12",
      "question": "What is a common concept in Power BI related to topic 12?",
      "options": [
        "Option C for Power BI Q12",
        "Option B for Power BI Q12",
        "Option A for Power BI Q12",
        "Option D for Power BI Q12"
      ],
      "correctAnswer": "Option A for Power BI Q12",
      "explanation": "The correct answer is Option A for Power BI Q12. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-13",
      "question": "What is a common concept in Power BI related to topic 13?",
      "options": [
        "Option C for Power BI Q13",
        "Option B for Power BI Q13",
        "Option A for Power BI Q13",
        "Option D for Power BI Q13"
      ],
      "correctAnswer": "Option A for Power BI Q13",
      "explanation": "The correct answer is Option A for Power BI Q13. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-14",
      "question": "What is a common concept in Power BI related to topic 14?",
      "options": [
        "Option A for Power BI Q14",
        "Option B for Power BI Q14",
        "Option C for Power BI Q14",
        "Option D for Power BI Q14"
      ],
      "correctAnswer": "Option A for Power BI Q14",
      "explanation": "The correct answer is Option A for Power BI Q14. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-15",
      "question": "What is a common concept in Power BI related to topic 15?",
      "options": [
        "Option B for Power BI Q15",
        "Option A for Power BI Q15",
        "Option C for Power BI Q15",
        "Option D for Power BI Q15"
      ],
      "correctAnswer": "Option A for Power BI Q15",
      "explanation": "The correct answer is Option A for Power BI Q15. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-16",
      "question": "What is a common concept in Power BI related to topic 16?",
      "options": [
        "Option B for Power BI Q16",
        "Option A for Power BI Q16",
        "Option C for Power BI Q16",
        "Option D for Power BI Q16"
      ],
      "correctAnswer": "Option A for Power BI Q16",
      "explanation": "The correct answer is Option A for Power BI Q16. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-17",
      "question": "What is a common concept in Power BI related to topic 17?",
      "options": [
        "Option A for Power BI Q17",
        "Option B for Power BI Q17",
        "Option C for Power BI Q17",
        "Option D for Power BI Q17"
      ],
      "correctAnswer": "Option A for Power BI Q17",
      "explanation": "The correct answer is Option A for Power BI Q17. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-18",
      "question": "What is a common concept in Power BI related to topic 18?",
      "options": [
        "Option C for Power BI Q18",
        "Option B for Power BI Q18",
        "Option A for Power BI Q18",
        "Option D for Power BI Q18"
      ],
      "correctAnswer": "Option A for Power BI Q18",
      "explanation": "The correct answer is Option A for Power BI Q18. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-19",
      "question": "What is a common concept in Power BI related to topic 19?",
      "options": [
        "Option A for Power BI Q19",
        "Option B for Power BI Q19",
        "Option C for Power BI Q19",
        "Option D for Power BI Q19"
      ],
      "correctAnswer": "Option A for Power BI Q19",
      "explanation": "The correct answer is Option A for Power BI Q19. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-20",
      "question": "What is a common concept in Power BI related to topic 20?",
      "options": [
        "Option D for Power BI Q20",
        "Option B for Power BI Q20",
        "Option C for Power BI Q20",
        "Option A for Power BI Q20"
      ],
      "correctAnswer": "Option A for Power BI Q20",
      "explanation": "The correct answer is Option A for Power BI Q20. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-21",
      "question": "What is a common concept in Power BI related to topic 21?",
      "options": [
        "Option A for Power BI Q21",
        "Option B for Power BI Q21",
        "Option C for Power BI Q21",
        "Option D for Power BI Q21"
      ],
      "correctAnswer": "Option A for Power BI Q21",
      "explanation": "The correct answer is Option A for Power BI Q21. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-22",
      "question": "What is a common concept in Power BI related to topic 22?",
      "options": [
        "Option C for Power BI Q22",
        "Option B for Power BI Q22",
        "Option A for Power BI Q22",
        "Option D for Power BI Q22"
      ],
      "correctAnswer": "Option A for Power BI Q22",
      "explanation": "The correct answer is Option A for Power BI Q22. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-23",
      "question": "What is a common concept in Power BI related to topic 23?",
      "options": [
        "Option C for Power BI Q23",
        "Option B for Power BI Q23",
        "Option A for Power BI Q23",
        "Option D for Power BI Q23"
      ],
      "correctAnswer": "Option A for Power BI Q23",
      "explanation": "The correct answer is Option A for Power BI Q23. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-24",
      "question": "What is a common concept in Power BI related to topic 24?",
      "options": [
        "Option D for Power BI Q24",
        "Option B for Power BI Q24",
        "Option C for Power BI Q24",
        "Option A for Power BI Q24"
      ],
      "correctAnswer": "Option A for Power BI Q24",
      "explanation": "The correct answer is Option A for Power BI Q24. This is a fundamental concept in Power BI interviews."
    },
    {
      "id": "power bi-25",
      "question": "What is a common concept in Power BI related to topic 25?",
      "options": [
        "Option D for Power BI Q25",
        "Option B for Power BI Q25",
        "Option C for Power BI Q25",
        "Option A for Power BI Q25"
      ],
      "correctAnswer": "Option A for Power BI Q25",
      "explanation": "The correct answer is Option A for Power BI Q25. This is a fundamental concept in Power BI interviews."
    }
  ]
};
