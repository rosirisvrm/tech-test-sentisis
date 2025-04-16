const getCartSummary = (cart: any) => {

    const totalOrders = cart.length;
    const totalValue = cart.reduce((sum: any, item: any) => sum + item.total, 0);
  
    return { totalOrders, totalValue };
};

export { getCartSummary }