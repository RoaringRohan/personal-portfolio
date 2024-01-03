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
                <ul>
                    <li>Proficient in C, C++, Assembly, and MATLAB programming languages.</li>
                    <li>Experienced in managing databases, including MySQL, PostgreSQL, MongoDB, and Firebase.</li>
                    <li>Adept at using essential developer tools such as Visual Studio, Git Bash, Powershell, Postman, Jira, Confluence, WireShark, and Cisco Packet Tracer.</li>
                </ul>
            </div>
            <div className="frameworks">
                <Frameworks />
            </div>
            <div className="text-zone-2">
                <ul>
                    <li>Frameworks expertise: Node.js, Express, and Next.js for server-side and front-end development.</li>
                    <li>Proficient in crafting responsive interfaces using Bootstrap, SCSS, and Tailwind.css.</li>
                    <li>Experience in data science and software engineering with Matplotlib, TensorFlow.</li>
                    <li>Proficiency in libraries like jQuery and Unity for versatile application development.</li>
                    <li>Well-rounded skill set for impactful contributions across diverse projects, emphasizing quality and innovation.</li>
                </ul>
            </div>
            <div className="testingdeployment">
                <TestingDeployment />
            </div>
            <div className="text-zone-3">
                <ul>
                    <li>Proficient in testing and deployment using tools like Oracle VirtualBox.</li>
                    <li>Expertise in a variety of operating systems, including Windows, Linux, and Ubuntu.</li>
                    <li>Well-equipped to navigate diverse environments and implement effective testing and deployment strategies.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;