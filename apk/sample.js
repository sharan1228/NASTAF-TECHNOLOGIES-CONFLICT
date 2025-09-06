/* footer*/
.footer {
  color: #fff;
  background: url(https://images.pexels.com/photos/9519774/pexels-photo-9519774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    center center/cover no-repeat;
  font-size: 15px;
  padding: 80px 0 60px 0;
  position: relative;
  overflow: hidden;
}
.com-name
{
  padding: 20px;
  text-transform: uppercase;
}
.footer::before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  position: absolute;
  inset: 0;
  z-index: 1;
}

.footer .footer-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.footer .footer-info h3 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.footer .footer-info h3 span {
  color: var(--color-primary);
}

.footer .footer-info p {
  font-size: 15px;
  line-height: 1.8;
  color: #ddd;
  font-family: var(--font-primary);
}

.footer .footer-content h4 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 16px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
  padding-bottom: 6px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul li {
  padding: 8px 0;
}

.footer .footer-links ul a {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  text-decoration: none;
}

.footer .footer-links ul a:hover {
  color: #fff;
  padding-left: 5px;
}

.footer .social-links {
  margin-top: 20px;
}

.footer .social-links a {
  display: inline-block;
  margin: 0 6px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s ease;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 0 0 transparent;
}

.footer .social-links a:hover {
  background: var(--color-primary);
  transform: scale(1.1);
  box-shadow: 0 0 10px var(--color-primary);
}

.footer .footer-legal {
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
}

.footer .footer-legal .copyright,
.footer .footer-legal .credits {
  color: #ccc;
  font-size: 13px;
}

.footer .footer-legal .credits a {
  color: var(--color-primary);
  text-decoration: none;
}

.footer .footer-legal .credits a:hover {
  text-decoration: underline;
}
.social-links 
{
  margin-left: 50px;
}
.bi
{
  color: #203f7d;
}
.ci {
  display: inline-block;
  background: radial-gradient(circle at 30% 107%, 
    #feda75 0%, 
    #fa7e1e 40%, 
    #d62976 60%, 
    #962fbf 80%, 
    #4f5bd5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.di
{
  color: #203f7d;
}
@media screen and (max-width: 768px) {
  #footerftext {
    text-align: center;
  }
  .footer .footer-info h3 {
    font-size: 24px;
  }
}

#tc p {
  text-align: justify;
}
