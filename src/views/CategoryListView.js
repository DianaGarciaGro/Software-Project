import React, {useState, useEffect} from "react";
import CategoryRow from "../components/CategoryRow";
import dao from "../ajax/dao";

const CategoryListView= () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function refreshCategories () {
      const data= await dao.fetchCategories();
      setCategories(data);
    }
    refreshCategories();
  },[]);
  
  useEffect(() => {
  }, [categories]);
  
  return (
    <>
    <h3>Categories</h3>
    <div>
      {categories && categories.length>0 ?
        categories.map((item) =>
          <CategoryRow  key={item.id}
                        id={item.id}
                        category={item} />
      ) : "no categories yet"
    }
    </div>
    </>
  );
}
