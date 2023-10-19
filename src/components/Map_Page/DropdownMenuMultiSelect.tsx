import { FunctionComponent } from "react";
import styles from "./DropdownMenuMultiSelect.module.css";

interface DropdownMenuMultiSelectProps {
  onClose: () => void;
}

const DropdownMenuMultiSelect: FunctionComponent<
  DropdownMenuMultiSelectProps
> = ({ onClose }) => {
  return (
    <div className={styles.dropdownMenuMultiSelect}>
      <div className={styles.contextMenuItem}>
        <div className={styles.noIcon}>Choose fruits</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Messages</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Favorites</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Notifications</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Job market ???</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Profile</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Dashboard</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Language</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Help</div>
      </div>
      <div className={styles.contextMenuItem1}>
        <div className={styles.noIcon}>Log in</div>
      </div>
      <div className={styles.contextMenuItem10}>
        <div className={styles.noIcon}>Log out</div>
      </div>
    </div>
  );
};

export default DropdownMenuMultiSelect;
