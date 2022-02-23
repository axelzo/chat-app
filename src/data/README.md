# Welcome Tech Chat

Welcome Tech Chat is a chat app that allows 2 or more users to engage in asynchronous chats across multiple rooms. The
purpose of this exercise is to implement a frontend for creating and retrieving messages.

## Instructions

You are encouraged to implement a single page application (SPA) using a common javascript framework (e.g. React, Vue,
Ember), although you are free to implement the requirements in any way that best demonstrates your frontend experience.
Feel free to use CSS libraries (e.g. Bootstrap, Foundation) for styling.

Set up a project locally **_prior to the interview_**. The intent is so that any frameworks/libraries and boilerplate
code are in place prior to implementing the requirements.

You are **_not required to implement any requirements prior to the interview_**, although you can if you prefer. Live
coding is not for everyone and we want you at your best, so if you decide to implement requirements before the
interview, we will discuss your implementation decisions and ways to improve on what you have completed given more time
and resources.

Test data can be found in **/data**:
* _users.json_ - Each user has a name and email
* _rooms.json_ - Each room has a name
* _messages.json_ - Each message is associated to a room and a user

Please reply with a link to the github repository when complete. You can keep it private and add GitHub user `czivko`,
`daveed`, and `josephcruz` to have access.

## Requirements

Implement as many of the requirements as you can. Even if not all requirements are met, build something that is
functional and as close to the requirements as possible. It is OK if it is not production ready code. Feel free to use
any resources but all code and functionality should be written by you.

1. Rooms Listing
   * Create page that lists all rooms by name
   * Each room is a link to the messages for that room (see Requirement #2)
   * (optional) Rooms can be sorted by name in ascending or descending order
2. Messages Listing
   * Create page that lists all messages for a selected room
   * Each room in the rooms listing (see Requirement #1) links to this page
   * Messages are sorted by id in descending order
   * Display body and user name (not user id) for each message
   * (optional) Messages can be sorted by id in ascending or descending order
3. Users
   * Create page that lists all users
   * A user can be selected as the _logged in_ user
   * (optional) Users can be sorted by name in ascending or descending order
4. Send Message
   * Create form that takes a body as input
   * The sender is the _logged in_ user
   * When message is submitted, message is appended/prepended (depending on sort order) to message
     listing
    * New message does not have to be persisted (i.e. it's ok if message disappears on refresh)
   * (optional) Persist message
