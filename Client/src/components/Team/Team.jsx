import React from 'react'
import { team_data } from "../../constants"


const Team = () => {
  return (
    <div>
        <div className='text-center pt-24 md:pt-10'>
            <h1 className='text-5xl md:text-8xl text-violet-300'>OUR TEAM</h1>
       </div>
  <div className="flex flex-wrap justify-center">
  {team_data.map((team_data, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
      <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-800 font-thin ">
        {/* <p>{testimonial.text}</p> */}
        <div className="flex mt- items-start">
          <img
            className="w-24 h-24 mr-6 rounded-full border border-neutral-300"
            src={team_data.image}
            alt=""
          />
          <div>
            <h6 className="font-bold">{team_data.user}</h6>
            <span className="text-sm font-normal italic text-neutral-300">
              {team_data.role}
            </span>
            <div className="flex mt-2">
              {team_data.social.map((socialIcon, index) => (
                <a
                  key={index}
                  href={socialIcon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 max-w-9"
                >
                  <img
                    src={socialIcon.icon}
                    alt=""
                    className="w-6 h-9"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default Team


