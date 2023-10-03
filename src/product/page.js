export const ProductService = {
    getProductsData() {
        return [
            {
                id: 1,
                fk_acc: '55555555555',
                pro_link: 'Bamboo Watch',
                acc_holder: 'ankit',
                cc_acc: '4444444444444',
                gift_acc: 65,
                tsx_acc: 100,
                final_price: 24,
                gift_order: 24,
                pur_order: 'INSTOCK',
                remark: 5,
                pur_start: "yy/MM/dd HH:mm:ss",
                status: 65,
                action: 'Accessories',
               
            },
            {
                id: 1,
                fk_acc: '55555555555',
                pro_link: 'Bamboo Watch',
                acc_holder: 'ankit',
                cc_acc: '4444444444444',
                gift_acc: 65,
                tsx_acc: 100,
                final_price: 24,
                gift_order: 24,
                pur_order: 'INSTOCK',
                remark: 5,
                pur_start: "yy/MM/dd HH:mm:ss",
                status: 65,
                action: 'Accessories',
               
            },
            {
                id: 1,
                fk_acc: '55555555555',
                pro_link: 'Bamboo Watch',
                acc_holder: 'ankit',
                cc_acc: '4444444444444',
                gift_acc: 65,
                tsx_acc: 100,
                final_price: 24,
                gift_order: 24,
                pur_order: 'INSTOCK',
                remark: 5,
                pur_start: "yy/MM/dd HH:mm:ss",
                status: 65,
                action: 'Accessories',
               
            },
     
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

