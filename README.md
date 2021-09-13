# electronics-store-app
The back end design of an online application that calculates customer specific discounts

## Dependencies
node.js
express
Due to resource limitations the database(which was probably going to be mongoDB) is not available
dummy data of users and products is hardcoded into application source code
developed with visual studio code

## Components
Models which consists of the skeletons of all the modules(users,products and userCart)
seeder consists of the dummy data of users and products available for testing.
The actual source code that performs the discount is found under the app.js, it will recieve a list of products chosen by the user and calculate tthe cost before determining the final discounted total. It will then give out a receipt as output.

## Test cases
*user qualifies for all percentage discounts*

A user who is an employee and an affiliate who has been a customer for more than 2 years but their purchase does not qualify as a grocery, in this case the program only provides the employee discount of 30% 
 
*user qualifies for affilliate and two year discount*

A user who is not an employee and is an affiliate who has been a customer for more than 2 years but their purchase does not qualify as a grocery, in this case the program only provides the  employee discount of 10% 
  
*user only qualifies for two year discount* 

A user who is not an employee and is not an affiliate who has been a customer for more than 2 years but their purchase does not qualify as a grocery, in this case the program only provides the employee discount of 5%  
     
*user does not qualify for any percentage discount*

A user who is not an employee and is not an affiliate who has been a customer for less than 2 years but their purchase does not qualify as a grocery, in this case thhe program does not provide a discount  
    
*user qualifies for all percentage discounts*

A user who is an employee and is an affiliate who has been a customer for more 2 years and their purchase qualifies as a grocery, in this case the program only provides the $5 per $100 grocery discount    
 
*user does not qualify for any percentage discount*

In tis case te program does not provide a discount


## API Documentation
The complete application will have a concise reference manual containing all the information required to work with the API, with details about the functions, classes, return types, arguments and more, supported by tutorials and examples. This will enable an improved user experience which will make more people to want to adopt the API.
The documenttation will consist of the following:
1.A clear home page 
2.A Getting Started guide 
3.Simple explainers 
4.Compelling use cases 
5.Language-specific documentation 
6.A simple layout 
7.Interactive, compilable code 
8.Test and result Screenshots

## Setup and Run
to setup this project, run the following commands on your terminal

1. to get the project go to https://github.com/LaoneOnkemetse/electronics-store-app
2. navigate to the project directory `cd myapp`
3. install neccesary packages, modules `npm install`
4. to run the project `npm start`
5. using express you can use this default url of `http://localhost:3000`

