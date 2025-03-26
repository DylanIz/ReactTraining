import PropDrillB from "./PropDrillB";

type Props = {
  name: string;
};

const PropDrillA = ({name}: Props) => {
  return <div><PropDrillB name={name} /></div>;
};

export default PropDrillA;
