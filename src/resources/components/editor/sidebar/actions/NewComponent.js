
import { ListGroup, Row, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faGripHorizontal, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { useProxy } from 'valtio';
import store from '../../../../helpers/store';
import { replace } from '../../../../helpers/ui';
import GenerateMiniMap from '../../../../helpers/minimap';
import NewComponentItem from './newComponent/NewComponentItem';
import componentsIndex from './../../../../storage/componentsIndex';

function AddComponent(component, state) {

  replace(store.editor.content, state, component);

  store.editor.minimap = GenerateMiniMap(store.editor.content, store);
  store.currentselected = store.editor.minimap.length - 1;
  store.tab = 'inspect';
}

function NewComponent(fatherComponent) {
  // Use ID for the amount of times it needs to indent right
  const state = useProxy(store);
  const [search, setsearch] = useState(null)

  return (
    <ListGroup>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item action onClick={() => { store.tab = 'inspect'; store.size = 'normal' }}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
        <span className="listGroupText">Back</span>
      </ListGroup.Item>

      <div>
        <ListGroup.Item className="title">
          {
        (state.currentselected != null) ? (
          'New Subcomponent'
        ) : 'New Component'
      }
          </ListGroup.Item>
        <ListGroup.Item>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="Search"
              onChange={(e) => { setsearch(e.target.value) }}
            />
            <InputGroup.Append>
              <Button variant="wire" disabled>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row className="w-100">
            {
              componentsIndex.filter((i) => {
                if (search === null) {
                  return i;
                } else if (
                  i.name.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
                  i.type.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
                  i.description.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
                  i.group.toString().toLowerCase().includes(search.toString().toLowerCase())
                ) {
                  return i;
                }
              }).map((comp, i) => (
                state.currentselected == null ? (<NewComponentItem comp={comp} id={i + 1} />) : (
                  <Col md={12} className="comp" onClick={((e) => { AddComponent(comp, state) })}>
                    <div className="compIcon">
                      <FontAwesomeIcon icon={comp.icon} className="h1 mb-0" />
                    </div>
                    <div className="compText">
                      <div class="title mt-0">{comp.group}</div>
                      <div className="compTitle">
                        {comp.name}
                      </div>
                      <div>
                        {comp.description}
                      </div>
                    </div>
                  </Col>
                )
              ))
            }
          </Row>
        </ListGroup.Item>
      </div>

    </ListGroup>
  );
}

export default NewComponent;
