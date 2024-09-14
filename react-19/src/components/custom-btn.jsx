import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return <button type="submit"> {pending ? "Logging in..." : "Login"}</button>;
};

export default SubmitBtn;
