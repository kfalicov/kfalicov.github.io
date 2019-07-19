const e = React.createElement;
const domContainer = document.querySelector('#boxes_container');

var projs = firebase.database().ref('projects');
projs.once('value').then(function(snapshot){
    snapshot.forEach(function(child){
        let div = document.createElement('div');
        domContainer.appendChild(div);
        ReactDOM.render(<div className='zoom' data-tilt data-tilt-reverse data-tilt-full-page-listening>{child.val().name}</div>, div);
        
    });
    VanillaTilt.init(document.querySelectorAll(".zoom"), {
        reverse:                true,
        "full-page-listening":  true
    });
});

