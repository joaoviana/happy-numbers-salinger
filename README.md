# happy-numbers-salinger

## What is a Happy Number? 😄

A happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits in base-ten, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.

If the number equals 1, then it is a happy number! 



## The Solution ✅

From the book, ["If Hemingway wrote JavaScript"](https://www.goodreads.com/book/show/21487480-if-hemingway-wrote-javascript)


This is how J.D. Salinger would program this algorithm:

```js

// I’m aware that many of my friends will be saddened and shocked, or shock-saddened by JavaScript.

// Most numbers are goddamn phonies, I swear to God.
function howAreYaAnyway(number) {
	// What I thought I'd do, I thought I'd loop. I mean it.
	do{
		if (number < 5) break 
		thisNextNumber = 0;
		// Making it a string. I'm serious. 
		number = String(number)
		for (i in number)
			thisNextNumber += number[i]*number[i]
		// Putting the next one right back in the old one. Corny as hell I'll admit it.
		number = thisNextNumber 
	} while (true)
	// Only about five numbers are really happy, that kills me.
	// return "I'm " + ['H','Unh'][number==1?0:1] + "appy, I really am"
	// I have changed it for testing, original on line above (issue with the apostrophe)
	return "Im " + ['H','Unh'][number==1?0:1] + "appy, I really am";
}

```

