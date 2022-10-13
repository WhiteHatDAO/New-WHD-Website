interface barProps {
  sqSize: number;
  data: any;
  strokeWidth: number;
  type: number;
}

const CircleProgressBar = ({
  sqSize,
  data,
  strokeWidth,
  type,
}: barProps) => {
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const radius = (sqSize - strokeWidth) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * data.percent) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      {type === 0 ? (
        <text
          className="text-sz10"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${data.percent}%`}
        </text>
      ) : (
        <>
          <text
            className="font-Manrope text-sz12"
            x="50%"
            y="32%"
            dy=".3em"
            textAnchor="middle"
          >
            {data.subtext}
          </text>
          <text
            className="font-Manrope text-sz40 font-bold"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            {data.text}
          </text>
          <text
            className="font-Manrope text-sz12"
            x="50%"
            y="65%"
            dy=".3em"
            textAnchor="middle"
          >
            {`${data.percent}%`}
          </text>
        </>
        // <div className="flex flex-col justify-center space-y-2">
        //   <div className="font-Manrope text-sz40">{`${percentage}%`}</div>
        //   <div className="font-Manrope text-sz12">Safety Rating</div>
        // </div>
      )}
    </svg>
  );
};

export default CircleProgressBar;
