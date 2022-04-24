import React from 'react';


// Creating one time custome hook using useEffect hook to fetch data from network
export const useFetch = (URL, PAGE) => {
    // State to control the list data fetched from server
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        try {
            (
                async () => {
                    const response = await fetch(URL, {
                        method: 'GET'
                    });
                    // setting latest data on every new render
                    setData(await response.json())
                }
            )();
        } catch (error) {
            console.log(error)
        }
    }, [PAGE]);

    return data
}
