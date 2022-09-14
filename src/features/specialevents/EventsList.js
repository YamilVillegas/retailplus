import React from "react";
import { Col, Row } from 'reactstrap';
import EventCard from "./EventCard";
import { EVENTS } from "../../app/shared/EVENTS";

const EventsList = () => {
    return (
        <Row className="ms-auto">
            {EVENTS.map((event) => {
            return (
                <Col md='5' className="m-4" key={event.id}>
                    <EventCard event={event} />
                </Col>
            );
        })}
        </Row>
    )
}

export default EventsList;