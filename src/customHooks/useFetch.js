import React from 'react';

export const useFetch = (URL) => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        try {
            (
                async () => {
                    const response = await fetch(URL, {
                        method: 'GET'
                    });
                    setData(await response.json())
                }
            )();
        } catch (error) {
            console.log(error)
        }
    }, []);

    return data
}
