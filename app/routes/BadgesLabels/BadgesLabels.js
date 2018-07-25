import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Badge,
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const BadgesLabels = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Badges Default" 
                        subTitle={(
                            <React.Fragment>
                                Basic button layout options.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Primary
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-default</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="primary">Primary</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Secondary
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-secondary</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="secondary">Secondary</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Success
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-success</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="success">Success</Badge>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Danger
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-danger</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="danger">Danger</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Warning
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-warning</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="warning">Warning</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Info
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-info</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="info">Info</Badge>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Light
                                <span className="small ml-1 text-muted">
                                    #1.07
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-light</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="light">Light</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Dark
                                <span className="small ml-1 text-muted">
                                    #1.08
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-dark</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="dark">Dark</Badge>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Badges Options"
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Basic button layout options.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Pill
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-default</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="primary" pill>Badge Pill</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Without Rounded
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-secondary</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="secondary">Without Rounds</Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Dropdown
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-success</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="success">Badge Dropdown</Badge>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Only Icon
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-danger</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="info">
                                <i className="fa fa-home"></i>
                            </Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Only Icon Link
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-warning</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="warning">
                                <i className="fa fa-link"></i>
                            </Badge>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Only Icon Rounded
                                <span className="small ml-1 text-muted">
                                    #2.06
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-info</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="danger">
                                <i className="fa fa-exclamation"></i>
                            </Badge>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Badge: Only Icon Rounded Link 
                                <span className="small ml-1 text-muted">
                                    #2.07
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Default label styling. To use, 
                                add <code>.label-light</code> to the base <code>.label</code> class.
                            </p>
                            <Badge color="dark">
                                <i className="fa fa-gear"></i>
                            </Badge>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}
        </Container>
    </React.Fragment>
);

export default BadgesLabels;