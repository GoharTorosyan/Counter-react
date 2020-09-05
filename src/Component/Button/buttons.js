import React from "react";
import styles from "./button.module.css"

export default function Button ({name,onhandleIncrease, onhandleDecrease, onhandleReset}){
    return (
        <div>
            <button className = {styles.btn} onClick={onhandleIncrease}>+</button>
            <button className = {styles.btn} onClick={onhandleDecrease} disabled = {name <= 0}>-</button>
            <button className = {styles.btn} onClick={onhandleReset}> Reset </button>
        </div>
    )
}