import { useState } from "react";

function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const validate = (callback: (value: string) => string) => {
    const validationMessage = callback(value);
    setMessage(validationMessage);

    return validationMessage === "";
  };

  const clear = () => {
    setValue("");
    setMessage("");
  };

  return {
    value,
    setValue,
    message,
    setMessage,
    validate,
    clear,
  };
}

export default useFormInput;