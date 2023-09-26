import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Footer = () => {
    const [currLabel, setCurrLabel] = useState<string>('')

    const links: { label: string, icon: string, url: string, type: 'img' | 'char' }[] = [
        {
            label: '清华大学开源操作系统研究组',
            icon: '/assets/images/qinghua.png',
            url: 'https://os.cs.tsinghua.edu.cn',
            type: 'img'
        }, {
            label: 'rCore OS',
            icon: 'R',
            url: 'https://rcore-os.cn',
            type: 'char'
        }, {
            label: '操作系统学习博客',
            icon: 'B',
            url: 'https://rcore-os.cn/blog/',
            type: 'char'
        }, {
            label: '开源操作系统年度技术会议',
            icon: '/assets/images/os2atc.png',
            url: 'https://os2atc.cn',
            type: 'img'
        }, {
            label: '开源操作系统训练营',
            icon: '/assets/images/github.png',
            url: 'https://github.com/LearningOS',
            type: 'img'
        }
    ]

    return <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className='footer-ul'>
                        {links.map((item) => {
                            return <li className='footer-li' onMouseLeave={()=>setCurrLabel('')} onMouseEnter={() => setCurrLabel(item.label)}><a href={item.url} target='_blank'>
                                {
                                    item.type === 'img' ? <img style={{border:'2px solid #fff', width: '100%', height: '100%', borderRadius: '50%' }} src={item.icon} alt="" />
                                        : <span className='footer-char'>{item.icon}</span>
                                }
                            </a></li>
                        })}
                    </ul>
                 <span className='curr-label'>{currLabel}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="copyright">&copy; 北京清华大学·京ICP备16045052号-11</p>
                </div>
            </div>
        </div>
    </footer>
}

ReactDOM.createRoot(document.getElementById('footer') as HTMLElement).render(<Footer />)

export default Footer