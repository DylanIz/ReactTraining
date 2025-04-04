type Props = {
  count: number;
  onClickHandler: () => void;
};

const Increment = ({ count, onClickHandler }: Props) => {
  return (
    <div>
      <button onClick={onClickHandler}>Increment: {count}</button>
    </div>
  );
};

export default Increment;
