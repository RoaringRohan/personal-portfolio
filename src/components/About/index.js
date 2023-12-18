import './index.scss';
import Languages from './Languages';
import Frameworks from './Frameworks';
import TestingDeployment from './TestingDeployment';

const About = () => {

    return (
        <div className="container about">
            <div className="languages">
                <Languages />
            </div>
            <div className="text-zone-1">
                <p>My expertise extends beyond the languages highlighted in the skills bar, encompassing a spectrum of programming languages including C, C++, Assembly, and MATLAB. Additionally, I bring proficiency in databases such as MySQL, PostgreSQL, MongoDB, and Firebase. Complementing these technical skills, I am adept with essential developer tools including Visual Studio, Git Bash, Powershell, Postman, Jira, Confluence, WireShark, and Cisco Packet Tracer. This broad skill set enables me to craft robust solutions and streamline development processes, contributing to effective and innovative software solutions.</p>
            </div>
            <div className="frameworks">
                <Frameworks />
            </div>
            <div className="text-zone-2">
                <p>Complementing my skills highlighted in the bar, I bring expertise in frameworks such as Node.js, Express, and Next.js for seamless server-side and front-end development. Additionally, I excel in crafting responsive interfaces using Bootstrap, SCSS, and Tailwind.css. In the domain of data science and software engineering, I leverage Matplotlib, TensorFlow, and Maven for efficient and robust solutions. My proficiency also extends to libraries like jQuery and Unity, enabling versatile application development. This well-rounded skill set positions me to make impactful contributions across diverse projects, emphasizing quality and innovation.</p>
            </div>
            <div className="testingdeployment">
                <TestingDeployment />
            </div>
            <div className="text-zone-3">
                <p>In addition to my proficiency with cloud platforms highlighted in the bar, I excel in testing and deployment using tools such as Oracle VirtualBox. My expertise extends to a variety of operating systems, including Windows, Linux, and Ubuntu. This broad skill set equips me to navigate diverse environments and implement effective testing and deployment strategies.</p>
            </div>
        </div>
    );
}

export default About;