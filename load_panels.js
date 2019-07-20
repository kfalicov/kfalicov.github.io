"use strict";

const e = React.createElement;
const domContainer = document.querySelector('#boxes_container');

let div;
var projs = firebase.database().ref('projects');
projs.once('value').then(function(snapshot){
    snapshot.forEach(function(child){
        div = document.createElement('div');
        domContainer.appendChild(div);
        ReactDOM.render(
            React.createElement("div", {className: "zoom"}, 
            React.createElement("div", {className: "title"}, child.val().name),
            React.createElement("div", {className: "subtitle"}, child.val().desc), 
            React.createElement("a", {href: child.val().url})),
            div);
        
        VanillaTilt.init(div, {
            reverse:                true,
            perspective:            1000,
            reset:                  false, 
            "full-page-listening":  true
        });
    });
    
});

