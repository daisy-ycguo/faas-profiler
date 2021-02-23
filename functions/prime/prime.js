//Part of Runtime benchmarking experiments developed for CVCG DRD PAE CCE FaaS framework 

function isPrime(n){
    if ( n%1 || n<2 ) return false
    var q = Math.sqrt(n)
    for (var i = 2; i <= q; i++)
    {
        if (n % i === 0)
        {
            return false
        }
    }
    return true
}


function main(args) {
	var count = 0
	var maxCount = args.range || 1229
	var primes = []
	var i = 2
	while(count < maxCount) {
    		if(isPrime(i)) {
        		primes.push(i)
       	 		count++
    		}
    	    i++
	  }

    var result = primes[maxCount-1].toString()
    console.log(result)
    return {result: result}
}


