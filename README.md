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

### Deployed Site

[Eventures Live Site](https://eventures.netlify.app/)


<br>

## MVP


_The **Eventures** MVP will include having a fully functioning backend RESTful JSON API along with full CRUD capabilities. Front-end will include having a built app with React._

<br>

### Goals

- _Implement CRUD (Create, Read, Update, Delete)_
- _Create a database utilizing at least 3 tables (Users, Categories, Events)_
- _Implement Authentication using JWT_
- _Have at least 8 functioning, React components_
- _Use only React for DOM manipulation_
- _Utilize React Router for client-side routing_

<br>

<!-- ### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ | -->

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
      |__ Home.jsx
      |__ Home.css
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
                |__ CreateEvent.jsx
                |__ CreateEvent.css
                |__ EventInfo.jsx
                |__ EventInfo.css
                |__ EventList.jsx
                |__ EventList.css
                |__ EventManage.jsx
                |__ EventManage.css
                |__ ShowCategories.jsx
                |__ ShowCategories.css
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
| Design/Basic Structure    |    M     |     5 hrs      |     3 hrs     |    3 hrs    |
| Wireframing    |    H     |     4 hrs      |     2 hrs     |    2 hrs    |
| Pseudocoding    |    M     |     3 hrs      |     2 hrs     |    2 hrs    |
| Design (CSS)    |    H     |     4 hrs      |     6 hrs     |    6 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     4 hrs     |     4 hrs     |
| Authentication    |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Accounts/Profiles    |    H     |     4 hrs      |     2 hrs     |    2 hrs    |
| React/Component Coding    |    H     |     5 hrs      |     8 hrs     |    8 hrs    |
| MVP    |    H     |     5 hrs      |     4 hrs     |    4 hrs    |
| Functioning Event Forms    |    H     |     3 hrs      |     5 hrs     |    5 hrs    |
| Post-MVP    |    L     |     3 hrs      |     TBD     |    TBD    |
| TOTAL               |          |     42 hrs      |     39 hrs     |     TBD     |


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

_Filtering through the categories was a bit of a challenge. This was mainly due to the way I had the Categories table setup in the Back End. I'm taking the appropriate Event and mapping it through its corresponding Category ID filter. I'm also displaying it in newest event first._

```
        {
          events
            .filter((event) => {
              if (categoryId) {
                return event.categories.map(cat => cat.id).includes(parseInt(categoryId))
              } else {
                return true
              }
            })
            .reverse()
            .map(event => (
              <React.Fragment key={event.id}>
                <div className="event_container">
                  <Link to={`/event/${event.id}`}>
                    <img
                      alt="event_images"
                      className='event_image'
                      src={event.img_url} />
                    <p className='event_date'>{event.date}</p>
                    <p className='event_title'>{event.title}</p>
                  </Link>
                  {
                    currentUser && currentUser.id === event.user_id && (
                      <>
                        <button className="eventlist_button" onClick={() => history.push(`/event/${event.id}/edit`)}>Edit</button>
                        <button className="eventlist_button" onClick={() => destroyEvent(event.id)}>Delete</button>
                        <Link to='/new/event'>
                          <button className="eventlist_button">Create</button>
                        </Link>
                      </>
                    )
                  }
                </div>
              </React.Fragment>
            ))
        }
```

<!-- ## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like. -->