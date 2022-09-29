import "./index.scss";




function ModalContent(props){

    

    return (
        <div className="modal-content-sub">

        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="image-cont"><img src={props.image1} alt={props.alt1} onError={e => e.target.style.display = 'none'}/></div>
        <div className="image-cont" ><video src={props.video1} onError={e => e.target.style.display = 'none'} controls/></div>
        
        <h4>What about it?</h4>

        <p className="content-description">{props.desc1}</p>
        <p className="content-description">{props.desc2}</p>
        <p className="content-description">{props.desc3}</p>

        <div className="image-cont"><img src={props.image2} alt={props.alt2} onError={e => e.target.style.display = 'none'}/></div>
        <div className="image-cont" ><video src={props.video2} onError={e => e.target.style.display = 'none'} controls/></div>
        <p className="content-description">{props.info1}</p>
        

        <div className="image-cont"><img src={props.image3} alt={props.alt3} onError={e => e.target.style.display = 'none'}/></div>
        <div className="image-cont" ><video src={props.video3} onError={e => e.target.style.display = 'none'} controls/></div>
        <p className="content-description">{props.info2}</p>

        <div className="image-cont"><img src={props.image4} alt={props.alt4} onError={e => e.target.style.display = 'none'}/></div>
        <p className="content-description">{props.info3}</p>

        <div className="image-cont"><img src={props.image5} alt={props.alt5} onError={e => e.target.style.display = 'none'}/></div>
        <p className="content-description">{props.info4}</p>

        <span><a target={props.projectLink} rel="noreferrer" href={props.projectLink}>
            Go to project source.
        </a></span> 
        </div>
    )
}


export default ModalContent;