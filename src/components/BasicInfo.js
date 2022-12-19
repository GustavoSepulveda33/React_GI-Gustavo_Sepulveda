import React from 'react'


export default function BasicInfo(data) {
    console.log(data);
    return (
        <div>
            <div>
                <div>
                    <ul>
                    <li>name: {data.data.name}</li> 
                    <li>age: {data.data.age}</li>
                    <li>DOB: {data.data.DOB}</li>
                    <li>ID: {data.data.ID}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
