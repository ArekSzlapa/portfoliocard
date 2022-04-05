import mugshot from "./images/Mugshot.png";

const Intro = () => {
  return (
    <>
      <img src={mugshot} alt="It's me! Mario!" />
      <h1>Arkadiusz Szłapa</h1>
      <h4>Frontend Developer</h4>
      <p>Arkadiuszsz.pl</p>
      <div className="intro-buttons">
        <a href="mailto:arek.szlapa@gmail.com">
          <button className="intro-mail">
            <i class="fa-solid fa-envelope"></i>Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/arkadiusz-sz%C5%82apa-1561951a9/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="intro-linkedin">
            <i class="fa-brands fa-linkedin-in"></i>LinkedIn
          </button>
        </a>
      </div>
    </>
  );
};

export default Intro;
