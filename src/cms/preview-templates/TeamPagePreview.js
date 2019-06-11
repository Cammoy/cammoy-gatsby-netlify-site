import React from 'react'
import PropTypes from 'prop-types'
import TeamPageTemplate from '../../templates/team-page'

const TeamPagePreview = ({ entry, widgetFor }) => (
    <div>
      Test
  </div>
)

TeamPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPagePreview
