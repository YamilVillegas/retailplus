import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const EventCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.event.image}
                alt={props.event.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.event.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default EventCard;