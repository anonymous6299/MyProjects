import React from 'react'

const Sorting = (props) => {
    return (
        <form className="max-w-sm mx-auto">
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-indigo-300 dark:bg-indigo-700 " required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-indigo-950">{props.txt}</label>
            </div>
        </form>
    )
}

export default Sorting