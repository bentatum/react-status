
import tx from 'theme/utilities'
import { FadeIn } from 'elements'
import { css } from 'aphrodite/no-important'
import { compose, defaultProps, setPropTypes } from 'recompose'
import { default as React, PropTypes, createElement } from 'react'
import { Loading, Success, Failure } from 'elements/status-indicators'

const Status = ({
  status,
  messages,
  statuses: [REQUEST, SUCCESS, FAILURE],
  indicators,
  indicatorProps,
  speed,
  ...props
}, {
  reactStatusRender
}) => {
  if (!status) {
    return null
  }

  indicators = indicators || {
    [REQUEST]: Loading,
    [SUCCESS]: Success,
    [FAILURE]: Failure
  }

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
  statuses: PropTypes.array,
  renderIndicator: PropTypes.func
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

export default Status
