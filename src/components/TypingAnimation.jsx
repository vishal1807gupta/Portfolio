import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <>
            <TypeAnimation
                sequence={[

                    `Coding Enthusaist . . .`,
                    1000,
                    `Programmer . . .`,
                    1000,
                    'Full Stack Developer . .',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.9rem', display: 'inline-block'}}
                repeat={Infinity}
            />
        </>
    );
};

export default TypingAnimation;
