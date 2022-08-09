const fs = require("fs");

exports.fileUnlik = async (path) => {
    try {
        path = `public${path}`;
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
    } catch (error) {
        return error;
    }
};

exports.allFileUnlink = async (dir) => {
    try {
        dir = `public/${dir}`;
        if (fs.existsSync(dir)) {
            fs.rmdirSync(dir, { recursive: true });
            fs.mkdirSync(dir, { recursive: true });
        }
    } catch (error) {
        return error
    }
}
