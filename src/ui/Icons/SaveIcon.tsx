// import React from 'react';

const SaveIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        className={className}
        d="M7.5 4.375a.625.625 0 100 1.25h5a.625.625 0 100-1.25h-5z"
      ></path>
      <path
        className={className}
        fillRule="evenodd"
        d="M9.952 1.042c-1.727 0-3.088 0-4.15.144-1.093.149-1.964.46-2.648 1.152-.683.69-.99 1.568-1.136 2.668-.143 1.074-.143 2.448-.143 4.195v4.248c0 1.257 0 2.252.08 3 .08.74.249 1.408.733 1.854.389.359.88.584 1.405.645.656.075 1.269-.239 1.873-.666.61-.433 1.351-1.088 2.286-1.915l.03-.027c.434-.383.727-.642.972-.821.237-.173.381-.236.503-.26.16-.032.326-.032.486 0 .122.024.266.087.503.26.245.179.538.438.971.821l.03.027c.936.827 1.677 1.482 2.287 1.915.604.427 1.217.74 1.873.666a2.491 2.491 0 001.405-.645c.484-.446.654-1.114.733-1.854.08-.749.08-1.743.08-3V9.201c0-1.747 0-3.121-.143-4.195-.146-1.1-.453-1.977-1.136-2.668-.684-.692-1.555-1.003-2.647-1.152-1.063-.144-2.424-.144-4.151-.144h-.096zm-5.91 2.175c.415-.419.977-.663 1.927-.792.97-.132 2.245-.133 4.031-.133 1.786 0 3.061.001 4.03.133.951.13 1.513.373 1.927.792.415.42.658.99.786 1.954.13.982.132 2.273.132 4.077v4.161c0 1.306 0 2.233-.073 2.908-.074.69-.21.95-.337 1.067-.195.18-.44.292-.7.322-.167.019-.445-.046-1.008-.444-.549-.389-1.24-.999-2.211-1.858l-.022-.02c-.406-.359-.743-.657-1.04-.874-.311-.227-.625-.402-.994-.476a2.482 2.482 0 00-.98 0c-.37.074-.683.249-.994.476-.297.217-.634.515-1.04.874l-.022.02c-.972.86-1.662 1.469-2.211 1.858-.563.398-.841.463-1.008.444a1.241 1.241 0 01-.7-.322c-.127-.117-.263-.376-.337-1.067-.072-.675-.073-1.602-.073-2.908V9.25c0-1.805.001-3.096.132-4.078.128-.964.37-1.535.786-1.954z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default SaveIcon;
