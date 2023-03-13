import React from 'react'

export const Loader = () => {
  let circleCommonclassNamees = 'h-2.5 w-2.5 bg-current rounded-full ';
  return (
    <div className='flex justify-center content-center text-slate-600'>
    <div className={`${circleCommonclassNamees} mr-1 animate-bounce`}></div>
    <div
        className={`${circleCommonclassNamees} mr-1 animate-bounce200`}
    ></div>
    <div className={`${circleCommonclassNamees} animate-bounce400`}></div>
</div>
  )
}