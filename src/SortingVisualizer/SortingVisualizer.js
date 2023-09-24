import React from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort";
import { getBubbleSortAnimations } from "../SortingAlgorithms/BubbleSort";
import { getSelectionSortAnimations } from "../SortingAlgorithms/SelectionSort";
import { getQuickSortAnimations } from "../SortingAlgorithms/QuickSort";

const NUMBER_OF_BARS = 100;
const VISUALIZING_SPEED = 1;
export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    };

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_BARS; i++) {
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = (i % 3 === 0) ? "red" : "yellow";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * VISUALIZING_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * VISUALIZING_SPEED);
            }
        }

    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = (i % 3 === 0) ? "red" : "yellow";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * VISUALIZING_SPEED);
            }
            else {
                const [barOne, barTwo] = animations[i];
                const barOneIndex = barOne.index;
                const barTwoIndex = barTwo.index;
                const barOneNewHeight = barOne.newHeight;
                const barTwoNewHeight = barTwo.newHeight;

                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`;
                    barTwoStyle.height = `${barTwoNewHeight}px`;
                }, i * VISUALIZING_SPEED);
            }
        }
    }

    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = (i % 3 === 0) ? "red" : "yellow";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * VISUALIZING_SPEED);
            }
            else {
                const [barOneIndex, barOneHeight, barTwoIndex, barTwoHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight}px`;
                    barTwoStyle.height = `${barTwoHeight}px`;
                }, i * VISUALIZING_SPEED);
            }
        }
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        // console.log(this.state.array);
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = (i % 3 === 0) ? "red" : "yellow";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * VISUALIZING_SPEED);
            }
            else {
                const [barOne, barTwo] = animations[i];
                const barOneIndex = barOne.index;
                const barTwoIndex = barTwo.index;
                const barOneNewHeight = barOne.newHeight;
                const barTwoNewHeight = barTwo.newHeight;

                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`;
                    barTwoStyle.height = `${barTwoNewHeight}px`;
                }, i * VISUALIZING_SPEED);
            }
        }

        // const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
        // const sortedArray = getBubbleSortAnimations(this.state.array);
        // console.log(checkArray(javaScriptSortedArray, sortedArray));
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                {array.map((value, index) => {
                    return (
                        <div
                            className="array-bar"
                            key={index}
                            style={{ height: `${value}px` }}
                        >
                        </div>
                    )
                })}
                <br />
                <div className="buttons">
                    <button className="btn generate-new-array" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="btn sorting-type" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="btn sorting-type" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="btn sorting-type" onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button className="btn sorting-type" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        )
    }

}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkArray(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}