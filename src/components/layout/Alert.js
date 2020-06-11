import React from "react";

const Danger = (props) => (
    <div role="alert" className="m-2">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{props.message}</p>
        </div>
    </div>
)
const Warning = (props) => (
    <div role="alert" className="m-2">
        <div className="bg-orange-500 text-white font-bold rounded-t px-4 py-2">
            Warning
        </div>
        <div className="border border-t-0 border-orange-400 rounded-b bg-red-100 px-4 py-3 text-orange-700">
            <p>{props.message}</p>
        </div>
    </div>
)
const Light = (props) => (
    <div role="alert" className="m-2">
        <div className="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
            Warning
        </div>
        <div className="border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
            <p>{props.message}</p>
        </div>
    </div>
)

const Alert = ({alert}) => {

        if(alert !== null) {
            switch (alert.type) {
                case 'light': return  (<Light message={alert.message}/>);
                case 'moderate': return (<Warning message={alert.message}/>);
                case 'danger': return (<Danger message={alert.message}/>)
                default: return null
            }
        }
        return null
}

export default Alert