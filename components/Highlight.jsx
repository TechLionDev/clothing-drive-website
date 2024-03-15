import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Highlight({ children, delay = 0 }) {
  return (
    <RoughNotationGroup show={true}>
      <RoughNotation type="highlight" color="#df8e1d" show={true} order={delay} animationDelay={delay*1000}>
        {children}
      </RoughNotation>
    </RoughNotationGroup>
  );
}
