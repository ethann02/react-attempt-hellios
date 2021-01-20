import { Card, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import ComponentWrap from './ui/ComponentWrap';

function convertTo(content, state) {
  var c = []; // c for converted
  if (content) {
    content.map((comp, i) => {

      const highlight = parseInt(state.currentselected) === comp.id ? ' highlight' : '';
      const p = comp.properties;

      switch (comp.type) {
        case 'canvas':
          c[i] = <ComponentWrap data={comp}>
            <div id={comp.id} className={[highlight + ' canvas']}>
              {convertTo(comp.children, state)}
            </div>
          </ComponentWrap>
          break;
        case 'row':
          c[i] = <ComponentWrap data={comp}>
            <Row id={comp.id} className={[highlight]}>{convertTo(comp.children, state)}</Row>
            </ComponentWrap>
          break;
        case 'container':
          c[i] = <ComponentWrap data={comp}>
            <Container id={comp.id} className={[highlight]} fluid={comp.fluid}>{convertTo(comp.children, state)}</Container>
            </ComponentWrap>;
          break;
        case 'col':
          c[i] = <ComponentWrap data={comp}>
            <Col className={[highlight]} id={comp.id} xs={p.xs} sm={p.sm} md={p.md} lg={p.lg} xl={p.lg}>{convertTo(comp.children, state)}</Col>
            </ComponentWrap>
          break;
        case 'card':
          c[i] = <ComponentWrap data={comp}>
            <Card className={[highlight]} id={comp.id}>{convertTo(comp.children, state)}</Card>
            </ComponentWrap>;
          break;
        case 'card-body':
          c[i] = <ComponentWrap data={comp}>
            <Card.Body className={[highlight]} id={comp.id}>{convertTo(comp.children, state)}</Card.Body>
            </ComponentWrap>;
          break;
        default:
          break;
      }
    });
  }
  return c;
}

function replace(content, state, component) {
  content.map((comp) => {
    if (comp.id === state.currentselected) {
      var currentchildren = comp.children;
      currentchildren[currentchildren.length] = component
    } else {
      if (comp.children !== []) {
        replace(comp.children, state, component);
      }
    }
  });
}


export { convertTo, replace };