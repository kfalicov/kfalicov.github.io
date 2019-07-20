const e = React.createElement;
const domContainer = document.querySelector('#boxes_container');

let div;
var projs = firebase.database().ref('projects');
projs.once('value').then(function(snapshot){
    snapshot.forEach(function(child){
        div = document.createElement('div');
        domContainer.appendChild(div);
        ReactDOM.render(<div className='zoom'>
            <div className='title'>{child.val().name}</div>
            <div className='subtitle'>{child.val().desc}</div>
            <a href={child.val().url}></a>
        </div>, div);
        
        VanillaTilt.init(div, {
            reverse:                true,
            perspective:            1000,
            reset:                  false, 
            "full-page-listening":  true
        });
    });
    
});

