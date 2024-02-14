import React from 'react';

type UvIndexProps = {
    icon: React.JSX.Element;
    UV_index: string;
};

function UvIndex(props: UvIndexProps) {
    return (
        <div>
            <div>{props.icon}</div>
            <div>UV INDEX</div>
            <div>{props['UV_index']}</div>
            <div>Uv index line</div>
        </div>
    );
}

export default UvIndex;
