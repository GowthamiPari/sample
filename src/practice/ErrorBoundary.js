// import React,{Component, useNavigate} from 'react'
// import ErrorFallback from './ErrorFallback';

// export default class ErrorBoundary extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null
//         }
//     }
//     componentDidCatch(error, errorInfo) {
//       this.setState({ error: error });
//       console.error(error, errorInfo);
//     }
    
//     render() {
//         if(this.state.error) {
//             return(
//                 <center>
//                      <ErrorFallback/>
//                 </center>

//             )
//         }
//         return (
//          this.props.children
//         );
// }
// }



// // import React, { Component } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default class ErrorBoundary extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       error: null
// //     };
// //   }

// //   componentDidCatch(error) {
// //     this.setState({ error: error });
// //   }
  
// //   render() {
// //     if(this.state.error) {
// //       return (
// //       <ErrorFallback />
// //     );
// //     }
// //     return (
// //       this.props.children
// //     );
// //   }
// // }

