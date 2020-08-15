let countriesList = [{
    value: 'SG',
    label: 'Singapore',
}, {
    value: 'MY',
    label: 'Malaysia',
}, {
    value: 'ID',
    label: 'Indonesia',
}, {
    value: 'PH',
    label: 'Philippines',
}, {
    value: 'TH',
    label: 'Thailand',
}, {
    value: 'IN',
    label: 'India',
}, {
    value: 'SL',
    label: 'Sri Lanka',
}, {
    value: 'VN',
    label: 'Vietnam',
}, {
    value: 'KH',
    label: 'Cambodia',
}, {
    value: 'CN',
    label: 'Republic of China',
}, {
    value: 'IT',
    label: 'Italy',
}, {
    value: 'JP',
    label: 'Japan',
}, {
    value: 'RS',
    label: 'Russia',
}]

export default {
    get: (_: string, config: { params: any }) => 
        new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: countriesList.filter(
                        ({ label }) => config.params.term ?
                            label.toUpperCase().includes(config.params.term.toUpperCase()) :
                            true
                    ),
                })
            }, 300)
        }),
    post: (_: string, config: { params: any }) => 
    new Promise(resolve => {
        setTimeout(() => {
            countriesList = [
                {
                    value: config.params.term,
                    label: config.params.term,
                },
                ...countriesList
            ]
            resolve({
                data: countriesList,
                success: true,
            })
        }, 300)
    })
};