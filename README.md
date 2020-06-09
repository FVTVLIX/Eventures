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

#### Adobe XD Wireframe

[Live Demo](https://xd.adobe.com/view/1e841117-45c4-4a8a-61b1-c5e0d05b41dd-68b5/)

- Desktop Home Landing

![Desktop Home](https://i.imgur.com/094Zmcj.png)

- Resource Index

![Page Layout](https://i.imgur.com/1GRBIcp.png)

- Tablet Home Landing

![iPad Pro 12.9in Home Screen](https://i.imgur.com/v7hOcT4.png)

- Mobile Home Landing

![iPhone XR/XS Max Home Screen](https://i.imgur.com/sXfpg2U.png)

<br>

#### Component Tree


![Component Tree](https://i.imgur.com/rK1ORDu.png)

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
      |__ Main.jsx
      |__ Main.css
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
                |__ EventManage.jsx
                |__ EventManage.css
                |__ Ticket.jsx
                |__ Ticket.css
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

![ERD Model](https://i.imgur.com/DFvxUa4.png)

<br>

***

## Post-MVP

- _Add seemless calendar functionality_
- _Add membership tiers for exclusive discounts/events_
- _Implement a live chat feature for ticket-holders with the same event._
- _Integrate connections with social media._
- _Add other services, such as Online Webinar Events/Classes._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.