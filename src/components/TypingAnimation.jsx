import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <>
            <TypeAnimation
                sequence={[

                    `Coding Enthusiast . . .`,
                    800,
                    `Programmer . . .`,
                    800,
                    'Full Stack Developer..',
                    800,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.9rem', display: 'inline-block' }}
                repeat={Infinity}
            />
        </>
    );
};

export default TypingAnimation;
