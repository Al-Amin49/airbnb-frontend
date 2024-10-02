import Image, { StaticImageData } from "next/image";

type TCategoryBoxProps = {
  label: string;
  img:StaticImageData ;

};
const CategoryBox = ({ label, img }: TCategoryBoxProps) => {
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
      <Image src={img} alt={label} width={26} height={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
