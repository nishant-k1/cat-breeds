import React from 'react';

export const useFetch = (URL, PAGE) => {
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
    }, [PAGE]);

    return data
}
