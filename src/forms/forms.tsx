import { useRef, useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    const emailValue = emailRef.current?.value || "";
    if (!emailValue.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      console.log(
        "Form Submitted:" +
          `Name: ${name}` +
          `Email: ${emailRef.current?.value}`,
      );
    }
  };

  return (
    <div style={{ width: 300, margin: "20px auto" }}>
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>
        <label>Name (Controlled)</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validate}
          style={{ width: "100%" }}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}

        <label style={{ marginTop: 15 }}>Email (Uncontrolled)</label>
        <input
          type="text"
          ref={emailRef}
          onBlur={validate}
          style={{ width: "100%" }}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        <button
          type="submit"
          style={{
            marginTop: 20,
            width: "100%",
            padding: "8px",
            background: "black",
            color: "white",
            border: "none",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
