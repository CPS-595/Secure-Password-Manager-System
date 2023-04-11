# CPS 595 P1 - Software Engineering Project I


University of Dayton

Department of Computer Science

Instructor(s):

- Dr. Ahmed El Quadrihiri
- Dr. Phu Phung 

## Software Engineering Project I, Spring 2023

# Secure Password Manager System

# Team members

1.  Anisha Chhatwani, chhatwania1@udayton.edu
2.  Omkar Sunil Karnik, karniko1@udayton.edu


## Revision History

| Date       |   Version     |            Description                   |
|------------|:-------------:|--------------------------------------------:|
| 01/19/2023 |  0.0          |            Init draft                       |
| 01/31/2023 |  0.5          |  How to run and test this microservice      |
| 02/10/2023 |  1.0          |  Updated with use case and Sequence Diagram |
| 03/6/2023 |  1.5          |  Added more sequence diagrams and their descriptions |
| 04/11/2023 |  2.0         |  Finalized the report |


# Project Management Information

Management board (private access): <https://trello.com/w/secure_password_manager_system>

Source code for Frontend (private access): <https://github.com/CPS-595/Secure-Password-Manager-System>

Source code for Backend (private access): <https://github.com/CPS-595/login_signup_microservice>

Source code for Extension (private access): <https://github.com/CPS-595/Extension>


# Overview
 
The idea is to build a secure web application where users can store, view and share their passwords for different domains.

Every person or organization has multiple accounts over various web platforms like Gmail, MongoDB, Facebook or even their wifi password. Remembering all the passwords across different platforms can be a problem especially when it comes to organizations as they need to share passwords among team members. 

The intended password manager system would allow team members to store and share credentials securely. For instance, the wifi password of your office, the administrator password of a router, or your organization's social media account password. It leverages encryption and decryption algorithms to encrypt and decrypt the secrets using public and private keys. This system would be implemented using a website to manage the passwords and a Chrome extension to store the private key on the browser and interact with the website to do the decryption.


# Project Context and Scope

The project was introducted to us by Novobi, a Software Company in Texas but the reason why we chose to work on this project was that it was difficult to remember passwords for every website and if we write down the passwords somewhere, then there are security concerns as someone can steal the passwords. So, to address this issue, we chose this project so we can store, view and share our credentials secirely.


# System Analysis

We have created a web portal where users can sign up. After signup, the user would be asked to download the chrome extension that we have built. Once the user downloads the extension, a private and public key pair would be generated for this user which would be stored in ther chrome storage. After that, the user will be able to use different features of our web portal.
## High-level Requirements

Our sytem has 3 main functionalities that we have been able to successfully finish so far:  
###1. Create a credential  
When the user enters the credentials to store, the extension would encrypt the password entered using the public key (stored in chrome storage) and then send request to the backend to store this decrypted password in the database. This way our password is securely saved in the database.  
###2. View encrypted passwords  
By default, the passwords for all credentials are not shown. We are just showing "*****" instead of the password because the password is anyway encrypted at this time. If a user wants to view a password, he would click on the reveal icon beside the asteriks. Clicking on the reveal icon would trigger the extension and the extension would decrypt the password using the private key and show the decrypted password on the UI.
###3. Share a credential
We also provide the functionality for the users to share their credentials with different people registered on our portal. When the user selects the people he wanted to shre the credential with, our system would use the selected people's public keys to encrypt the password and store it in the database. Now, if the other person logs in to see the password shared with him, his private key would be used to decrypt the password and view it.  

Other functionalities that thought of but couldn't complete due to time constraints are:  
- Edit a credential
- Delete a credntial
- Read/Write access while sharing a password

## Use Case Diagram
<img width="572" alt="Screenshot 2023-04-11 at 2 58 10 PM" src="https://user-images.githubusercontent.com/92238381/231265329-dc3be1b4-5f0b-435a-896b-eb049d29c5ba.png">



## Sequence Diagrams

###1. Signup

When the user clicks on the signup button on our web application, he is redirected to the signup screen. Here, the user enters the name, email address, phone number and password and clicks the submit button. On this button click, our application sends a post request to the server with the given name, email, phone number and passwords. The Server checks in the database if a user already exists for this email address or not. If this email address already exists in the database, the server sends a response that this user already exists and this error message gets displayed on the UI. Otherwise, server creates a new user in the database and sends a success response to the web application and this success message gets displayed on the UI.
![signup](https://user-images.githubusercontent.com/92238381/218239655-d7695632-3087-4dbc-a98a-c521da58a48e.png)

###2. Login

The user enters the email and password on the signup screen and clicks the submit button. On this button click, our web application sends a POST request to the server with the given email and password in the body. The server checks in the db if the user exists with the given credentials or not. If user not found, server sends an error response to the web application and this error message gets displayed on the UI. If user with the given credentials exists in the database, the server sends a success response back to the web application and the user gets redirected to the main screen.
![Login sequence diagram](https://user-images.githubusercontent.com/46633374/218240463-e12d3dfb-8ed1-4158-990e-fbf7e6f6fab7.png)


###3. View all Credentials
After logging in successfully, if the user has not downloaded the extension, he is shown the page from where he can download the extension. Otherwise, the user is shown the main screen where he can see all of his stored credentials.
![Extension](https://user-images.githubusercontent.com/92238381/224171786-747d696e-cc05-41e0-b2b2-f9cf2f94a28d.png)


###4. Create Credential

After logging in successfully, the user lands on the main screen where he gets the option to add a credential. Credential contains the name, username, password, and url. When the user clicks on the create button, he is shown the pop up to add name, password, url and username. When the user clicks on the submit button, the extension comes into play. The extension decrypts the entered password and then this decrypted password along with the name, username, and url is sent to the server which stores this is the database.
![CreateCredential](https://user-images.githubusercontent.com/92238381/224171725-cdbc7d5d-7238-4a3e-a240-1495b9bf524a.png)

###5. Reveal Password
When the user clicks on the reveal icon to see the password for that particular credential, the extension uses the private key of the user stored in the chrome storage to decrypt the password and then displays the decrypted password on the UI.
###6. Share Credential
If a user wants to share a crendtial with someone, he would click on the share button for that credential. Doing so would open a pop up from where the user can select the people he wants to share the credential with. When the user clicks on the submit button after selecting the people, the extension uses the public keys of the people selected and ecrypts the password using those for each selected person and sends request to the server to store the encrypted password.

# Impacts

We have planned to use MERN stack (MongoDB, Express, React, NodeJS) to develop this project. So far the project is not completely developed to determine its impacts.


# Software Process Management


We have used AGILE methodology to divide the project into 5 sprints. Currently we are in the Development Stage sprint 1.

The Trello would have a weekly task and they would be updated everytime a task is completed. 

## How to Run and test the project

1. Make sure you have git installed via <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>
2. Install node js for your Operating system by following the instructions on this link :<https://nodejs.org/en/download/package-manager>
3. Clone the login_signup_microservice repository <https://github.com/CPS-595/login_signup_microservice> and Secure Password Manager repository: <https://github.com/CPS-595/Secure-Password-Manager-System> by copying the link one by one.

<img width="1420" alt="Screenshot 2023-02-03 at 3 25 02 PM" src="https://user-images.githubusercontent.com/46633374/216703697-324f3102-fea1-4834-b21d-bc5b6ca9139c.png">
4. Go to the cloned repository by entering "cd" followed by the path where you cloned the repository.
<img width="567" alt="Screenshot 2023-02-03 at 3 31 15 PM" src="https://user-images.githubusercontent.com/46633374/216704997-8aeeb140-e4da-4eb9-a4ff-93054b982154.png">

5. Install all the dependencies via "npm install" command.

<img width="566" alt="Screenshot 2023-02-03 at 3 33 39 PM" src="https://user-images.githubusercontent.com/46633374/216705517-9e5704ca-df48-4cb3-9c43-b38041c955f3.png">

6. Do step 4 & 5 for the Secure-password-Manager-System Repository as well.
7. Go the both repostories and enter command "npm start".
8. Go https://localhost:3000 to access the wesbite.



## Scrum process

### Sprint 0

Duration: 01/09/2023 - 02/4/2023

#### Completed Tasks:  

1. Project Plan
2. Initial draft of the report
3. Created microservice for login and signup
4. Created MongoDB database and tested the data insertion via microservice
5. Website Prototype and client approval


### Sprint 1

Duration: 02/05/2023 - 03/11/2023

#### Completed Tasks:  

1. UI for Login Page
2. UI for Signup Page
3. Endpoints for Login and Signup
4. Endpoint to show all the resources of a logged in user
5. Endpoint to create a resource
6. UI to see all the resources of a logged in user

