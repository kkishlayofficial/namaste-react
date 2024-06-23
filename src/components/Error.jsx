import { useRouteError } from "react-router-dom";
import '../../error.css'

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className='errorPage'>
      <div className='errorSection'>
        <div className='errorCard'>
          <div className='errorImg'></div>
          <div className='errorTitle'>Uh-oh!</div>
          <div className='errorDesc'>
            {err.data}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
