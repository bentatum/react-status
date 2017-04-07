
import tx from 'theme/utilities'
import { FadeIn } from 'elements'
import { default as React, PropTypes, createElement } from 'react'

const Status = ({
  status,
  messages,
  indicators,
  indicatorProps,
  speed,
  ...props
}, {
  reactStatus
}) => {
  if (!status) {
    return null
  }

  indicators = indicators || reactStatus.indicators

  const indicator = createElement(indicators[status], indicatorProps[status])
  const message = messages[status]

  if (reactStatus.render) {
    return reactStatus.render({ indicator, message })
  }

  return indicator
}

Status.propTypes = {
  indicators: PropTypes.object,
  indicatorProps: PropTypes.object,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  messages: PropTypes.object,
  statuses: PropTypes.array
}

Status.defaultProps = {
  indicatorProps: {
    pending: {},
    success: {},
    failure: {}
  },
  messages: {},
  statuses: [
    'pending',
    'success',
    'failure'
  ]
}

Status.contextTypes = {
  reactStatus: PropTypes.object
}

export default Status
