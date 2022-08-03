import "../assets/style/app.scss";

interface GradientBoxProps {
    percentage: number
}

const GradientBox = ({percentage}: GradientBoxProps) => {
  return (
    <div>
      <div className="barContainer shadow-inner">
        <div className="filler" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default GradientBox;
