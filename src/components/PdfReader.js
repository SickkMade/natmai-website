import React from 'react'

const PdfReader = ({Pdf}) => {
  return (
    <div className='content'>
        <iframe 
        src={Pdf}
        width="65%"
        height="100%"
        style={{ border: 'none' }}
        />
</div>
  )
}

export default PdfReader