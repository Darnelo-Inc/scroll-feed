import { Button, Layout } from "antd"
import { FC } from "react"
import { Link } from "react-router-dom"
import css from "../styles/Header.module.css"

const Navbar: FC = () => {
  return (
    <nav className={css.navbar}>
      <Layout>
        <Layout.Header className={css["nav-header"]}>
          <div className={css.logo}>
            <h3 className={css["brand-font"]}>Scroll Feed</h3>
          </div>
          <div className={css.navMenu}>
            <Button className={css.navItem} type="default">
              <Link className={css.link} to="/">
                Posts
              </Link>
            </Button>
            <Button className={css.navItem} danger type="primary">
              Log out
            </Button>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  )
}

export default Navbar
