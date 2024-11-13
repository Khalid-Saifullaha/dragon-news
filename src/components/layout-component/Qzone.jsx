import swimingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-slate-100 p-y-6">
      <h2 className="font-semibold p-3  ">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playGroundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
