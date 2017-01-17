
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
  reactStatusRender,
  reactStatusIndicators
}) => {
  if (!status) {
    return null
  }

  indicators = indicators || reactStatusIndicators

  const indicator = createElement(indicators[status], indicatorProps[status])
  const message = messages[status]

  if (reactStatusRender) {
    return reactStatusRender({ indicator, message })
  }

  return indicator
}

Status.propTypes = {
  indicators: PropTypes.object,
  indicatorProps: PropTypes.object,
  status: PropTypes.string,
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
  reactStatusRender: PropTypes.func,
  reactStatusIndicators: PropTypes.object
}

export default Status
