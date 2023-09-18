import Items from "./utils/Item";
import Title from "./utils/Title"
import PropTypes from "prop-types";

const Sales = ({ifExists, endpoint:{title,items} }) => {
  // c///onsole.log("endpoint",endpoint);
  




  return (
    <>
   <div className='nike-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => (
            <Items {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
}



Sales.propTypes = {
  ifExists: PropTypes.bool.isRequired, // Example: You can change the type to match your actual prop type
  endpoint: PropTypes.shape({
    title: PropTypes.string.isRequired, // Example: You can change the type to match your actual prop type
    items: PropTypes.array.isRequired, // Example: You can change the type to match your actual prop type
  }).isRequired,
};
export default Sales
