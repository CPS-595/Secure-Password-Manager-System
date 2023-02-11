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


# Project Management Information

Management board (private access): <https://trello.com/w/secure_password_manager_system>

Source code for Frontend (private access): <https://github.com/CPS-595/Secure-Password-Manager-System>

Source code for Backend (private access): <https://github.com/CPS-595/login_signup_microservice>


# Overview
 
The idea is to build a secure web application where users can store and share their passwords for different urls.

Every person or organization has multiple accounts over various web platforms like Gmail, MongoDB, Facebook or even their wifi password. Remembering all the passwords across different platforms can be a problem especially when it comes to organizations as they need to share passwords among team members. 

The intended password manager system would allow team members to store and share credentials securely. For instance, the wifi password of your office, the administrator password of a router, or your organization's social media account password. It leverages encryption and decryption algorithms to encrypt and decrypt the secrets using public and private keys. This system would be implemented using a website to manage the passwords and a Chrome extension to store the private key on the browser and interact with the website to do the decryption.


# Project Context and Scope

The project was introducted to us by Novobi, a Software Company in Texas but the reason why we chose to work on this project was that whenever we used to enter credentials to any website, google chrome used to ask us "Do you want to save your credentials?" and once you save your credentials you can direclty just click on the password section and the password was autofilled by the chrome. We often wondered if we could work on building something like this and that when we though of building this project.

So far the project is in its development stage Sprint 1. So far we have built a website along with database connectivity to store credentials.Futhermore, we are working on securely storing the password in Database by encrypting it and also we are trying to use passphrase for authentication. For session management we are using AWT tokens. 



# System Analysis

A rough design of the website that we planned to build will include a portal that will allow the user to add a chrome extension on the user browser which will generate and store the private key. Anytime the password needs to be reveal or store the public key would be used to encrypt the password and store in the database while private would be used to decrypt and reveal the password. 

Everytime the user is comes back to the portal or the browser after few minutes if inactivity, the user will be asked to enter the passphrase which he stored after logging in.


## High-level Requirements

The prototype has been made and currently the main website is being built on it so far the we are working on the authentication part but in the coming sprints we would be building an extension to enable encryption and decrpytion via  public and private keys.

## Use Case Diagram

![Client UI Dataflow drawio (1) (1)](https://user-images.githubusercontent.com/46633374/218194429-b06a08cd-7303-465f-98ee-f0e45c64df4e.png)

                       User interaction with the website
## Sequence Diagram

![Authorization Dataflow drawio (1)](https://user-images.githubusercontent.com/46633374/218194491-c5f61d6d-ec31-4fb7-9c93-99f68191bcf8.png)


                     How authentication works for different cases
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

