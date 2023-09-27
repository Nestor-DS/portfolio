import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { TfiGithub } from "react-icons/tfi"
import { FaBehanceSquare } from 'react-icons/fa'
import { BiLogoGoogleCloud } from 'react-icons/bi'

const headerSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/nestor-sanchez-51147a1ba" target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
            <a href="https://github.com/Nestor-DS" target='_blank' rel='noopener noreferrer'><TfiGithub/></a>
            <a href="https://www.behance.net/nestorsanchez12" target='_blank' rel='noopener noreferrer'><FaBehanceSquare/></a>
            <a href="https://www.cloudskillsboost.google/public_profiles/6a1b32b0-0c59-46a4-a13c-72034f262a8c"
                target='_blank' rel='noopener noreferrer'><BiLogoGoogleCloud/></a>
        </div>
    )
}

export default headerSocial