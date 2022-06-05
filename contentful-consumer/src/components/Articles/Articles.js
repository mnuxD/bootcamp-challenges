import PropTypes from "prop-types";
import { ArticleCard } from "./Article";

const Articles = ({ list }) => {
  return (
    <div>
      {list?.map((item, i) => (
        <ArticleCard data={item} key={i} />
      ))}
    </div>
  );
};

Articles.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      // Title of the article
      title: PropTypes.string.isRequired,

      // Description of the article
      description: PropTypes.string.isRequired,

      // URL from the article without https
      image: PropTypes.object, //should use shape to define the object

      // Author of article : "name - email"
      author: PropTypes.string,
    })
  ),
};

Articles.defaultProps = {
  list: [],
};

export default Articles;
