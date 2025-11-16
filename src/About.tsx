import Header from './Header'
import Timeline from './Timeline';
import Contact from './Contact';

export default function About() {
    return (
        <>
        <Header></Header>
        <h2>a bit about me</h2>
        <p>
            hi, I'm Pieter a software developer, <br />
            I enjoy making clean and easy to use user experiences, <br />
            my passion is solving any problems that I have. <br /> <br />
        </p>
        <p>
            I started coding 5 years ago, <br />
            since then, <br />
            I've worked on projects ranging from websites to educative applications, <br />
            also I love to create fun engaging games in my free time.
        </p>
        <br />
        <p>
            from C# to No-code platforms, <br />
            I'm always open to learn new things.
        </p>
        <br />
        <h2>My study</h2>
        <Timeline></Timeline>
        <Contact></Contact>
        <p className="footer">
            developed by Piet Hendrik Boterhoek ©2025
        </p>
        </>
    );
}