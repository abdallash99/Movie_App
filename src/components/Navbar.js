import React from 'react'
import { Layout, Input } from 'antd'
const NavBar = ({ search, change }) => {
    const { Header } = Layout;
    const { Search } = Input;
    return (
        <Header >
            <h1 style={{ display: 'inline-block', color: '#eee' }}>Movie App</h1>
            <Search
                value={search}
                placeholder="input search text"
                onChange={change}
                style={{ width: 200, float: "right", marginTop: "15px" }}
            />
        </Header>);
}

export default NavBar;