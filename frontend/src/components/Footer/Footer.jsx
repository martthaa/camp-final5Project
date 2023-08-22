import React from 'react'
import { Brand } from "../../components/Header/Brand/Brand";
import { HashLink as Link } from "react-router-hash-link";
import {Container, Row, Col} from 'react-bootstrap'

const contacts = [
    {
        type: "mailto:",
        title: "Email",
        link: "needhelp@Organia.com",
        value: "needhelp@Organia.com",
    },
    {
        type: "tel:",
        title: "Phone",
        link: "666888888",
        value: "666 888 888",
    },
    {
        type: "",
        title: "Address",
        link: "https://www.google.com.ua/maps/place/88+Street+Rd,+Altamont,+NY+12009,+%D0%A1%D0%A8%D0%90/@42.6959388,-74.1116175,17z/data=!3m1!4b1!4m6!3m5!1s0x89de78c78070453b:0x25ddcfa394a70268!8m2!3d42.6959349!4d-74.1094288!16s%2Fg%2F11gwmqgq20?hl=ru",
        value: "88 road, Brooklyn Street, USA",
    },
];

const socialNetworks = [
    {
        type: "instagram",
        link: "https://www.instagram.com/sigma_software/",
    },
    {
        type: "facebook",
        link: "https://www.facebook.com/SIGMASOFTWAREGROUP",
    },
    { type: "twitter", link: "https://twitter.com/sigmaswgroup" },
    { type: "pinterest", link: "https://pinterest.com/" },
];

const utilsTitles = [
    "Style Guide",
    "404 Not Found",
    "Password Protected",
    "Licences",
    "Changelog",
];


export const Footer = () => {
    const currentYear = new Date().getFullYear();
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__contacts">
                            <h4 className="footer__contacts-title">Contact Us</h4>
                            <div className="footer__contacts-items">
                                {contacts.map((contact, index) => (
                                    <div
                                        className="footer__contacts-item"
                                        key={index}
                                    >
                                        <h5 className="footer__contacts-item__title">
                                            {contact.title}
                                        </h5>
                                        <a
                                            className="footer__contacts-item__link"
                                            href={`${contact.type}${contact.link}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {contact.value}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
    
                        <div className="footer__social">
                            <div className="footer__social-brand">
                                <Brand />
                            </div>
                            <div className="footer__social-slogan">
                                Simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum simply dummy text of the
                                printing
                            </div>
                            <div className="footer__social-items">
                                {socialNetworks.map((network, index) => (
                                    <a
                                        key={index}
                                        href={network.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span
                                            className={`footer__social-item ${network.type}`}
                                        ></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="footer__utilities">
                            <h5 className="footer__utilities-title">
                                Utility Pages
                            </h5>
                            <div className="footer__utilities-items">
                                {utilsTitles.map((title, index) =>
                                    title === "404 Not Found" ? (
                                        <Link to="/404#top" key={index}>
                                            {title}
                                        </Link>
                                    ) : (
                                        <Link to="/#top" key={index}>
                                            {title}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; <b>Organick</b> | Designed by <b>VictorFlow</b>{" "}
                    Templates - Powered by <b>Webflow</b>
                </div>
            </footer>
        );



}
