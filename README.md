# [TS] Infinite Scrolling with React 

This is a simple react page that displays an Infinite Scroll. It was built using Typescript and Chakra UI.

![Screenshot](https://i.imgur.com/SaQHRtt.jpg)

# Tree
The `data.json` file contains a sample response.
```
src
├── components
│   ├── House.tsx
│   ├── List.tsx
│   ├── index.ts
│   └── useRefElement.tsx
├── data.json
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── screens
│   ├── home
│   │   ├── Home.tsx
│   │   └── index.ts
│   └── index.ts
├── serviceWorker.ts
└── setupTests.ts
```
## Requirements

- Node >= 8.10

## How to set up the project
The basic steps to set up the project are:

- Clone the repo and open the folder
- Install the dependencies ```yarn install```
- (Optional) copy the .env-example and change the endpoint. It has a default Endpoint, so it won't crash if you don't make an env file.
  - You can use this command ```cp .env.example .env ```
- Run ```yarn start```

Once it's done you should be able to see the project up and running on ```http://localhost:3000/```