/* eslint-disable react/prop-types */
const ProgressBar = ({ width }) => {
  return (
    <span className="progress-bar-wrap">
      <span className={`progress-bar`} style={{ width: `${width}%` }}></span>
    </span>
  );
};

export default ProgressBar;
