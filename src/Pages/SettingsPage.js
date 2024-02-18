import React from "react";

export function SettingsPage() {
    return (
            <div className='p-10 w-full'>
                <div className='text-purple-900 p-2 text-3xl font-semibold text-center'>Settings</div>
                <div className="border rounded border-gray-400 text-center">
                <div className="p-2">
                    <input className="border border-purple-800 rounded-md" type='text' placeholder='First Name' />
                </div>
                <div className="p-2">
                    <input className="border border-purple-800 rounded-md" type='text' placeholder='Last Name' />
                </div>
                <div className="p-2">
                <input  className="border border-purple-800 rounded-md" type='number' placeholder='Age' min={1}/>
                </div>
                <div className="p-2">
                    <button className="bg-purple-700 border border-purple-800 rounded-md w-20 cursor-pointer text-gray-300" title="Submit">Submit</button>
                </div>
                </div>
            </div>
    );
}

export default SettingsPage;