import './Loading.scss';

import { EuiLoadingSpinner } from '@elastic/eui';

const Loading = () => {
  return (
    <div className="Loading">
      <EuiLoadingSpinner size="xl" />
    </div>
  );
};

export default Loading;
