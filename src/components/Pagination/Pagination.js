import * as React from 'react';
import PaginationMui from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = ({page, setPage, pageCount}) => {

    const handleChange = (event, value) => {
      setPage(value);
    };
    const [count, setCount] = React.useState(pageCount);
    React.useEffect(() => {
        setCount(pageCount)
    }, [pageCount])

    return (
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