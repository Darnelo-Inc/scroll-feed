import { Button, Layout } from "antd"
import { FC } from "react"
import { Link, useParams } from "react-router-dom"
import css from "../styles/Header.module.css"
import { useActions } from "hooks/useActions"

const Navbar: FC = () => {
  const { togglePostModal } = useActions()
  const { path } = useParams()
  console.log(path)

  return (
    <nav className={css.navbar}>
      <Layout>
        <Layout.Header className={css["nav-header"]}>
          <div className={css.logo}>
            <h3 className={css["brand-font"]}>Scroll Feed</h3>
          </div>
          <div className={css.navMenu}>
            <Button
              className={css.navItem}
              danger
              type="primary"
              onClick={() => togglePostModal()}
            >
              Create post
            </Button>

            <Button className={css.navItem} type="default">
              <Link className={css.link} to="/home">
                Posts
              </Link>
            </Button>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  )
}

export default Navbar
