import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const EventCard = ({event}) => {
    const {image, name} = event;
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default EventCard;