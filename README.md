# Flex Yoga Academy
#### A website for a yoga academy

## Table of Contents
- [Description](#description)
- [Implementation](#implementation)

## Description
This is a website for a yoga academy. This is task given to me. The problem statement of the task is given as below.

> **Problem Statement**:  
> Assume that you are the *CTO* for the outsourcing firm which has been chosen to build an admission form for the *Yoga Classes* which happen every month.
>
> Requirements for the admission form are:
> 
> - Only people within the age limit of **18-65** can enroll for the monthly classes and they will be paying the fees on a month on month basis. I.e. an individual will have to pay the fees every month and he can pay it any time of the month.
> 
> - They can enroll any day but they will have to pay for the entire month. The monthly fee is **500/- Rs INR**.
> 
> - There are a total of **4** batches a day namely **6-7AM, 7-8AM, 8-9AM and 5-6PM**. The participants can choose any batch in a month and can move to any other batch next month. I.e. participants can shift from one batch to another in different months but in same month they need to be in same batch

## Implementation

In the process of implementing the above problem statement, I have followed the following steps:

step 1: created a react app named `flex-yoga-academy` using `create-react-app` command.

step 2: created a `components` folder in the `src` folder and created `Form` components in it.

step 3: created a `Form` component which contains a form with the following fields:

- Name
- Email
- Gender
- Age
- Batch 
- Payment Status

step 4: Created an API using apache server and php to store the data in a database.

step 5: Created a database named `yoga form` and created a table named `user_info` with the following fields:

- user_id
- user_name
- user_email
- user_age
- date_of_registration
- payment_status
- batch

step 6: API I have created has following files:

- .htaccess
- index.php
- DbConnect.php

step 7: Finally the website is created and worked as expected and the data is stored in the database as well. (on the local machine)

The Live Demo of this project is stored in the Video Format as shown below

https://user-images.githubusercontent.com/71878747/212526675-a86844bc-2521-444b-b18f-1e4356409c52.mp4




