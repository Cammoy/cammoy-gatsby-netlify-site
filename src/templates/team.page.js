import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const TeamPage = ({ content }) => {
    return (
        <Layout>
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            {title}
                        </h2>
                        <Content className="content" content={content} />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TeamPage;


// export const teamPageQuery = graphql`
//     query TeamPage($id: String!) {
//         markdownRemark(id: { eq: $id }) {
//             frontmatter {
//                 name,
//                 email,
//                 photo,
//                 description
//             }
//         }
//     }
// `;

