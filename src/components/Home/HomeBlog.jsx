import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ecommerceSEO from "../../assets/blog/ecommerceSEO.png";
import ecommercePlatform from "../../assets/blog/ecommercePlatform.png";

const BlogCard = ({ image, title, date, link }) => (
  <Link to={link} className="group">
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          This blog is posted by Stack Bridge at {date}
        </p>
        <div className="mt-4 flex items-center text-red-600 font-medium">
          Read more
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  </Link>
);

const HomeBlog = () => {
  const blogPosts = [
    {
      image: ecommerceSEO,
      title: "eCommerce SEO: The Ultimate Guide to Reach The Best Result",
      date: "22 August, 2024",
      link: "/blog/ecommerce-seo-guide",
    },
    {
      image: ecommercePlatform,
      title: "9 Best eCommerce Platform - Find the One That's Right for You",
      date: "22 August, 2024",
      link: "/blog/best-ecommerce-platforms",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-red-600 font-semibold mb-4">OUR BLOG</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">NEWS & ARTICLES</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stack Bridge Latest news and blogs published here you can view and
          also read the technological content.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            date={post.date}
            link={post.link}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link
          to="/blogs"
          className="inline-flex items-center space-x-2 bg-[#dd0429] text-white px-4 py-3 hover:bg-[#091f40] hover:text-red-600 transition-colors font-semibold"
        >
          <span className="font-semibold">View All Blogs</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default HomeBlog;

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
