
import { ListGroup } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useProxy } from 'valtio';
import store from '../../../helpers/store';
import GenerateMiniMap from '../../../helpers/minimap';

function calcComponentsList(state, list, indent, prev) {
  if (state) {
    state.map((obj) => {
      list[obj.id] = {
          indent: indent,
          name: obj.name,
          id: obj.id
        }
      calcComponentsList(obj.children, list, indent += 1, obj.id);
    });
  }
}

function ComponentsList(state) {
  var list = [];
  calcComponentsList(state, list, 0, 0);

  return list;
}

function Components() {
  const state = useProxy(store);
  return (
    <ListGroup>

      <ListGroup.Item className="title ">
        All Components
        <span action className="ml-auto newSub" onClick={() => { store.currentselected = null; store.tab = 'newComponent'; store.size = 'normal'; }}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </span>
        </ListGroup.Item>
      {
        ComponentsList(state.editor.content).map((comp) => (
          <div>
            <ListGroup.Item action active={state.currentselected === comp.id ? true : false} onClick={() => {
              if (state.currentselected !== comp.id) {
                store.currentselected = comp.id;
                store.tab = 'inspect';
              } else {
                store.currentselected = null;
                store.tab = 'components';
              }
            }}>
              {
                // [...Array(comp.indent)].map((e, i) => <span id={-i} ></span>)
              } {comp.name}
            </ListGroup.Item>
          </div>
        ))
      }
    </ListGroup>
  );
}

export default Components;
