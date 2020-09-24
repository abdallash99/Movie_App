import React from 'react';
import { Pagination } from 'antd'
const Page = ({ current, total, onChange }) => {
    return (
        <Pagination onChange={onChange} style={{ textAlign: "center", margin: "15px" }} defaultCurrent={current} total={total} />
    );
}

export default Page;