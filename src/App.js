import { Container } from "react-bootstrap";
import { data } from "./data";
import DataCount from "./components/DataCount";
import DataReminde from "./components/DataReminde";
import DataButton from "./components/DataButton";
import { useEffect, useState } from "react";

function App() {
  const [dataList, setDataList] = useState(data);

  const onDelete = () => {
    setDataList([]);
  };
  const onViewData = () => {
    setDataList(dataList);
  };

  useEffect(() => {
      setDataList([]);
  }, [])

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DataCount data={data} />
        <DataReminde data={data} />
        <DataButton onDelete={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
