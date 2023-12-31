import React from 'react'

const Textarea = () => {
  return (
    <div
      className="input-group w-full h-auto border-b border-slate-300/50 mb-8 mt-12 relative"
    >
      <textarea
        name="msg"
        id="msg"
        className="block w-full h-12 px-2 bg-transparent py-3 transition-all duration-300 resize-none text-yellow-200/90"
        placeholder=" "></textarea>
      <label
        htmlFor="msg"
        className="absolute top-3 left-3 transition-all duration-300 text-yellow-200/90">
          Mensaje:
        </label >
    </div>
  )
}

export default Textarea
