import Cards from "@/components/Cards/Cards";
import Categories from "@/components/Categories/Categories";


export default function Home() {
  return (
  <div className="pb-20">
  
  {/* categories */}
    <Categories/>
    <Cards/>
  </div>
  );
}
