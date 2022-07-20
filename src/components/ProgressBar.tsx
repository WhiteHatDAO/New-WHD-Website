interface barProps {
  percentage: number;
}

const ProgressBar = ({
  percentage,
}: barProps) => {
  
  return (
    <div className="flex items-center h-1 rounded bg-darkgrey">
      <div className='flex flex-grow h-1 overflow-hidden rounded bg-dark-700'>
        <div
          className='flex justify-end h-full rounded bg-blue'
          style={{ width: `${Number(percentage)}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
