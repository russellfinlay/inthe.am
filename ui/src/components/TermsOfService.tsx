import React, {FunctionComponent} from 'react'
import {Button, Callout, Colors} from 'react-foundation'
import {useSelector} from 'react-redux'
import request from '../clients/request'
import {useToasts} from 'react-toast-notifications'
import {push} from 'connected-react-router'

import {RootState, useAppDispatch} from '../store'
import Footer from './Footer'
import {refreshStatus} from '../thunks/status'

const TermsOfService: FunctionComponent = () => {
  const mustAccept = useSelector((state: RootState) =>
    state.status.logged_in ? !state.status.tos_up_to_date : false
  )
  const acceptUrl = useSelector(
    (state: RootState) =>
      state.status.logged_in && state.status.urls?.tos_accept
  )
  const {addToast} = useToasts()
  const dispatch = useAppDispatch()

  function acceptTerms() {
    if (!acceptUrl) {
      throw Error('No terms of service acceptance URL found')
    }

    const formData = new FormData()
    formData.set('version', '1')

    request('POST', acceptUrl, {
      data: formData,
      lookupApiUrl: false,
    }).then(() => {
      addToast('Terms of service accepted.', {appearance: 'success'})
      dispatch(refreshStatus()).then(() => {
        dispatch(push('/tasks'))
      })
    })
  }

  return (
    <div className="row standalone">
      <div className="standalone-content">
        <h2>Terms and Conditions of Use of Inthe.AM</h2>

        {mustAccept && (
          <Callout color={Colors.ALERT}>
            You must press the 'Accept' button below to continue.
          </Callout>
        )}

        <p>
          <b>1 &nbsp;Acceptance The Use Of Inthe.AM Terms and Conditions</b>
        </p>
        <p>
          Your access to and use of Inthe.AM is subject exclusively to these
          Terms and Conditions. You will not use the Website for any purpose
          that is unlawful or prohibited by these Terms and Conditions. By using
          the Website you are fully accepting the terms, conditions and
          disclaimers contained in this notice. If you do not accept these Terms
          and Conditions you must immediately stop using the Website.
        </p>

        <p>
          <b>2 &nbsp;Credit card details</b>
        </p>
        <p>
          Inthe.AM will never ask for Credit Card details and request that you
          do not enter it on any of the forms on Inthe.AM.
        </p>

        <p>
          <b>3 &nbsp;Advice</b>
        </p>
        <p>
          The contents of Inthe.AM website do not constitute advice and should
          not be relied upon in making or refraining from making, any decision.
        </p>

        <p>
          <b>4 &nbsp;Change of Use</b>
        </p>
        <p>
          Inthe.AM reserves the right to:
          <br /> 4.1 &nbsp;change or remove (temporarily or permanently) the
          Website or any part of it without notice and you confirm that Inthe.AM
          shall not be liable to you for any such change or removal and.
          <br /> 4.2 &nbsp;change these Terms and Conditions at any time, and
          your continued use of the Website following any changes shall be
          deemed to be your acceptance of such change.
        </p>

        <p>
          <b>5 &nbsp;Links to Third Party Websites</b>
        </p>
        <p>
          Inthe.AM Website may include links to third party websites that are
          controlled and maintained by others. Any link to other websites is not
          an endorsement of such websites and you acknowledge and agree that we
          are not responsible for the content or availability of any such sites.
        </p>

        <p>
          <b>6 &nbsp;Copyright </b>
        </p>
        <p>
          6.1 &nbsp;All copyright, trade marks and all other intellectual
          property rights in the Website and its content (including without
          limitation the Website design, text, graphics and all software and
          source codes connected with the Website) are owned by or licensed to
          Inthe.AM or otherwise used by Inthe.AM as permitted by law.
          <br /> 6.2 &nbsp;In accessing the Website you agree that you will
          access the content solely for your personal, non-commercial use. None
          of the content may be downloaded, copied, reproduced, transmitted,
          stored, sold or distributed without the prior written consent of the
          copyright holder. This excludes the downloading, copying and/or
          printing of pages of the Website for personal, non-commercial home use
          only.
        </p>

        <p>
          <b>7 &nbsp;Disclaimers and Limitation of Liability </b>
        </p>
        <p>
          7.1 &nbsp;The Website is provided on an AS IS and AS AVAILABLE basis
          without any representation or endorsement made and without warranty of
          any kind whether express or implied, including but not limited to the
          implied warranties of satisfactory quality, fitness for a particular
          purpose, non-infringement, compatibility, security and accuracy.
          <br /> 7.2 &nbsp;To the extent permitted by law, Inthe.AM will not be
          liable for any indirect or consequential loss or damage whatever
          (including without limitation loss of business, opportunity, data,
          profits) arising out of or in connection with the use of the Website.
          <br /> 7.3 &nbsp;Inthe.AM makes no warranty that the functionality of
          the Website will be uninterrupted or error free, that defects will be
          corrected or that the Website or the server that makes it available
          are free of viruses or anything else which may be harmful or
          destructive.
          <br /> 7.4 &nbsp;Nothing in these Terms and Conditions shall be
          construed so as to exclude or limit the liability of Inthe.AM for
          death or personal injury as a result of the negligence of Inthe.AM or
          that of its employees or agents.
        </p>

        <p>
          <b>8 &nbsp;Indemnity</b>
        </p>
        <p>
          You agree to indemnify and hold Inthe.AM and its employees and agents
          harmless from and against all liabilities, legal fees, damages,
          losses, costs and other expenses in relation to any claims or actions
          brought against Inthe.AM arising out of any breach by you of these
          Terms and Conditions or other liabilities arising out of your use of
          this Website.
        </p>

        <p>
          <b>9 &nbsp;Severance</b>
        </p>
        <p>
          If any of these Terms and Conditions should be determined to be
          invalid, illegal or unenforceable for any reason by any court of
          competent jurisdiction then such Term or Condition shall be severed
          and the remaining Terms and Conditions shall survive and remain in
          full force and effect and continue to be binding and enforceable.
        </p>

        <p>
          <b>10 &nbsp;Governing Law</b>
        </p>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the law of USA and you hereby submit to the exclusive
          jurisdiction of the USA courts.
        </p>

        <p>
          For any further information please email{' '}
          <a href="mailto:intheam@adamcoddington.net">webmaster</a>
        </p>

        {mustAccept && (
          <Button id="accept-terms" onClick={acceptTerms}>
            Accept
          </Button>
        )}
        <Footer />
      </div>
    </div>
  )
}

export default TermsOfService
