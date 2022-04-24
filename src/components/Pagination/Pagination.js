import * as React from 'react';
import PaginationMui from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = ({page, setPage, pageCount}) => {
    // handle pagination page navigation
    const handleChange = (event, value) => { setPage(value)};

    // Setting State to control the no. pages on each render
    const [count, setCount] = React.useState(pageCount);

    React.useEffect(() => {
        // Setting new page count on every new change in the pageCount
        setCount(pageCount)
    }, [pageCount])

    return (
        // rendering pagination UI
        <Stack spacing={2}>
            <PaginationMui
                count={count}
                page={page}
                onChange={handleChange}
                showFirstButton
                showLastButton
            />
        </Stack>
    );

}

export default Pagination