import React from 'react'
import { paymentGateways } from '../../../mockdata/landing/herosection'

export default function PaymentGateways() {
  return (
    <div>
      <img alt="" src={paymentGateways} className="sm:w-max w-full" />
    </div>
  )
}
