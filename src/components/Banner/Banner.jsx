import images from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <section>
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: `url(${images})`,
          borderRadius: '24px',
          backgroundSize: 'cover',
          width: 'auto',
          height: 'auto',
        }}
      >
        <div
          className="hero-overlay rounded-3xl bg-opacity-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%)',
          }}
        ></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1 className="mb-5 lg:text-[52px] text-[32px] font-semibold lg:font-bold">
              Discover an exceptional cooking <br className="lg:flex hidden" />{' '}
              class tailored for you!
            </h1>
            <p className="mb-10">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div>
              <button className="btn bg-[#0BE58A] rounded-full border-none mr-6">
                Explore Now
              </button>
              <button className="btn bg-transparent rounded-full text-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
