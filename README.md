# simple-toggl

A pretty simple and bare bones cli for using toggl.  
[![npm version](https://badge.fury.io/js/simple-toggl.svg)](https://badge.fury.io/js/simple-toggl)

## Installing

Install it by running `npm install -g simple-toggl`

## Set up

### API Token

To use simple-toggl, you must provide an api-token. This can be done via the `set-token` command.
Information on where you can get your token can be found [here](https://support.toggl.com/en/articles/3116844-where-is-my-api-token-located)

```sh
toggle set-token <your-api-token>
```

### (Optional) Project ID

If you're working on the same project, you can set a default project ID. This way, all your time entries will default to the same project

```sh
toggle set-pid <pid>
```

## Usage

### current entry

Get the current entry if one exists. This is the default comand

```sh
toggle
```

### todays entries

Get a list of todays entries.

```sh
toggle day
```

### start

Starts a new time entry. Will stop the current entry if one is running.

```sh
toggle start my-awesome-task
```

### stop

Stops the currenty entry if one is running

```sh
toggle stop
```

### set-token

Sets an api token to authenticate you

```sh
toggle set-token <your-api-token>
```

### set-pid

This is optional. Set a project id for your tasks

```sh
toggle set-pid <pid>
```
