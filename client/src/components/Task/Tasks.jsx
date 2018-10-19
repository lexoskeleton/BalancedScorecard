// import React from "react";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";
// import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
// import Button from "../CustomButton/CustomButton.jsx";



// const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
// const add = <Tooltip id="add_tooltip">Add</Tooltip>;
// const tasks = [];
// const number;

// const Tasks = props =>(
//     <div>
//     {for (let i = 0; i < props.tasks_title.length; i++) {
//       number = "checkbox" + i;
//       tasks.push(
//         <tr key={i}>
//           <td>
//             <Checkbox
//               number={number}
//               isChecked={i === 1 || i === 2 ? true : false}
//             />
//           </td>
//           <td>{this.state.tasks_title[i]}</td>
//           <td className="td-actions text-right">
//             <OverlayTrigger placement="top" overlay={remove}>
//               <Button bsStyle="danger" simple type="button" bsSize="xs" onClick={this.deleteTask()}>
//                 <i className="fa fa-times" />
//               </Button>
//             </OverlayTrigger>

//             <OverlayTrigger placement="top" overlay={add}>
//               <Button bsStyle="info" simple type="button" bsSize="xs" onClick={event=>this.postTask(event)} >
//                 <i className="fa fa-plus" />
//               </Button>
//             </OverlayTrigger>
            
//           </td>
//         </tr>
//       );
//     }
//     return <tbody>{tasks}</tbody>;
//   }}
//   </div>
// )

// export default Tasks;
