import { faChevronCircleLeft, faGripHorizontal, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const componentsIndex = [
    {
      group: 'Layout',
      type: 'container',
      name: 'Container',
      icon: faSquare,
      description: 'Group things together into groups, also nestable.',
      properties: {},
      children: []
    },
    {
      group: 'Layout',
      type: 'row',
      name: 'Row',
      icon: faGripHorizontal,
      description: 'Single implicity structured data item in a grid.',
      properties: {},
      children: []
    },
    {
      group: 'Layout',
      type: 'col',
      name: 'Column',
      icon: faGripHorizontal,
      description: 'Placeholding text',
      properties: {},
      children: []
    },
    {
      group: 'Content',
      type: 'card',
      name: 'Card',
      icon: faGripHorizontal,
      description: 'Placeholding text',
      properties: {},
      children: []
    },
    {
      group: 'Content',
      type: 'card-body',
      name: 'Card Body',
      icon: faGripHorizontal,
      description: 'Placeholding text',
      properties: {},
      children: []
    }
  ];

  export default componentsIndex;