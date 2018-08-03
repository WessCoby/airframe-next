import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Input,
    InputGroupAddon,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Media,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
} from './../../components';

import ProjectsList from './ProjectsList';
import ProjectsGrid from './ProjectsGrid';
import {
    ProjectsLeftNav
} from "../components/ProjectsLeftNav";


const Projects = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    { /* START Header Nav */}
                    <div className="d-flex justify-content-end">
                        <Breadcrumb className="mr-auto d-flex align-items-center">
                            <BreadcrumbItem active>
                                Home
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <ButtonGroup className="p-2">
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-bars"></i>
                            </Button>
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-th-large"></i>
                            </Button>
                        </ButtonGroup>
                        <Button color="secondary" className="align-self-center">
                            <i className="fa-fw fa fa-plus"></i>
                        </Button>
                    </div>
                    { /* END Header Nav */}

                    { 
                        props.match.params.type === "list" ?
                            <ProjectsList /> :
                            <ProjectsGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Projects.propTypes = {
    match: PropTypes.object.isRequired
};


export default Projects;