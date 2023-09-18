import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <>
      <div className="grid items-center">
        <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
      </div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired, // Assuming 'title' is a string
};

export default Title;
