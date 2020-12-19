import React from 'react'

export const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="inner">
                    <header>
                        <h2>Liên Lạc Với Chúng Tôi</h2>
                    </header>
                    <form method="post" action="#">
                        <div className="field half first">
                            <label htmlFor="name">Tên</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Thông Điệp</label>
                            <textarea name="message" id="message" rows={6} defaultValue={""} />
                        </div>
                        <ul className="actions">
                            <li><input type="submit" defaultValue="Send Message" className="alt" /></li>
                        </ul>
                    </form>
                    <div className="copyright">
                        © Được Thiết Kế Bởi : <a href="https://templated.co/">Thanh Bình</a>. Images <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
            </section>
            {/* Scripts */}
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/skel.min.js"></script>
                <script src="assets/js/util.js"></script>
                <script src="assets/js/main.js"></script>
        </div>
    )
}
