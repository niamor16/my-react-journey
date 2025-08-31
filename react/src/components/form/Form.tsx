import { useState } from "react";

export default function Form()
{
  function handleSubmit(event) {
    event.preventDefault();
    console.log("event", event);

    const form = event.target;
    const formData = new FormData(form);
    
    const formJson = Object.fromEntries(formData.entries());
    setUser(formJson);
    console.log("user", user);
  }

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    country: "",
  });
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="number" min={0} id="age" name="age" />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value={"fr"}>France</option>
          <option value={"de"}>Allemagne</option>
          <option value={"it"}>Italie</option>
          <option value={"es"}>Espagne</option>
          <option value={"de"}>Autre</option>
        </select>
      </div>

      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
}