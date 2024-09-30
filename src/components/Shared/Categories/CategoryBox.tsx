import { IconType } from "react-icons"


type TCategoryBoxProps={
    label:string,
    Icon:IconType
}
const CategoryBox = ({ label, Icon }:TCategoryBoxProps) => {
  return (
    <div
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer `}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}



export default CategoryBox