import React from 'react';

type AvatarProps = {
    src: string;
    alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
    return (
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
            <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            />
        </div>
    );
}