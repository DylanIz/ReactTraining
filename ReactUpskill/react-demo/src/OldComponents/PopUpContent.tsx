import { createPortal } from "react-dom";

type Props = {
  copied: boolean;
};

const PopUpContent = ({ copied }: Props) => {
  return createPortal(
    <section style={{ position: "absolute", bottom: "3rem" }}>
      {copied && <div>Copied to clipboard.</div>}
    </section>,
    document.querySelector("#popup-content") as HTMLElement
  );
};

export default PopUpContent;
