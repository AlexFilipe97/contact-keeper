import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    current: null,
    filtered: null,
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jillJ@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sarah Watson",
        email: "sarahW@gmail.com",
        phone: "222-222-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harryW@gmail.com",
        phone: "444-444-4444",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // delete contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // update contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // filter contacts
  const filter = (target) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: target,
    });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        current: state.current,
        contacts: state.contacts,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filter,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
