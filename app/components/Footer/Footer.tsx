import { Bottom } from "./Bottom/Bottom";
import { Top } from "./Top/Top";

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full mt-28">
      <Top />
      <div className="w-full border"></div>
      <Bottom />
    </footer>
  );
};
