# Front End Test

## Provided

A web application using provided data and a logo. It contains two main components: Home and App.

styles.scss has been used for global styling

## Functionalities

Responsive single page "app" that displays years and vehicle models in a grid format.

Grid with the contents of "years" as the header, and "vehicle-models" as the first column.

If we click on a vehicle-model/year box, it is toggled (removes the entry from the javascript "coverage" object if it previously existed or adds it if it did not...) and the visual displays the new state.

The visual should now show a grey box if checked and a grey one if not.

### Install Parcel

Parcel is required for this project to run properly.

```sh
npm install -g parcel-bundler
```

### Install dependencies

```sh
npm install
```

## Run dev environment

```sh
npm run dev
```

Navigate to http://localhost:1234
