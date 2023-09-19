import { useState } from 'react'
import { sendEmail } from './utils'
import ReactDOM from 'react-dom/client'

const EmailForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
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
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
    }, 3000)
    target.name.value = '';
    target.email.value = '';
    target.message.value = '';
  }
  return (
    <form id="contact" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input name="name" type="text" className="form-control" id="name" placeholder="姓名" required />
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
              required
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <textarea
              required
              name="message"
              rows={6}
              className="form-control"
              id="message"
              placeholder="内容"
            ></textarea>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <button id="form-submit" className="main-button" style={{ width: 120 }}>
              发送
            </button>
            {isSuccess && <span style={{ color: '#52c41a', transition: 'all 2s' }}>√ 发送成功</span>}
          </fieldset>
        </div>
      </div>
    </form>
  )
}

ReactDOM.createRoot(document.getElementById('contact-form') as HTMLElement).render(<EmailForm />)

export default EmailForm
