'use strict';

/*
	Date : 11/12/22
	Time : 10:44 am
	Name : Gias uddin vuiya
	Day Name : Sunday
*/

// part-1 Introduction to data structure and algorithm.

// This is data structure and it's call Builting Data structure
const array = ['Najim vuiya', 32, true,90.9]; 
const userInfo = 
{
	name : 'Najim vuiya',
	age : 34,
	isStudent : true,
	test : 906.865
}

/* 
	Question: What is data structure ? 
	ans: A data structure is specialized format for organizing,processing,retrieving and storing data.

	Question: Why we need to use data structure ?
	ans : Data structure are necessary for designing efficent algorithm. Using appropriate data structure can help programmers save good amout of time while performing operations such as storage, retrieval, or processing of data. Manipulation of large amounts of data is easier. 


	Question: What is algorithm ? 

	ans : Algorithm is a step-by-step procedure, which defines a set of instruction to be executed in certain order to get the desired output.
*/


// how to measure code effiency
/*------------------------------*/

/*
	How we can know wich code is better and which one is bad
	--------------------------------------------------------

	1. Faster in execution (require in less time)
	2. Less memory-intensive(requre in less memory)
	3. More readability (পঠনযোগ্যতা)

	We can't less time and memory effiency at a time
*/ 

/*
	==== Now i will solve two problmes and then i will try to explain which code is better and why ===
*/
// Write a function and get sum of all number out of 10

function sum(num)
{
	let sum = 0;

	for(let i = 1; i <= num; i++)
	{
		sum += i;
	}
	return sum;
}
const result = sum(10);
// console.log(result);


// other way i will try to solve this problem
function sumUpTo(num)
{
	return num * (num + 1) / 2;
}
const reuslt2 = sumUpTo(10);
// console.log(reuslt2) 


/*
	If we want to select which one is better performancing. We can check it by counting operations.
	
	In the first problem i have solved by using loop and we know every single Iterating it will increase one-by-one operation  as well as num operation dependent on input and we all are know if any inputs related with input that is not constent. It won't be able to save time and memory effiency. On the other hand i have solve this problem another way i have taken three operation and its also constent its performence is better then fist solution. 
*/

/*
	On the other hend we can check which solution is better by using BIG O notation.

	Number One Big O(n);
	Number Two Big O(1)
*/

/*
	How the operation grows based on input?
	---------------------------------------

	#f(n) could be linear (f(n) = n) 
	#f(n) could be quadratic (f(n) = n^2) 
	#f(n) could be constent (f(n) = 1) 
*/























