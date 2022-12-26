class MySingleton {
    static instance: MySingleton;

    private constructor() {
    console.log("text");
    }

    public static getInstance(): MySingleton {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();

        }
        return MySingleton.instance;
    }
}

const obj1 = MySingleton.getInstance();
const obj2 = MySingleton.getInstance();
console.log(obj1 === obj2);






