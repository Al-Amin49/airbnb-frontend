import Container from "@/components/Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
import Filters from "../Filters/Filters";

const Categories = () => {
  return (
   <div 
   style={{
    boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
  }}
   >
     <Container>
      <div
        className="pt-10 flex items-center justify-between overflow-x-auto "
       
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} img={item.img} />
        ))}
        <Filters/>
      </div>
    </Container>
   </div>
  );
};

export default Categories;
