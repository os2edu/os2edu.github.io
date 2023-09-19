import { useState } from 'react'
import { sendEmail } from './utils'
import ReactDOM from 'react-dom/client'

const EmailForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }
    const name = target.name.value
    const email = target.email.value
    const message = target.message.value;
    sendEmail(name, email, message)
  }
  return (
    <form id="contact" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input name="name" type="text" className="form-control" id="name" placeholder="姓名" />
          </fieldset>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="邮箱"
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <textarea
              name="message"
              rows={6}
              className="form-control"
              id="message"
              placeholder="内容"
            ></textarea>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button id="form-submit" className="main-button" style={{ width: 120 }}>
              发信息
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  )
}

ReactDOM.createRoot(document.getElementById('contact-form') as HTMLElement).render(<EmailForm />)

export default EmailForm
