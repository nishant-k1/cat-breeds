import * as React from 'react';
import Typography from '@mui/material/Typography';
import PaginationMui from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = () => {
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
        <Stack spacing={2} >
            <Typography>Page: {page}</Typography>
            <PaginationMui count={25} page={page} onChange={handleChange} />
        </Stack>
    );

}

export default Pagination