interface Props {
  label: string;
  type?: any;
  name: string;
}
function Input({name,type, label}:Props) {
  return (
    <div className="input-group w-full mb-8 mt-12 relative border-b border-slate-300/50" >
      <input type={type} name={name} id={name} placeholder=" " required className="w-full h-12 bg-transparent text-yellow-200/90"/>
      <label
        htmlFor="name"
        className="absolute left-2 top-[50%] translate-y-[-50%] transition-all duration-300 text-yellow-200/90">
          {label}
      </label>
    </div>
  )
}

export default Input
