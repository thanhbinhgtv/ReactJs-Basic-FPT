import React from 'react'

const DangXuat = ({ user, dangXuat }) => {
    return (
        <div className="inout">
            <button onClick={dangXuat}>{user.name}, Đăng xuất</button>
        </div>
    )
}

export default DangXuat
