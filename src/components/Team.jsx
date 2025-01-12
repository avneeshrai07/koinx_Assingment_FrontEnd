import React from 'react';
import pfp4 from "../assets/photos/pfp4.png";
import pfp5 from "../assets/photos/pfp5.png";
import pfp6 from "../assets/photos/pfp6.png";

const Team = ({ tabs, sectionRefs }) => {
  const members = [
    {
      name: 'John Smith',
      designation: 'Software Engineer',
      description:
        'John is a dedicated software engineer with 5 years of experience in full-stack development. He specializes in building scalable web applications and enjoys solving challenging technical problems.',
      image: pfp4,
    },
    {
      name: 'Elina Williams',
      designation: 'Product Manager',
      description:
        'Elina is a results-driven product manager with expertise in creating user-centered designs and managing cross-functional teams. She has successfully launched several high-impact projects.',
      image: pfp5,
    },
    {
      name: 'David Lee',
      designation: 'UI/UX Designer',
      description:
        'David is a creative UI/UX designer with a passion for crafting intuitive and visually stunning user experiences. He has a keen eye for detail and a talent for turning ideas into reality.',
      image: pfp6,
    },
  ];

  return (
    <div key={tabs.Team} ref={sectionRefs.Team} className="bg-custom-black-300 mx-auto p-6 rounded shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Team</h2>
      <p className="text-white mb-6">
        Meet the talented individuals who drive our success. Our team consists of skilled professionals dedicated to delivering excellence.
      </p>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 border rounded-lg shadow-sm bg-blue-50">
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 md:w-20 md:h-20 rounded object-cover"
              />
              <h3 className="text-center text-sm text-white font-semibold mt-2">{member.name}</h3>
              <p className="text-xs text-center text-white mb-2">{member.designation}</p>
            </div>
            <div>
              <p className="text-sm text-white leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
