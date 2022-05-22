# Installing the DS in a React Project

This guide walks you through installing and using this DS on an existing React app.

For help with setting up the necessary development environment, see the [Create React App](https://create-react-app.dev/docs/getting-started/) Getting Started Guide.

By the end of this guide, you’ll have the DS set up on your project and have access to all of our components.

Consult Storybook for the list of available components and props that they require.

## Install component-library Packages

Install the React package. It contains all of the React components and styles needed to build with component-library.

```javascript
npm i @bonjour_les_pixels/component-library

```

## Adding Your First Component

This is just one example to implement functionality to get your project started.

Here's an example with the Button component:

```javascript
import { Atoms } from "@bonjour_les_pixels/component-library";

function NewButtonComponent(props) {
  return (<Atoms.Button 
        notice="info"
        handleClick={ () => handleClick) }
        variant="text"
    /">
        Click Here
    </Atoms.Button>)
}
```

This Design System is based on the Atomic Design Principles developed by Brad Frost. Atomic Design methodology involves breaking an interface layout down into its basic components, which are then reused throughout the same interface. The main point in using this method is to create a flexible and future-proof design elements.

Each element of the layout is basically classified according to its own composition.

There are **3 distinct levels** in Atomic Design:

    Atoms
    Molecules
    Organisms

## Finding the code to other Components

This Design System leverages Storybook to document all the React components and style guidelines. The Storybook documentation can be found [here](https://guillaumebarreau.github.io/component-library/). For your convenience, the Design System components have been organized into logical categories **Atoms, Molecules, Organisms** based on both form and function. 

	* Go to the [bonjour_les_pixes/component-library React Storybook](https://guillaumebarreau.github.io/component-library/).

	* Find the Component you need in the "Components" section.

	* Navigate to the Docs tab. It's typically at the top of screen next to Canvas.

	* Navigate down the page until you find your component variant.
