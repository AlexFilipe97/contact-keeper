import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>You can now start adding contacts!</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </Fragment>
  );
};

export default Contacts;
