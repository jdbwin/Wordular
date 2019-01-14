import React from 'react'

import Button from 'components/buttons/Button'

const Logout = ({ accept, close }) => (
  <div>

    <p> Are you sure you want to logout? </p>

    <div className="field is-grouped is-grouped-centered m-t-md">
      <Button text="Yes" onClick={accept} color="is-danger" />
      <Button text="No" onClick={close} color="is-success" />
    </div>

  </div>
)

export default Logout

