# React Meet up

 * webpack: bundler, bundles all the js and react component files into one bundle.js
* babel: transformer, turns es6 into es5
* state: state of being of an app
* this: is the current component
* Composability: ability to put things together. take one component and put them together and nest them that is composing

* Componenttree: App --> people component --> branches into han leah luke. You want to draw out your tree before than. In react application state only goes down. you can pass the parent component's state to the children components. the state of the parent is passed to the children through props ( Tree example )

* the picker can chose people or planets you have to pass the state down to the picker 

* Look up virtual DOM

* LifeCycle Hooks: Hooks for different points in the app's life cycle
    - Just a Method on the Component 
    * one for when component is first initializing
        - the first thing that it runs is the constructor and bind methods and setting the state
        - Component will mount
            - hey we are going to put this in the DOM what do you want to do first
        - Render Method is as it mounts
        - Component Did Mount 
            - Make API calls and add listeners and anaylitic stuff as well
    * one for when its updating
        * Component will Receive props 
        * Should Component update will run when state or props change and return from that true or false
        * Component will update 
        * component did update
    * one for when you are moving from the dom
    * Component will unmount
        - Stuff like listener if you are using like rs.js or firebase you want to remove the listener so you don't get errors
        

