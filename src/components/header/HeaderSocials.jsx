import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { TfiGithub } from "react-icons/tfi"
import { FaBehanceSquare } from 'react-icons/fa'
import { BiLogoGoogleCloud } from 'react-icons/bi'

const linkedin = 'https://www.linkedin.com/in/nestor-sanchez-51147a1ba'
const github = 'https://github.com/Nestor-DS'
const behance = 'https://www.behance.net/nestorsanchez12'
const google_cloud = 'https://www.cloudskillsboost.google/public_profiles/6a1b32b0-0c59-46a4-a13c-72034f262a8c'

const headerSocial = () => {
    return (
        <div className='header__social'>
            <a href={linkedin} target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
            <a href={github} target='_blank' rel='noopener noreferrer'><TfiGithub/></a>
            <a href={behance} target='_blank' rel='noopener noreferrer'><FaBehanceSquare/></a>
            <a href={google_cloud} target='_blank' rel='noopener noreferrer'><BiLogoGoogleCloud/></a>
        </div>
    )
}

export default headerSocial