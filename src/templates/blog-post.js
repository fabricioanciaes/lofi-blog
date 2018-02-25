import React from "react";
import fixImage from "../utils/fixImage.js";

export default ({ data }) => {
    const post = data.markdownRemark;
    return <div>
        <img src={fixImage(post.frontmatter.featuredimg)} />
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.description}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>;
};

export const query = graphql`
         query BlogPost($slug: String!) {
           markdownRemark(frontmatter: { path: { eq: $slug } }) {
             frontmatter {
               title
               path
               categories
               featuredimg
               date
               description
             }
           }
         }
       `;