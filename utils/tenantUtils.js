exports.getTenant = async (headers) => {
    return headers['x-tenant-id'] || 'default';
}
