// Write your code here.
import './index.css'

const cardProfile = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails
  ;<li className={`{className}card`}>
    <h1 className="h">{title}</h1>
    <p className="p">{description}</p>
    <image src={imageUrl} className="image" />
  </li>
}
