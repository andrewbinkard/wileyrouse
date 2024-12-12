import { FC } from "react";
import styles from "./RouseAcknowledgements.module.scss";

const RouseContributorsAndFAStaff: FC = () => {
  return (
    <div className={styles.contributorsContainer}>
      <div className={styles.card}>
        <h2>Midwest Giving Campaign Contributors</h2>
        <h4>…supporting scholarships for student trips</h4>
        <h4>Patron Level: $50 - $99</h4>
        <p>Anonymous</p>
        <p>Anonymous</p>
        <br />
        <h4>Bronze Level: $100 - $199</h4>
        <p>Michael and Karen Hollister</p>
        <p>Anonymous</p>
        <br />
        <h4>Silver Level: $200 - $399</h4>
        <p>Anonymous</p>
        <br />
        <h4>Gold Level: $400 or more</h4>
        <p>Anonymous</p>
        <p>Anonymous</p>
        <p>Dance Sophisticates</p>
        <p>Jason and Jackie Robb</p>
        <p>Peter and Terri Berkley</p>
        <p>Steve and Monica Lynn</p>
      </div>
      <div className={styles.card}>
        <h2>Rouse Band Acknowledgements</h2>
        <br />
        <h3>Rouse High School Band Boosters</h3>
        <p>Bethany Sisneroz - President</p>
        <p>Michelle Schmitt - Vice President of Volunteers</p>
        <p>Jeff Johnson - Vice President of Fundraising</p>
        <p>Justin Heyman - Secretary</p>
        <p>Kim Frank - Treasurer</p>
        <p>Katie Gray - Assistant Treasurer</p>
        <p>Ryan Parmenter - Communications</p>
        <br />
        <h3>Rouse Performing Arts Staff</h3>
        <p>Jenna Quiroz - Choir Director</p>
        <p>Cindy Moser - Associate Choir Director</p>
        <p>Amy McKee - Director of Dance</p>
        <p>Jordyn LaFevers - Assistant Dance Director</p>
        <p>Cheryl Painter - Director of Theater & Dept. Chair</p>
        <p>Charles McClean - Theater Tech Director</p>
        <br />
        <p>…for their continued support of the Rouse Band</p>
      </div>
    </div>
  );
};

export default RouseContributorsAndFAStaff;
