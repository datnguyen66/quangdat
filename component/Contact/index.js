import Link from "next/link";
import { Fragment } from "react";
import classes from './contact.module.css'

export default function ContactComponent() {
    return(
        <Fragment>
            <div className={classes.wrap_contact}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link href="https://www.facebook.com/200.urname" className={classes.a}>Facebook</Link>
                    </li>
                    <li className={classes.li}>
                        <Link href="mailto:datfigoz@gmail.com" className={classes.a}>Email</Link>
                    </li>
                    <li className={classes.li}>
                        <Link href="https://github.com/datnguyen66" className={classes.a}>Github</Link>
                    </li>
                    <li className={classes.li}>
                        <Link href="https://twitter.com/daWangDat" className={classes.a}>Twitter</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}