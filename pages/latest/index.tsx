import { articles } from "@/utils/mockData";
import CardList from '@/components/CardList/index';


const Latest = () => {
  return <div>
    <CardList list={articles}></CardList>
  </div>;
};

export default Latest;
