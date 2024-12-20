import './Team.css'
import Card from '../Card'

const Team = (props) => {
    const wrapperStyle = {backgroundColor: props.secondaryColor}
    const titleStyle = {borderColor: props.primaryColor}

    return (
        props.workers.length > 0 &&
        <section className="team-wrapper" style={wrapperStyle}>
            <h3 style={titleStyle}>{props.title}</h3>
            <div className="cards-wrapper">
                {props.workers.map((worker,index) => <Card 
                    key={worker.name+index}
                    name={worker.name}
                    imageUrl={worker.imageUrl}
                    position={worker.position}
                    primaryColor={props.primaryColor}
                    />
                )}
            </div>
        </section>
    )
}

export default Team