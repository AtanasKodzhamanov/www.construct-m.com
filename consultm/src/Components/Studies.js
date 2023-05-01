import React from 'react';
import { animated } from 'react-spring';
import './Studies.css';
import background from '../Assets/shard.jpg';

const Studies = () => {


    return (
        <animated.div
            className="parallax-container"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="sub-sections">

                <section className="preliminary">
                    <div className="section-content">
                        <h1 className="section-title">Preliminary Section</h1>
                        <p className="section-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        </p>
                    </div>
                </section>
                <section className="real-estate">
                    <div className="section-content odd">
                        <h1 className="section-title">Real Estate Section</h1>
                        <p className="section-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        </p>
                    </div>

                </section>
                <section className="spatial-consulting">
                    <div className="section-content">
                        <h1 className="section-title">Real Estate Section</h1>
                        <p className="section-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, </p>
                    </div>

                </section>
            </div>
        </animated.div>
    );

};

export default Studies;
