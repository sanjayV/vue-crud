export default {
    computed: {
        filteredProducts: function(){
            return this.products.filter((product) => {
                return product.name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    },
    filters: {
        limitedChar(str, len) {
            if (str && len && str.length > len) {
                const cut = str.indexOf(' ', len);
                if(cut == -1) return str;
                return str.substring(0, cut) + '...';
            }

            
            return str;
        },
        timeAgo(date) {
            const seconds = Math.floor((new Date() - new Date(date)) / 1000);
            let interval = seconds / 31536000;

            if (interval > 1) {
                return Math.floor(interval) + " years ago";
            }
            interval = seconds / 2592000;
            if (interval > 1) {
                return Math.floor(interval) + " months ago";
            }
            interval = seconds / 86400;
            if (interval > 1) {
                return Math.floor(interval) + " days ago";
            }
            interval = seconds / 3600;
            if (interval > 1) {
                return Math.floor(interval) + " hours ago";
            }
            interval = seconds / 60;
            if (interval > 1) {
                return Math.floor(interval) + " minutes ago";
            }

            return Math.floor(seconds) + " seconds ago";
        }
    }
};
