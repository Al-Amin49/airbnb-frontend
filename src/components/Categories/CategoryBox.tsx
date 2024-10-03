"use client"
import Image, { StaticImageData } from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

type TCategoryBoxProps = {
  label: string;
  img: StaticImageData;
};

const CategoryBox = ({ label, img }: TCategoryBoxProps) => {
  const searchParams = useSearchParams(); // This should be the correct use
  const category = searchParams.get('category'); // Now this should work as expected
  console.log("Current category:", category);
  const router = useRouter();
  
  const handleClick = () => {
    // Create Query String
    const currentQuery = { category: label };
    const url = queryString.stringifyUrl({
      url: '/',
      query: currentQuery,
    });
    router.push(url);
  };
  const isSelected = category === label;
  console.log('isSelected', isSelected)
  return (
    <div
      onClick={handleClick}
      className={`flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        hover:text-neutral-800
        transition
        cursor-pointer 
        ${isSelected? 'border-b-2 border-neutral-800' : ''}  
        `}
    >
      <Image src={img} alt={label} width={26} height={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
