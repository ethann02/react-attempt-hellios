import React from 'react';
import { useProxy } from 'valtio';
import { Tab, ListGroup, Col, Row, Card } from 'react-bootstrap';
import store from './../../helpers/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faFilter, faTrash, faMousePointer, faArrowsAlt, faPlay, faBorderStyle, faDownload, faFile, faCog } from '@fortawesome/free-solid-svg-icons'

// Sections
import Header from './sidebar/includes/Header';
import Components from './sidebar/Components';
import NewComponent from './sidebar/actions/NewComponent';
import InspectComponent from './sidebar/InspectComponent';
import GenerateMiniMap from './../../helpers/minimap';

function Sidebar() {

    const state = useProxy(store);
    // store.editor.minimap = GenerateMiniMap(store.editor.content, store)

    if (state.tool === 'move') {
        document.body.style.cursor = "move";
    } else {
        document.body.style.cursor = "default";
    }

    return (
        <div className={[state.size + " sidebarWrapper"]} >
            <Header />
            <div>
                <ListGroup.Item className="title mt-0">Tools</ListGroup.Item>
                <ListGroup.Item>
                    <Card className="w-100">
                        <Row className="rowPadding">
                            <Col md={3} className="p-0 text-center" >
                                <ListGroup.Item action className={state.tool === 'inspect' ? 'active' : ''} onClick={() => { store.tool = 'inspect'; }}>
                                    <FontAwesomeIcon icon={faMousePointer} className="h5 mb-2 mt-2 mr-0 w-100" />
                                </ListGroup.Item>
                            </Col>
                            <Col md={3} className="p-0 text-center">
                                <ListGroup.Item action className={state.tool === 'preview' ? 'active' : ''} onClick={() => { store.tool = 'preview'; }}>
                                    <FontAwesomeIcon icon={faPlay} className="h5 mb-2 mt-2 mr-00 w-100" />
                                </ListGroup.Item>
                            </Col>
                            <Col md={3} className="p-0 text-center">
                                <ListGroup.Item action className={state.tool === 'delete' ? 'active' : ''} onClick={() => { store.tool = 'delete'; }}>
                                    <FontAwesomeIcon icon={faTrash} className="h5 mb-2 mt-2 mr-00 w-100" />
                                </ListGroup.Item>
                            </Col>
                            <Col md={3} className="p-0 text-center">
                                <ListGroup.Item action className={state.tool === 'move' ? 'active' : ''} onClick={() => { store.tool = 'move'; }}>
                                    <FontAwesomeIcon icon={faArrowsAlt} className="h5 mb-2 mt-2 mr-00 w-100" />
                                </ListGroup.Item>
                            </Col>
                        
                        </Row>
                    </Card>
                </ListGroup.Item>
                <ListGroup.Item className="title">View</ListGroup.Item>
                <ListGroup.Item>
                    <Card className="w-100">
                        <Row className="rowPadding">
                            <Col md={6} className="p-0 text-center" >
                                <ListGroup.Item action className={state.tab === 'inspect' ? 'activep p-0' : ' p-0'} onClick={() => { store.tab = 'inspect'; }}>
                                    <span className="mb-2 mt-2 mr-0 w-100">
                                        Inspect
                                    </span>
                                </ListGroup.Item>
                            </Col>
                            <Col md={6} className="p-0 text-center" >
                                <ListGroup.Item action className={state.tab === 'components' ? 'activep p-0' : ' p-0'} onClick={() => { store.tab = 'components'; store.size = 'normal' }}>
                                    <span className="mb-2 mt-2 mr-0 w-100">
                                        Components
                                    </span>
                                </ListGroup.Item>
                            </Col>
                        </Row>
                    </Card>
                </ListGroup.Item>
            </div>
            <Tab.Container id="sidebar" activeKey={state.tab}>
                <Tab.Content>
                    <Tab.Pane id={"inspect"} eventKey={"inspect"}>
                        <InspectComponent />
                    </Tab.Pane>
                    <Tab.Pane id={"components"} eventKey={"components"}>
                        <Components />
                    </Tab.Pane>
                    <Tab.Pane id={"newComponent"} eventKey={"newComponent"}>
                        <NewComponent />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default Sidebar;
