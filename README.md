![alt text](https://github.com/rubenbase/rufrontgen/blob/master/media/rufrontgen.jpg)

<br />

<div align="center"><strong>Start your web and mobile project in just seconds!</strong></div>
<div align="center">A highly scalable, efficient, offline-first and visual rich project made with best practices</div>

<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/rubenbase/rufrontgen">
    <img src="https://david-dm.org/rubenbase/rufrontgen.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/rubenbase/rufrontgen#info=devDependencies">
    <img src="https://david-dm.org/rubenbase/rufrontgen/dev-status.svg" alt="devDependency Status" />
  </a>
</div>

<br />

## Quick start

You will need to install Postgres. The db info is located in the ormconfig file.
Also, you will need to install redis and create a .env file on the server and client renaming the .env.example file on the code.

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/rubenbase/rufrontgen.git`
3.  Move to the appropriate directory: `cd rufrontgen`.<br />
4.  Run `yarn install` in order to install dependencies.<br />
5.  Move to server and run `yarn start` or `yarn win-start` to start the server.<br />
6.  Move to client and run `yarn start` to start the client.<br />
    _At this point you will see the example app at `http://localhost:3000` and the Graphql console at `http://localhost:4000`._

Now you're ready!

## ☑ TODO

- [x] Add subscriptions support
- [x] Add roles/permissions
- [x] Add storybook and stories
- [x] Add multiple language support
- [x] Update to apollo server 2.0
- [ ] Improve folder structure / Improve REST implementation / Improve data loaders system `DOING`
- [ ] Implement SSR
