import { useState } from "react";

const Grocery = () => {
  const [data, setData] = useState("");
  const [showQr, setShowQr] = useState("");
  console.log(showQr);
  return (
    <div className='generate' style={{ display: "flex", flexDirection: "column"}}>
      <input
        type='text'
        className='text'
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        className='submit'
        onClick={() => {
          setShowQr(data);
        }}
      >
        Submit Text
      </button>
    </div>
  );
};

export default Grocery;
