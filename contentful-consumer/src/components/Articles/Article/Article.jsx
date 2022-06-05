import PropTypes from "prop-types";

const Article = ({ data }) => {
  const { title, description, author, image } = data;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}</p>
      <img src={`https:${image?.url}`} alt={image?.filename} />
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    // Title of the article
    title: PropTypes.string.isRequired,

    // Description of the article
    description: PropTypes.string.isRequired,

    // URL from the article without https
    image: PropTypes.object, //should use shape to define the object

    // Author of article : "name - email"
    author: PropTypes.string,
  }),
};

Article.defaultProps = {
  data: {
    title: "Title",
    description: "Description",
  },
};

export default Article;
