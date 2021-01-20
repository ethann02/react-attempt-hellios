
import { useDroppable } from '@dnd-kit/core';
function ComponentWrap(props) {
    const { setNodeRef, isOver } = useDroppable({
        id: props.data.id+1,
    });

    const hovering = isOver === true ? ' hovering' : '';

    return (
        <div className={hovering} ref={setNodeRef}>
            {props.children}
        </div>
    );
}

export default ComponentWrap