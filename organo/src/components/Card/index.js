import './Card.css'

//Exemplo de desestruturacao de props

const Card = ({primaryColor, name, position, imageUrl}) => {
    const headerStyle = {backgroundColor:primaryColor}
    return(
        <div className="card-wrapper">
            <div className="card-header" style={headerStyle}>
                <img className="image" src={imageUrl} alt={name}></img>
            </div>
            <div className="card-body">
                <h4 className="name">{name}</h4>
                <h5 className="position">{position}</h5>
            </div>
 
        </div>
    )
 }
 

export default Card