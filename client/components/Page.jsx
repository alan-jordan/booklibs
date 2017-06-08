import React from 'react'

const Page = () =>
   (
     <div className='cover'>
       <div className='spine'>
       </div>
       <div className='page'>
         <p>This is a story <input name='field1' type='text'/>.
           Someone did <input name='field2' type ='text'/>
           and then <input name='field3' type='text'/>.
           Because <input name='field4' type='text'/>.
         </p>
         <div className='images'>
           <div className='image'>
             <img className='gif' src='http://placekitten.com/g/200/200'/>
           </div>
           <div className='image'>
             <img className='gif' src='http://placekitten.com/g/200/200'/>
           </div>
           <div className='image'>
             <img className='gif' src='http://placekitten.com/g/200/200'/>
           </div>
           <div className='image'>
             <img className='gif' src='http://placekitten.com/g/200/200'/>
           </div>
         </div>
       </div>
     </div>
   )


export default Page
