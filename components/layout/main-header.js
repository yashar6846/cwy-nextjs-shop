import Link from "next/link"
import classes from './main-header.module.css'

const MineHeader = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href="/">Pists Academy</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/events/">Browse All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MineHeader