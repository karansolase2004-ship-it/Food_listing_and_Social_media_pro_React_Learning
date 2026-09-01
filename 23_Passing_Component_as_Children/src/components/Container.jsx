import styles from "./Container.module.css"

const Container = ( props ) => {

  return <div className={styles.Container}>{props.children}</div>
};

// u can also pass above like below : 

/* 
const Container = ({children}) => {

  return <div className={styles.Container}>{children}</div>
};
*/


// React Internally does something like below : 

/* 
props = {
    children: [
        <h1>Healthy Foods</h1>,
        <ErrorMessage />,
        <FoodItems />
    ]
};
*/

export default Container;