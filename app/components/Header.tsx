import styles from "../../styles/styles.module.css";
import ToggleDarkMode from "./Theme";
import { SunIcon, MoonIcon } from "../common/components/index";
import { GitHubRepo } from "./Icon";

export const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div className={styles.header}>
        <h1>
          <a className={styles.a} href="/">
            {title}
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a className={styles.a} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.a} href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a className={styles.a} href="/skills">
                Skills
              </a>
            </li>
            <li>
              <a className={styles.a} href="/blogs">
                Blogs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export const BlogHeader = () => {
  return (
    <>
      <div className={styles.blogHeader}>
        <h1>
          <a href="/">o-gaのテックブログ</a>
        </h1>
        <div className={styles.searchForm}>
          <label>検索</label>
          <input type="text" placeholder="Search ..." />
        </div>
        <div className={styles.icons}>
          <SunIcon className={styles.icon} />
          <ToggleDarkMode />
          <MoonIcon className={styles.icon} />
          <GitHubRepo />
          <a href="/">Home</a>
        </div>
      </div>
    </>
  );
};

export const ProfileHeader = () => {
  return (
    <>
      <div className={styles.blogHeader}>
        <h1>
          <a href="/profile">o-gaのプロフィール</a>
        </h1>
        <div className={styles.icons}>
          <SunIcon className={styles.icon} />
          <ToggleDarkMode />
          <MoonIcon className={styles.icon} />
          <GitHubRepo />
          <a href="/">Home</a>
        </div>
      </div>
    </>
  );
};

export const SkillHeader = () => {
  return (
    <>
      <div className={styles.blogHeader}>
        <h1>
          <a href="/profile">o-gaのスキル</a>
        </h1>
        <div className={styles.icons}>
          <SunIcon className={styles.icon} />
          <ToggleDarkMode />
          <MoonIcon className={styles.icon} />
          <GitHubRepo />
          <a href="/">Home</a>
        </div>
      </div>
    </>
  );
};
