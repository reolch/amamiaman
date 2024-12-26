import React from 'react';
import { Parallax } from 'react-parallax';
import './FAQSection.css';

const FAQSection = () => {
    return (
        <Parallax
            bgImage="/parallax_bg001.jpg"
            strength={300}
            className="faq-section"
        >

            <div className="parallax-content">
                <div className="container">
                    <h2>よくある質問 <span>questions</span></h2>
                    <div className="row">
                        <div className="col span_12">
                            <p>皆様からの質問を掲載しています。<br /> ご不明点などございましたら、参考程度にご覧ください。</p>
                            <p className="more text-center">
                                <a href="/qa" className="add_arrow">詳しくはこちら</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default FAQSection;
