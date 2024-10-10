import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Touch from '../Components/Offer/Touch';
import BlogCard from '../Components/SingleBlogPage/BlogCard.jsx';
import CommentForm from '../Components/SingleBlogPage/CommentForm'; // Make sure to import the BlogCard component
import SectionTitle from '../Components/SectionTitle';
import RelatedPost from '../Components/SingleBlogPage/RelatedPost';
import BlogTopSection from '../Components/SingleBlogPage/BlogTopSection';

const SingleBlogPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <BlogTopSection
      category="MAKEUP" 
      author="Megan Alphonso" 
      date="Dec 08, 2023"
      />

      {/* Main Blog Content */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          {/* Blog Card 1 */}
          <div className="col-lg-8 col-12 col-md-8 mb-4">
            <BlogCard 
              sectionTitle="Romantic In Red"
              imageSrc="/images/blog1.jpg"
              content="Beautiful brides-to-be, your big day is almost here, and have you thought about what lipstick shade you're going to adorn your pretty pout with? Let's face it, choosing the perfect lipstick shade is no small feat. With infinite options, from reds to nudes, the struggle is real. But fear not; we're here to help you find the top bridal lipstick shades."
            />
          </div>

          {/* Blog Card 2 */}
          <div className="col-lg-8 col-12 col-md-8 mb-4">
            <BlogCard 
              sectionTitle="Classic Bridal Look"
              imageSrc="/images/blog2.jpg"
              content="When it comes to bridal looks, nothing beats the elegance of a classic red lipstick. It's a timeless choice that adds sophistication and confidence to your look. Here are some tips on choosing the best shade for your big day.When it comes to bridal looks, nothing beats the elegance of a classic red lipstick."
            />
          </div>

          {/* Blog Card 3 */}
          <div className="col-lg-8 col-12 col-md-8 mb-4">
            <BlogCard 
              sectionTitle="Chic and Subtle"
              imageSrc="/images/blog3.jpg"
              content="Beautiful brides-to-be, your big day is almost here, and have you thought about what lipstick shade you’re going to adorn your pretty pout with? Let's face it, choosing the perfect lipstick shade is no small feat. With infinite options, from reds to nudes, the struggle is real. But fear not; we're here to be your bridal squad and help you find the top bridal lipstick shades. "
            />
          </div>

          {/* Blog Card 4 */}
          <div className="col-lg-8 col-12 col-md-8 mb-4">
            <BlogCard 
              sectionTitle="Bold and Beautiful"
              imageSrc="/images/blog4.jpg"
              content="Want to make a statement on your wedding day? Bold lipstick shades like deep reds and purples can add a dramatic and beautiful touch to your bridal look."
            />
          </div>
        </div>
      </div>

      <SectionTitle title={"Leave Comment"}/>
      <CommentForm/>

      <SectionTitle title={"You may also like "}/>
      <div className="row px-5">
        <RelatedPost imageSrc="/images/expected1.jpg" title="MUST-TRY EYE & LIP COMBINATIONS FOR THIS NEW YEAR" />
        <RelatedPost imageSrc="/images/expected2.jpg" title="MUST-TRY EYE & LIP COMBINATIONS FOR THIS NEW YEAR" />
        <RelatedPost imageSrc="/images/expected3.jpg" title="MUST-TRY EYE & LIP COMBINATIONS FOR THIS NEW YEAR" />
        <RelatedPost imageSrc="/images/expected4.jpg" title="MUST-TRY EYE & LIP COMBINATIONS FOR THIS NEW YEAR" />
      </div>

      {/* Touch Section */}
      <Touch />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SingleBlogPage;