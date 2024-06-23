import { UPDATE_ORGANIZATION } from '../actions/organizationActions'

const defaultState = []

const organizationReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ORGANIZATION:
      return oldState.map(organization =>
        organization.id === action.payload.id ? { ...action.payload } : organization
      )
    default:
      return oldState
  }
}

export default organizationReducer
