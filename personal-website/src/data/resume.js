const resume = {
  description: 'My name is Jason Drucker and I am a Computer Science Student at Villanova University graduating in May of 2020.  I am originally from the Greater New York City area and am currently seeking post-graduation full time Software Engineering opportunities in preferably, but not limited to, the New York City region.  I am most experienced with Front-end technologies like React.js/Redux and Java Development.  Thanks for visiting my website and I hope you enjoy learning more about me!',
  experience :[
    {
      id: 0,
      company: 'Visa Inc.',
      position: 'Front End Software Engineering Intern',
      startDate: 'May 2019',
      endDate: 'Aug 2019',
      location: 'Austin, TX',
      bulletPoints: [
        'Migrated the front end of three modules within a legacy transaction processing framework to a React application utilizing tools such as a Visa-developed templating library, Redux, Redux-Reselect, and Redux-Saga.',
        'Executed one module completely through the SSDLC eventually delivering the project to production.',
        'Worked on an Agile-Scrum team made of 4 interns and together identified objectives, planned sprints, and orchestrated frequent demos to managers and clients.'
      ]
    },
    {
      id: 1,
      company: 'Vatican Telecommunications',
      position: 'Web Development Intern',
      startDate: 'Sept 2018',
      endDate: 'Dec 2018',
      location: 'Vatican City State',
      bulletPoints: [
        'Worked with the Vatican’s Order of St. Augustine to create a webpage connecting 70 Augustinian schools worldwide',
        'Used Wordpress as the CMS, PHP and MySQL to manage and populate the site’s data, and the Google Maps Javascript API to display an interactive map of where the schools are located in their more than 20 different countries.'
      ]
    },
    {
      id: 2,
      company: 'Harris Corporation',
      position: 'Space & Intelligence Systems Software Engineering Intern',
      startDate: 'May 2018',
      endDate: 'July 2018',
      location: 'Melbourne, FL',
      bulletPoints: [
        'Contributed to a software team of 9 engineers practicing Agile-Scrum principles.',
        'Analyzed and presented approaches to web authentication.  Implemented Javascript and reverse proxy solutions.',
        'Explored the capabilities of Swagger to create REST API endpoints. Developed client and server instances using Java.',
        'Utilized Amazon Web Services to manage EC2 instances, S3 buckets, Route 53, and load balancing.'
      ]
    },
    {
      id: 3,
      company: 'Villanova Computing Sciences Department',
      position: 'Student Associate',
      startDate: 'Sept  2016',
      endDate: 'PRESENT',
      location: 'Villanova, PA',
      bulletPoints: [
        'Used HTML, CSS, and PHP to work with a MySQL database to create an informational department webpage.',
        'Created a web application using the open-source tracking.js library which can track a user’s face and place Villanova themed filters such as hats and accessories on the image.',
        'Demonstrated web application at Computing Sciences Department open houses.'
      ]
    },
    {
      id: 4,
      company: 'Unified Technologies',
      position: 'Information Technology Intern',
      startDate: 'June 2017',
      endDate: 'Aug 2017',
      location: 'New York, NY',
      bulletPoints: [
        'Worked with teams at 3 different customer sites rolling out office phones, troubleshooting connections and recovering a server room from flood damage.'
      ]
    },
    {
      id: 5,
      company: 'Villanova Computing Sciences Department',
      position: 'Freshman Match Researcher',
      startDate: 'Jan 2017',
      endDate: 'May 2017',
      location: 'Villanova, PA',
      bulletPoints: [
        'Selected from a pool of 180 applicants to be a member of a 30 student research cohort.',
        'In a team of three, assembled two robotic arms which, in cooperation with two Raspberry Pi 3s and two cameras, could interpret a tic tac toe board and analyze a next move.'
      ]
    }
  ],
  education: [{
    school: 'Villanova University',
    startDate: 'August 2016',
    endDate: 'May 2020',
    location: 'Villanova, PA',
    icon: 'villanova',
    additonalInfo: [

    ]
  },
  {
    school: 'Bloomfield High School',
    startDate: 'September 2012',
    endDate: 'June 2016',
    location: 'Bloomfield, NJ',
    additonalInfo: [
    ]
  }
  ]
};

export {resume};
