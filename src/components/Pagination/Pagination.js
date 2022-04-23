import * as React from 'react';
import Typography from '@mui/material/Typography';
import PaginationMui from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = ({page, setPage, catCountPerPage}) => {
    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
        <Stack spacing={2}>
            {/* <Typography>Page: {page}</Typography> */}
            <PaginationMui
                count={catCountPerPage}
                page={page}
                onChange={handleChange}
                showFirstButton
                showLastButton
            />
        </Stack>
    );

}

export default Pagination