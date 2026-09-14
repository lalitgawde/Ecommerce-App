import React from "react";
import styles from "./Address.module.css";
import { PlusIcon } from "@heroicons/react/24/outline";

const addressData = [
  {
    id: 1,
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    isDefault: true,
    type: "Home",
  },
  {
    id: 2,
    addressLine1: "456 Elm St",
    addressLine2: "Suite 12",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    country: "USA",
    type: "Work",
  },
];

const Address = () => {
  return (
    <div className={styles.addressSection}>
      <div className={styles.addressContainerHeader}>
        <h2>Saved Addresses</h2>
        <div className={styles.addAddressButtonContainer}>
          <button className={styles.addAddressButton}>
            <PlusIcon style={{ marginRight: "8px" }} size={20} /> Add address
          </button>
        </div>
      </div>
      <div className={styles.addressCards}>
        {addressData.map((address) => (
          <div key={address.id} className={styles.addressCard}>
            <div className={styles.addressHeader}>
              <p>{address.type}</p>
              {address.isDefault && (
                <div className={styles.defaultBadge}>Default</div>
              )}
            </div>
            <span className={styles.addressLine1}>{address.addressLine1}</span>
            <span className={styles.addressLine2}>{address.addressLine2}</span>
            <p className={styles.addressCityStateZip}>
              {address.city}, {address.state} {address.zipCode}
            </p>
            <p className={styles.addressCountry}>{address.country}</p>
            <div className={styles.addressActions}>
              <button className={styles.editButton}>Edit</button>
              <button className={styles.deleteButton}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
