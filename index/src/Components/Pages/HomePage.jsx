import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";

const HomePage = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={1}>
                        <Sidebar />
                    </Col>
                    <Col md={11}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage