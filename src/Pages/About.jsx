import homeBig from "../Store Images/homeBig.jpeg";

const About = () => {
  return (
    <>
      <div className="second-navigation" style={{ marginTop: "20px" }}>
        <h2>Home/About</h2>
      </div>
      <section className="about">
        <div className="about-left">
          <img src={homeBig} alt="" />
        </div>
        <div className="about-right">
          <h1 style={{fontSize: "40px"}}>Our Story</h1>
          <p style={{lineHeight:"2"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia voluptates porro, exercitationem magni cum fugit mollitia amet dolores! Ab necessitatibus, voluptatum beatae dolorum eius doloremque ipsam rerum temporibus eos soluta. Excepturi alias minus suscipit vel, facilis quis neque rem repellat culpa quam dolor ea ratione id reprehenderit officiis non aliquam. Atque asperiores beatae eum placeat incidunt quod similique! Earum aut delectus totam, fugit, sint sed corrupti, cumque natus consectetur corporis numquam.</p>
        </div>
      </section>
    </>
  );
};

export default About;
