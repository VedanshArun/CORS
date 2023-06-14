import React from 'react'

const CodeMockup = () => {
  return (
    <div className="mockup-code overflow-hidden">
        <pre data-prefix="1"><code>exports.handler = async (event) =></code></pre> 
        <pre data-prefix="2"><code>try</code></pre> 
        <pre data-prefix="3"><code>// some code...</code></pre>
        <pre data-prefix="1"><code>return</code></pre> 
        <pre data-prefix="2"><code>statusCode: 200,</code></pre> 
        <pre data-prefix="3"><code>headers:</code></pre>
        <pre data-prefix="1"><code>'Content-Type': 'application/json',</code></pre> 
        <pre data-prefix="2" class="text-success"><code>'Access-Control-Allow-Headers':</code></pre> 
        <pre data-prefix="3" class="text-success"><code>'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',</code></pre>
        <pre data-prefix="1" class="text-success"><code>'Access-Control-Allow-Methods': 'OPTIONS,POST',</code></pre> 
        <pre data-prefix="2" class="text-success"><code>'Access-Control-Allow-Credentials': true,</code></pre> 
        <pre data-prefix="3" class="text-success"><code>'Access-Control-Allow-Origin': '*',</code></pre>
        <pre data-prefix="1" class="text-success"><code>'X-Requested-With': '*',</code></pre> 
        <pre data-prefix="2"><code>,</code></pre> 
        <pre data-prefix="3"><code>body: JSON stringified object,</code></pre>
        <pre data-prefix="1"><code>;</code></pre> 
        <pre data-prefix="2"><code>body: JSON.stringify(</code></pre> 
        <pre data-prefix="3"><code> name: error.name,</code></pre>
        <pre data-prefix="1"><code>code: error.code,</code></pre> 
        <pre data-prefix="2"><code>message: error.message,</code></pre> 
        <pre data-prefix="3"><code>),</code></pre>
    </div>
  )
}

export default CodeMockup

//  exports.handler = async (event) => {
// try{
// // some code...
//     return {
//       statusCode: 200,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Headers':
//           'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//         'Access-Control-Allow-Methods': 'OPTIONS,POST',
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': '*',
//         'X-Requested-With': '*',
//       },
//       body: JSON stringified object,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Headers':
//           'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//         'Access-Control-Allow-Methods': 'OPTIONS,POST',
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': '*',
//         'X-Requested-With': '*',
//       },
//       body: JSON.stringify({
//         name: error.name,
//         code: error.code,
//         message: error.message,
//       }),
//     };
//   }
// };
