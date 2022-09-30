import React from 'react'
import { Link } from 'react-router-dom';
import '../asset/styles/components/group-card.scss'



type groupCardProps = {
  title: string;
  url: string;

};
const GroupCard = ({title , url}: groupCardProps)  => {
  return (
    <Link to={url} className="group">
      <p className="group-name">{title}</p>
      <span className="links">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28px"
          height="24px"
          viewBox="0 0 64 42.67"
          fill=" #588DE4"
        >
          <g id="Layer_2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M63.22,19.57,44.5.78a2.67,2.67,0,0,0-3.78,3.77L54.79,18.67H2.67a2.67,2.67,0,1,0,0,5.33H55L40.73,38.11a2.67,2.67,0,1,0,3.76,3.78L63.21,23.35a2.67,2.67,0,0,0,0-3.78Z" />
            </g>
          </g>
        </svg>
      </span>
    </Link>
  );
};

export default GroupCard;