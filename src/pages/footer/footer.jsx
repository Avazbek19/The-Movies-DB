import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
// const footerIcon = 'tmdb icon-2.svg'

export default function Footer()   {
  return (
    <div className="bg-footer">
      <div className="container px-5">
        <div className="footer-box">
          <div className="join-footer">
            <img className='footer-icon' src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'} alt="TMDB footer-icon" />
            <button className='footer-btn'>JOIN THE COMUNITY</button>
          </div>
            <div>
              <h4 className='text-white footer-link-title'>THE BASIC</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link className='text-white text-decoration-none'>About TMDB</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>Contact Us</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>Support Forums</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>API</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>System Status</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='footer-link-title text-white'>GET INVOLVED</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link className='text-decoration-none text-white'>Contribution Bible</Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-white'>Add New Movie</Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-white'>Add New TV Show</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='footer-link-title text-white'>COMMUNITY</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link className='text-white text-decoration-none'>Guidelines</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>Discussions</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>Leaderboard</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>Twitter</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='footer-link-title text-white'>LEGAL</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link className='text-white text-decoration-none'>Terms of Use</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>API Terms of Use</Link>
                </li>
                <li>
                  <Link className='text-white text-decoration-none'>Privacy Policy</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <p className='footer-end-text'>Build 1859c6d (5555)</p>
    </div>
  )
}
