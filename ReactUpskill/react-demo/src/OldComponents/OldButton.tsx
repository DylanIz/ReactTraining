type ButtonProps = {
  count: number;
  onIncrement: () => void;
};

const Button = ({ count, onIncrement }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "4px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s",
      }}
      onClick={onIncrement}
    >
      {count}
    </button>
  );
};

export default Button;
