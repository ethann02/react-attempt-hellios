import './Editor.css';
import React from 'react';
import Sidebar from './../../components/editor/Sidebar';
import Content from './../../components/editor/Content';
import { DndContext } from '@dnd-kit/core';


function Editor() {


  return (
    <div>
        <div className="d-flex wrapper">
          <DndContext onDragEnd={(e) => {console.log(e)}}>
            <Content />
            <Sidebar />
          </DndContext>
        </div>
    </div>
  );
}

export default Editor;
