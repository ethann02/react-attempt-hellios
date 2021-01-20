
import { Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faGripHorizontal, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons';


import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';

function NewComponentItem(props) {

  const { attributes, listeners, setNodeRef, transform, active } = useDraggable({
    id: props.id,
    data: props.comp
  });


  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: active ? 0.5 : 1
  };

  return (
    <Col md={12} ref={setNodeRef} style={style} className="comp" {...listeners} { ...attributes}>
        <div className="compIcon">
          <FontAwesomeIcon icon={props.comp.icon} className="h1 mb-0" />
        </div>
        <div className="compText">
          <div class="title mt-0">{props.comp.group}</div>
          <div className="compTitle">
            {props.comp.name}
          </div>
          <div>
            {props.comp.description}
          </div>
        </div>
      </Col>
  );
}

export default NewComponentItem;
