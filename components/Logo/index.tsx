import React from 'react'
import Link from 'next/link'

const Logo = () => {
    return (
        <div>
            <Link href='/'>
                <a>
                    <img src="/assets/icons/logo.svg" width="48`" height="48" alt="logo"  />
                </a>
            </Link>
        </div>
    )
}

export default Logo
