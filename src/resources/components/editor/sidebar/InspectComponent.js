
import { ListGroup } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useProxy } from 'valtio';
import store from '../../../helpers/store';


function InspectComponent() {
  const state = useProxy(store);

  return (
    <div>
      {
        state.editor.minimap.map((comp) => (
          state.currentselected === comp.id ? (
            <ListGroup>
                <ListGroup.Item className="title">Component Details</ListGroup.Item>
                <ListGroup.Item>{comp.name}</ListGroup.Item>
                <ListGroup.Item className="title ">Component Actions</ListGroup.Item>
                <ListGroup.Item action onClick={() => { store.tab = 'newComponent'; store.size = 'normal'; }}><FontAwesomeIcon icon={faPen} /> Edit Component</ListGroup.Item>
                <ListGroup.Item action onClick={() => { store.tab = 'newComponent'; store.size = 'normal'; }}><FontAwesomeIcon icon={faTrash} /> Delete Component</ListGroup.Item>
                <ListGroup.Item className="title ">
                  Sub-Components
                  <span action className="ml-auto newSub" onClick={() => { store.tab = 'newComponent'; store.size = 'normal'; }}>
                      <FontAwesomeIcon icon={faPlus} /> Add
                    </span>
                </ListGroup.Item>
                {
                  comp.children.length !== 0 ? (
                    <div>
                      {
                        comp.children.map((subComp) => (
                          comp.id !== subComp.id ? (<div>
                            <ListGroup.Item action active={state.currentselected === subComp.id ? true : false} onClick={() => {
                              if (state.currentselected !== subComp.id) {
                                store.currentselected = subComp.id;
                              } else {
                                store.currentselected = null;
                              }
                            }}>{subComp.name}</ListGroup.Item>
                          </div>) : ''
                        ))
                      }
                    </div>
                  ) : <ListGroup.Item className="text-muted">Empty</ListGroup.Item>
                }
                </ListGroup>
          ) : ''
        ))
      }

      {
        state.currentselected == null ? (
          <div>
            <ListGroup>
              <ListGroup.Item className="title">Notice</ListGroup.Item>
              <ListGroup.Item>Select a component to inspect</ListGroup.Item>
            </ListGroup>
          </div>
        ) : ''
      }
    </div>
  );
}

export default InspectComponent;
