import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';

import i18n from 'i18next';
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from './styles';

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const openWhatsAppChat = () => {
    const phoneNumber = "+919176847236"; // Same placeholder number as contact
    const message = encodeURIComponent("Hello! I'd like to get in touch with you.");
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t('Contact')}</Language>
              <Large to="/">{t('Tell us everything')}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <Chat onClick={openWhatsAppChat}>{t(`Let's Chat`)}</Chat>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t('Company')}</Title>
              <Large to="/">{t('About')}</Large>
              <Large to="/blogs">{t('Blog')}</Large>
              <Large to="/products">{t('Products')}</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: '3rem' }}
          >
            <div>
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </LogoContainer>
              </NavLink>
              <div style={{ marginTop: '10px', fontSize: '14px', color: '#666', textAlign: 'center' }}>
                Happy Glace Giftings - (A brand of Krishna Sai Enterprises)
              </div>
            </div>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
