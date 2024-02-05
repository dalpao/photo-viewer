import './PhotoViewer.css'

export function PhotoViewer(props: {name: string, url: string}) {    
    return (                
        <div className="myClass">               
           <h1 className="title"> Hello {props.name}! </h1>
           <img className="image" src={props.url} alt='The selected view'/>
        </div>
    );
}
