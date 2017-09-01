import React from 'react'

import { Panel, NavLink } from 'components/navigation/SidePanel'

import classNames from 'utils/classnames'

const AccountSidePanel = (props) => {
  const {
    className
  } = props

  const modifiedClassNames = classNames('account-side-panel', className)

  return (
    <Panel className={modifiedClassNames}>
      <NavLink href={'/account'} exact>
        Personal Information
      </NavLink>

      <NavLink href={'/account/contact'} exact>
        Contact Details
      </NavLink>

      <NavLink href={'/account/notifications'} exact>
        Notifications
      </NavLink>

      <NavLink href={'/account/payment'} exact>
        Payment Information
      </NavLink>

      <NavLink href={'/account/security'} exact>
        Security Settings
      </NavLink>
    </Panel>
  )
}

export default AccountSidePanel
