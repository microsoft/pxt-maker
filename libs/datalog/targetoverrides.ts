namespace datalog {
    const FILENAME = "datalog.csv";
    /**
         * A storage for datalog data
         */
    class StorageDatalogStorage extends DatalogStorage {
        constructor() {
            super()
        }
        /**
         * Initializes the storage
         */
        init(): void { 

        }
        /**
         * Appends the headers in datalog
         */
        appendHeaders(headers: string[]): void { 
            const line = headers.join(datalog.SEPARATOR);
            storage.appendLine(`sep=${datalog.SEPARATOR}`);
            storage.appendLine(FILENAME, line);
        }
        /**
         * Appends a row of data
         */
        appendRow(values: number[]): void { 
            const line = values.join(datalog.SEPARATOR);
            storage.appendLine(FILENAME, line);
        }
        /**
         * Flushes any buffered data
         */
        flush(): void { 

        }
    }

    datalog.setStorage(new StorageDatalogStorage());
}