# tech-blog
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This application delivers a blogging platform, allowing users to signup, sign in, and view, create, and comment posts.
  The deployed application can be found [here.](https://arcane-thicket-46198.herokuapp.com/), and GitHub repo [here.](https://github.com/BradDWagner/tech-blog)

  ## Table of Contents

  ♦︎[Installation](#installation)

  ♦︎[Usage](#usage)

  ♦︎[Contributing](#contributing)

  ♦︎[Tests](#tests)

  ♦︎[Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the following command:
  ```
  npm i
  ``` 
  To initialize the SQL database, from the MySQL shell run:
  ```
  source db/schema.sql
  ```
  To seed the database run:
  ```
  npm run seed
  ```
  To initialize the server run:
  ```
  npm start
  ```

  ## Usage

  After seeding and deploying the application, users will be presented with existing blog posts to view. To view a specific blog post, or create their own the user will have to either log in or signup by using the login link in the nav bar or clicking any of the posts while not logged in. Once logged in the user can view existing blog posts and leave comments by visiting the specific post. From the dashboard page linked in the nav bar the user can view their exisiting posts and create new ones.

  ## License

  This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.


  ## Questions

  If you have any questions about the repo, open and issue or contact me directly at BradDWagner@outlook.com. You can find more of my work on my [GitHub](https://github.com/BradDWagner).

