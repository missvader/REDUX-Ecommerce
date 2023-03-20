import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="mt-auto py-5 bg-dark ">
      <div className="container d-flex justify-content-center">
        <span className="text-white"> &copy; 2023 All Rigths Reserved</span>
        <a  href="https://github.com/missvader">
          <AiFillGithub className="ms-3" color='white' size={20}/>
          </a>
      </div>
    </footer>
  )
}
export default Footer;