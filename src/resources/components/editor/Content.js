import React from 'react';
import store from './../../helpers/store';
import { useProxy } from 'valtio';
import { convertTo } from '../../helpers/ui';
import {useDroppable} from '@dnd-kit/core';

function InspectClick(e, state, store) {

  if (state.tool !== 'preview') {
    if (parseInt(state.currentselected) !== parseInt(e.target.id)) {
      store.currentselected = parseInt(e.target.id);
      store.tab = 'inspect';
    } else {

      store.currentselected = null;
    }
  }
}

function Content() {
  const state = useProxy(store);
  const render = convertTo(store.editor.content, state);

  return (
    <div className={[state.tool + " pageContent"]}
      onClick={(e) => InspectClick(e, state, store)}>
      { render.map((c, i) => render[i])}
    </div>
  );
}

export default Content;
