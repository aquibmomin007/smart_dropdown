export default {
    get: (_: string) => Promise.resolve({
        data: [{
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
    }),
};