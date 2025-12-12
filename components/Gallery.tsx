import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const GALLERY_IMAGES = [
    "./images/440855059_1099419024671665_4879251571993089130_n.jpg",
    "./images/440877347_1584224605754518_8100319721990216255_n.jpg",
    "./images/441038796_1156263749131930_5834042698145641277_n.jpg",
    "./images/441048399_7796098987106721_810863748905994782_n.jpg",
    "./images/441162511_1001494004447311_1548891659526714829_n.jpg",
    "./images/442178826_367944009011474_4976999280149474512_n.jpg",
    "./images/442451000_359788473743793_6158215592683391733_n.jpg",
    "./images/455261278_422452984153357_6812579056537847471_n.jpg",
    "./images/459134362_1018382966687840_3147182211295753571_n.jpg",
    "./images/461486813_551282343949619_4250040424033727784_n.jpg",
    "./images/462339440_524987830276044_5801675642410162480_n.jpg",
    "./images/466976772_428343323652767_4118258255612647211_n.jpg",
    "./images/467609204_1641324943117262_7295440959364765696_n.jpg",
    "./images/467887389_551813107739516_1391194385634915125_n.jpg",
    "./images/468831471_587978003766393_6103080995667541638_n.jpg",
    "./images/468993424_899073558980218_1556253990448559610_n.jpg",
    "./images/469003069_912488484321596_2430560987448363059_n.jpg",
    "./images/470060857_891272153183036_7848786873927482173_n.jpg",
    "./images/472380441_571340312451417_3850449918307174327_n.jpg",
    "./images/472420584_492850930076786_74067003381601076_n.jpg",
    "./images/473656277_1113058490082622_2894563739789773746_n.jpg",
    "./images/488624009_1849263459231505_292824686060165875_n.jpg",
    "./images/501509428_1878808659520578_8823080359622992884_n.jpg",
    "./images/502472701_715090324812149_8928033808326174840_n.jpg",
    "./images/508319635_1765545664319621_7620666957215875112_n.jpg",
    "./images/536702896_652721210609299_4963853505438886336_n.jpg",
    "./images/538537425_2206227516497486_3055724207393507316_n.jpg"
];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-3 text-primary">
                        <Instagram size={24} />
                        <span className="font-bold tracking-widest uppercase text-sm">Follow Us</span>
                    </div>
                    <a
                        href={CONTACT_INFO.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-2 hover:text-primary transition-colors flex items-center gap-3">
                            @gurparsadcreations
                            <ExternalLink size={24} className="opacity-50" />
                        </h2>
                    </a>
                    <p className="text-stone-500 italic max-w-2xl mx-auto mt-4">
                        A glimpse into our kitchen. Tag us in your sweet moments!
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {GALLERY_IMAGES.map((src, index) => (
                        <a
                            key={index}
                            href={CONTACT_INFO.instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 block"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="text-white w-10 h-10 drop-shadow-lg" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href={CONTACT_INFO.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-full font-bold shadow-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <Instagram size={20} />
                        View More on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
