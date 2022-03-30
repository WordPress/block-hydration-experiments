import Title from "../components/title";
import Button from "./button";

const Block = ({ attributes, children }) => (
  <>
    <Title message={attributes.message} />
    <Button />
    {children}
  </>
);

export default Block;
