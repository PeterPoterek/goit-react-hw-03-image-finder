import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderStyles';
const Loader = ({ loading }) => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="120"
        width="120"
        color="#4d7aa9"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
