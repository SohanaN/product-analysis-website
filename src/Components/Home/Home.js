import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col md={8}><h1>Welcome To</h1>
                            <h1><strong>Queen's Abaya Store</strong></h1>
                            <p><strong>Designer abaya dress for women.Abaya is the latest trendy modest Islamic Outfit.Exclusive online selection of women's modest Khaleeji wear including abayas, kaftans, travel wear, dresses and maternity outfits that spell elegance. Buy Premium Range of Designer Abayas Online. Fast Delivery and Free Returns </strong></p>
                            <Button>Shop Now</Button>
                        </Col>
                        <Col md={4}>
                            <Image src="/img/abaya.png" alt="Abaya image" fluid />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <h2>Customer Reviews</h2>
                    <Button>See All Reviews</Button>
                </Container>
            </section>
        </div>
    );
};

export default Home;