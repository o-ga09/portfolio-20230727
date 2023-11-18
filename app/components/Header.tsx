import styles from "../../styles/styles.module.css";

const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div className={styles.header}>
        <h1>{title}</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
