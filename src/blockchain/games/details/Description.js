import React from 'react';

const Description = ({ desc }) => {
    return (
        <>
            {desc && desc.length > 0 && (desc.split('/n')).map((description, index) => (
                <React.Fragment key={index}>
                    <p>{description}</p>
                    <br />
                </React.Fragment>
            ))}
        </>
    );
};

export default Description;
