import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contactBox}>
      <div className={css.contactText}>
        <p>
          <IoPerson /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
