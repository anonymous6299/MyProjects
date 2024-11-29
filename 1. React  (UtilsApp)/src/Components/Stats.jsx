import React from 'react'

const Stats = (props) => {
    const sChar = () => {
        var sChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
        var matches = props.text.match(sChars);
        if (matches === null) {
            return 0;
        }
        else {return matches.length; }
    }
    return (
        <div className='container my-5'>
            <table className="table">
                <thead className='text-center'>
                    <tr>
                        <th scope="col">Characters/Words</th>
                        <th scope="col">Characters/Words(Spaces Included)</th>
                        <th scope="col">Special Characters</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr>
                        <th style={{ fontWeight: "normal" }}>{props.text.split(" ").join("").length}</th>
                        <th style={{ fontWeight: "normal" }}>{props.text.length}</th>
                        <td>{sChar()===0?"Absent":"Present"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stats
