import Container from "@/components/Container/Container"
import { categories } from "./CategoriesData"
import CategoryBox from "./CategoryBox"


const Categories = () => {
  return (

     <Container>
       <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} Icon={item.icon} />
        ))}
      </div>
     </Container>
   
  )
}

export default Categories