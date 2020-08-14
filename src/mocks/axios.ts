const countriesList = [{
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
}]

export default {
    get: (_: string, config: { params: any }) => 
    new Promise<{data: any}>(resolve => {
        setTimeout(() => {
            resolve({
                data: countriesList.filter(
                    ({ label }) => config.params.term ?
                        label.toUpperCase().startsWith(config.params.term.toUpperCase()) :
                        true
                )
            })
        }, 300)
    })
};