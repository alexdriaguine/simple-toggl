<p align="center">
  <a href="https://www.npmjs.com/package/simple-toggl">
    <img alt="simple-toggl" src="https://user-images.githubusercontent.com/14088342/121914871-f658b680-cd32-11eb-82a6-a9a667303594.png" width="300">
  </a>
</p>

<p align="center">
	A pretty simple and bare-bones cli for using <a href="https://reactnative.dev">Toggl</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/simple-toggl"><img src="https://img.shields.io/npm/v/simple-toggl.svg?style=flat-square"></a>
  <a href="https://github.com/alexdriaguine/toggler"><img src="https://img.shields.io/github/stars/alexdriaguine/toggler?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/simple-toggl"><img src="https://img.shields.io/npm/dm/simple-toggl.svg?style=flat-square"></a>
</p>


## Installing

Install it by running `npm install -g simple-toggl`

## Set up

### API Token

To use simple-toggl, you must provide an api-token. This can be done via the `set-token` command.
Information on where you can get your token can be found [here](https://support.toggl.com/en/articles/3116844-where-is-my-api-token-located)

```sh
toggl set-token <your-api-token>
```

### (Optional) Project ID

If you're working on the same project, you can set a default project ID. This way, all your time entries will default to the same project

```sh
toggl set-pid <pid>
```

## Usage

### current entry

Get the current entry if one exists. This is the default comand

```sh
toggl
```

### todays entries

Get a list of todays entries.

```sh
toggl day
```

### start

Starts a new time entry. Will stop the current entry if one is running.

```sh
toggl start my-awesome-task
```

### stop

Stops the currenty entry if one is running

```sh
toggl stop
```

### set-token

Sets an api token to authenticate you

```sh
toggl set-token <your-api-token>
```

### set-pid

This is optional. Set a project id for your tasks

```sh
toggl set-pid <pid>
```
