const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        fs.writeFile('./dist/index.html', fileContent,err => {
            if (err) {
                reject(err);
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied!'
            });

        });
    });
};


module.exports = {writeFile, copyFile};