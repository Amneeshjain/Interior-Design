import React from 'react'
import style from "../../styles/home.module.css"
import Link from 'next/link'

const Socialmedia = () => {
    return (
        <div className={style.social_media_icons}>
            <ul className={style.socialIcons_111}>
                <li className={style.social_facebook} >
                    <Link href="https://www.facebook.com/ColonelzConstructions" target="_blank">

                        <img src="/Facebook.svg" alt="" />

                    </Link>
                </li>
                <li className={style.social_instagram}>
                    <Link href="https://www.instagram.com/colonelzconstructions/" target="_blank">

                        <img src="/instagram.svg" alt="" />

                    </Link>
                </li>
                <li className={style.social_youtube} >
                    <Link href="https://www.youtube.com/@ColonelzConstruction" target="_blank">

                        <img src="/YouTube.svg" alt="" />

                    </Link>
                </li>
                <li className={style.social_linked} >
                    <Link href="https://www.linkedin.com/company/colonelz/?originalSubdomain=in" target="_blank">

                        <img src="/linked.png" alt="" width="22px" />

                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Socialmedia