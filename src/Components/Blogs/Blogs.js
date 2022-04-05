import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h2>
                        <strong>Qn: 1 </strong>
                        What is Context API ?
                    </h2>
                    <p>
                        <strong>Ans: </strong>
                        Context API allows to share state across the entire app lightly and with ease. Context provides a way to pass data through the component tree without having to pass props down manually at every level.Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.
                    </p>
                </Row>
                <Row>
                    <h2>
                        <strong>Qn: 2 </strong>
                        What is Semantic tag?
                    </h2>
                    <p>
                        <strong>Ans: </strong>
                        Semantic tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.
                        The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.
                        The pages made with semantic elements are much easier to read.
                        It has greater accessibility. It offers a better user experience.In JavaScript, consider a function that takes a string parameter, and returns an li element with that string as its textContent.In CSS, consider styling a list with li elements representing different types of fruits.
                    </p>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;