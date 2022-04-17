import React from "react"
import { AppRoute } from "../../const"
import { Link } from "react-router-dom"
import { useRouteMatch} from "react-router-dom"

const Header = ()=> {
  const {path} = useRouteMatch()
    return (
      <section className="main__header">
        <section className="main__header-wrap">
          <span className="main__header-logo">SomeList</span>
          <div className="main__header-group-lnk">
            <Link to={AppRoute.MAIN} className={`main__header-lnk ${(path === AppRoute.MAIN || path === AppRoute.EVENT) && 'lnk-active'}`}>События</Link>
            <Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${path === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
          </div>
        </section>
      </section>
    )
  }
       
  export default Header