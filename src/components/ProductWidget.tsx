import React from 'react';

export function ProductWidget() {

    const productPhoto = require("../../images/blender.png") as string;

    return (
        <div className="bg-white drop-shadow product-widget">
            <img src={productPhoto} className="p-8" alt="blender" />
            <p className="product-name text-lg"> Shark Ninja </p>
            <p className="description"> Magic bullet NutriBullet 12-Piece High-Speed Blender/Mixer System</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 5 }} className="tag-box">
                <p className="tag"> Pantry </p>
                <p className="tag"> Obsolete</p>
                <p className="tag"> Blender</p>
            </div>
            <div className="bottom-border">
                <p className="bottom-tag w-36"> Lightning Deal</p>
            </div>
        </div>
    );
}