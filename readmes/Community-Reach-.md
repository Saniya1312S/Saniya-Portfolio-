# Community Reach

## Table of Contents

* Aim
* Functions
* Description
* How to run
* Progress
* Future Features

## Aim

**Community Reach** is a platform designed to bridge communication gaps and foster social interactions within communities, businesses, and schools. Our overarching goal is to combat feelings of isolation and make it easier for people to connect with others. The platform aims to:

1. Alleviate the "imposter syndrome" many individuals experience.
2. Facilitate easy and approachable ways for people to step out and connect with others.
3. Serve as a primary source for community events and gatherings.

## Function

The website operates as a centralized hub for community event information. Its core functions include:

1. Providing a comprehensive list of events happening within a user's community.
2. Allowing users to host or promote their events to gain more visibility.
3. Offering a search function to identify events based on location or interest.

### Description

## Pages

**Community Reach** consists of five key pages, each serving a specific purpose:

### Home Page

* **Description** : The Home Page serves as the platform's welcoming introduction, providing a brief overview of its features and functionalities.
* **Key Features** :
* Overview of the platform.
* Highlighting key features and benefits.
* Sign-in options for existing users.(future feature )

![1704745104591](image/README/1704745104591.png)

### Host an Event Page

* **Description** : The Host an Event Page is designed for users who want to create and promote their events. It's a form-based page where users can provide detailed information about their event.
* **Key Features** :
* Event creation form.
* Input fields for event details: Event name , Event description, event coordinator email , event coordinator email and more .
* Event submission functionality.
* ![1704747729879](image/README/1704747729879.png)

### EventFinder

* **Description** : The Location Finder Page serves a dual function. Users can use it to discover events happening in their desired location, and clicking on a specific event opens directions to that event on Google Maps.
* **Key Features** :
* Location search bar.
* Python script connecting the search bar to the database hosted on AWS.
* Event listings with links to Google Maps directions.( future feature )
* ![1704745176484](image/README/1704745176484.png)

### Events Page

* **Description** : The Events Page is a crucial component of the platform, offering users a comprehensive list of 9 of the earliest community events. It ensures users are well-informed about significant happenings in their area.
* **Key Features** :
* Event descriptions.
* Location details with direct links for navigation.
* Point of contact information( the event name , Id  , date and address ).'

### Mood-based Events

* **Description** : The Mood-based Events Page enhances user experience by suggesting events based on a user's interests and mood, providing personalized event recommendations.
* **Key Features** :
* Mood-based event suggestions based on pictures
* Personalized event recommendations tailored to user preferences.( working on that)
* Enhances user engagement and event discovery.

  ![1704747789810](image/README/1704747789810.png)

## How to Run

1. Clone this repository to your local machine.
2. Ensure you have Python and Flask installed.
3. Navigate to the project directory in your terminal.
4. Run the following command to start the application:
   <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">python flask.py
   </code></div></div></pre>
5. Open your web browser and go to `http://localhost:5000` to access the application.

## Progress

We are actively working on improving and expanding  **Community Reach** :

1. Currently working on hosting the website on AWS lightsail and making a server
2. Implemeting  the mood event page to access the database and return events based on interest to the user
3. Adding a table to the database to store the interest of people and making a relationship between the interest table and event table
4. Implementing the Map features by connecting with Google maps Api
5. Implementing the website to be responsive with different device screens

## Future Features

Our plans for future enhancements include:

1. Adding real events to the database and also opening it up to university students for real use
2. Add a login page and make a new account for people to be able to make new accounts for the website  for security efficnecy using  firebase
3. Add a table to store email, username , and password in database
