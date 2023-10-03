# Calender API

Rest API made in TypeScript that saves calendar entries to a 
MySQL database.

## Requirements

- Node 18.17.1
- npm
- MySQL 8.0.32
- Git (optional)

## Instalation

In an empty folder clone this GitHub repository with command
~~~ bash
git clone https://github.com/AlexLP1010/calender-api.git
~~~
or download and extract the [source code](https://github.com/AlexLP1010/calender-api/archive/refs/heads/main.zip).

Instal all project dependencis using npm
~~~ bash
npm install
~~~

Create a new file `.env` and type enviroenmt variables like the example file [example.env](example.env).

Run set up database script
~~~ bash
npm run setUpDB
~~~

## Usage

For start in development mode, follow the next command
~~~ bash
npm run dev
~~~