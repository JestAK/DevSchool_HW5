class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil(this.collection.length / this.itemPerPage);
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex + 1 > this.pageCount() || pageIndex < 0){
            return -1;
        }

        if(pageIndex + 1 < this.pageCount()){
            return this.itemPerPage;
        }
        else {
            return this.collection.length - this.itemPerPage * pageIndex;
        }
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex + 1 > this.collection.length || itemIndex < 0){
            return -1;
        }

        return Math.ceil((itemIndex + 1) / this.itemPerPage) - 1;

    }
}