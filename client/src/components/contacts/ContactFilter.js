import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filter, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filter(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
