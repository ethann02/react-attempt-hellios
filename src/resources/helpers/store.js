import { proxy, subscribe } from "valtio";
import GenerateMiniMap from "./minimap";

const store = proxy({
  tab: "components",
  submenu: "",
  size: "normal",
  tool: "inspect",
  currentselected: null,
  editor: {
    minimap: [],
    content: [
      {
        id: 0,
        name: 'Canvas',
        type: 'canvas',
        children: [
          {
            id: 1,
            name: 'Row',
            type: 'row',
            properties: {},
            children: []
          }
        ]
      }
    ]
  }
});

store.editor.minimap = GenerateMiniMap(store.editor.content, store);

subscribe(store, () => {
});

export default store;

// Example Canvas Content
// [
//       {
//         name: 'Container',
//         type: 'container',
//         properties: {},
//         children: [
//           {
//             name: 'Row',
//             type: 'row',
//             properties: {},
//             children: [
//               {
//                 name: 'Col',
//                 type: 'col',
//                 properties: {
//                   md: 5
//                 },
//                 children: [
//                   {
//                     name: 'Card',
//                     type: 'card',
//                     properties: {},
//                     children: [
//                       {
//                         name: 'Card Body',
//                         type: 'card-body',
//                         properties: {}
//                       }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]