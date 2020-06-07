# Eventures


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Eventures** is a full-stack app dedicated to fulfill your event-finding needs! An app that can provide multiple functions with dedicated roles for Users and Event-Hosts. Maintain events through a created profile for easy and seemless management._


<br>

## MVP


_The **Eventures** MVP will include having a fully functioning backend RESTful JSON API along with full CRUD capabilities. Front-end will include having a built app with React._

<br>

### Goals

- _Implement CRUD (Create, Read, Update, Delete)_
- _Create a database utilizing at least 3 tables (Users, Hosts, Events)_
- _Implement Authentication using JWT_
- _Have at least 8 functioning, React components_
- _Use only React for DOM manipulation_
- _Utilize React Router for client-side routing_

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ App.jsx
      |__ App.css
      |__ Index.jsx
      |__ Index.css
          |__ User
                |__ Login.jsx
                |__ Login.css               
                |__ SignUp.jsx
                |__ SignUp.css
                |__ Profile.jsx
                |__ Profile.css
          |__ Events
                |__ EventList.jsx
                |__ EventList.css
                |__ EventInfo.jsx
                |__ EventInfo.css
                |__ EventCreate.jsx
                |__ EventCreate.css
          |__ Shared
                |__ Nav.jsx
                |__ Nav.css
                |__ Footer.jsx
                |__ Footer.css

      
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | class |   n   |   n   | _The App will contain all the compontents in list format._               |
|  Index  | class |   y   |   y   | _The Index will be the landing page for the app._       |
|    Nav    | class |   y   |   y   | _The Nav will be shown in every page for Users, Hosts, and non-registered users._ |
|   Login    |   class    |   y   |   n   | _The Login page will provide forms for the user login to account._      |
| SignUp | class |   n   |   y   | _The SignUp page will also provide the appropriate forms to successfully create an account._                 |
|    Profile    | class |   y   |   y   | _The Profile will be the page redirect upon signing in or signing up._ |
|    EventList    | functional |   y   |   n   | _The EventList will provide a list of all appropiate events, posted by Hosts._ |
|    EventInfo    | functional |   y   |   y   | _The EventInfo page will display more information about the selected event._ |
|    EventCreate    | class |   y   |   y   | _The EventCreate will be shown to Hosts to create an Event._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Design/Basic Structure    |    M     |     5 hrs      |     TBD     |    TBD    |
| Wireframing    |    H     |     4 hrs      |     TBD     |    TBD    |
| Pseudocoding    |    M     |     3 hrs      |     TBD     |    TBD    |
| Design (CSS)    |    H     |     4 hrs      |     TBD     |    TBD    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     |
| Authentication    |    H     |     3 hrs      |     TBD     |    TBD    |
| Accounts/Profiles    |    H     |     4 hrs      |     TBD     |    TBD    |
| React/Component Coding    |    H     |     5 hrs      |     TBD     |    TBD    |
| MVP    |    H     |     5 hrs      |     TBD     |    TBD    |
| Functioning Event Forms    |    H     |     3 hrs      |     TBD     |    TBD    |
| Post-MVP    |    L     |     3 hrs      |     TBD     |    TBD    |
| TOTAL               |          |     42 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.