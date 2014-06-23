var chars = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz";

module.exports = {

    base60Str: function (num) {
        var str = "";
        var d;
        if (typeof num === 'undefined' || num === 0) return 0;

        if (typeof num === 'object') {
            while (num > 0) {
                d = num.mod(60).toNumber();
                str = chars[d] + str;
                num = num.sub(d).div(60);
            }
        } else {
            while (num > 0) {
                d = num % 60;
                str = chars[d] + str;
                num = (num - d) / 60;
            }
        }
        return str;
    },

    base60Fill: function (num, fill) {
        var fillstr = new Array(fill + 1).join('0');
        var out = this.base60Str(num);
        out = fillstr.slice(0, fill - out.length) + out;
        return out;
    },
}
