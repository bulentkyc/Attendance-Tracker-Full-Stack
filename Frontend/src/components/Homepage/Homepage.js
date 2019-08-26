import React from 'react';
import './Homepage.scss';

export default function Homepage() {
  return (
    <div className='homepage'>
      <h1 className='headerInHomepage'> The attandance tracker </h1>
      <p className='paragraphInHomepage'>
        This attendance tracker will monitor attendance. <br/>
        It can provide information about attendance, leaves, and absences. <br/>
        This amazing App will maybe not reduce the amout of the work but it will help to handle it in a easy way. <br/>
        This tracker can provide data, let us simply apply it to a school environment. <br/>
        With it, teachers can monitor student participation in their classes.<br/>
      </p>
    </div>
  )
}

