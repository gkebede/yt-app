import React from 'react';

const Accordion = ({items}) => {
    const renderItem  = items.map((output) =>{
        return (
            <React.Fragment key={output.title}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                {output.title}
                </div>
                <div className="content active">
               <p> {output.Content}</p>
                </div>
            </React.Fragment>
        );
    })

    return <div className="ui styled accordion">{renderItem}</div>
}

export default Accordion;