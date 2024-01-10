import React from 'react'

const Spoiler = ({ title, children, step }) => {
  return (
    <details className="text-[12px] leading-[22px] [&_summary]:open:after:content-['-']">
      <summary className="flex justify-between items-center list-none text-[12px] after:content-['+'] after:text-right after:px-[3px] after:py-[3px]">
        {title}
      </summary>
      <div 
        style={{ gap: step }}
        className='flex flex-col'>
          {children}
      </div>      
    </details>
  )
}

export default Spoiler