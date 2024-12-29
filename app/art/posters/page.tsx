import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";



interface EntryContents {
    mainContent: React.ReactNode;
    title: string;
    description: string;
    sideContent?: React.ReactNode;
    
}

export const Entry = (props: EntryContents) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6}>
                    { props.mainContent }
                </Col>
                <Col xs={12} md={6}>
                    
                </Col>
            </Row>
        </Container>


    );
    
};

