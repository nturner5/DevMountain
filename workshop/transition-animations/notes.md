## Transition Animation in CSS

.button {
    width: 100px;
    height: 20px;
    position: relative;
    background-color: blue;
    animation: slide-right 1s;
    transition: rotate-Back 2s;
    transform: translate3d(x, y, z)
}

.button:hover {
    animaiton: container-rotate 2s;
}

@keyframes slight-right {
    0% { left:0 }
    50% { left:50px }
    100% { left: 300px }
}

@keyframes container-rotate {
    0% { transform:rotate(0); }
    100% { transform:rotate(50degree); }
}


- This will move the button and slide it over to the right according 
to the keyframes function we created.

- The container rotate will rotate the container by 50 degree

