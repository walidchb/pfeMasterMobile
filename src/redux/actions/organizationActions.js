export const UPDATE_ORGANIZATION = 'UPDATE_ORGANIZATION'

export const updateOrganization = organization => {
  return {
    type: UPDATE_ORGANIZATION,
    payload: organization,
  }
}
