var ratingData = [
    {restaurant:'KFC',          rating:5},
    {restaurant:'Burger King',  rating:4},
    {restaurant:'KFC',          rating:3},
    {restaurant:'Domino',       rating:2},
    {restaurant:'Subway',       rating:3},
    {restaurant:'Domino',       rating:1},
    {restaurant:'Subway',       rating:4},
    {restaurant:'Pizza Hut',    rating:5}
]

//////////////////////////////// Parta

function findAverage(ratingData){
    var uniqueResults = []

    ratingData.map((rest) => {
        if(uniqueResults.filter((name) => {return name == rest.restaurant}).length == 0) uniqueResults.push(rest.restaurant) 
    })

    var answer = [];

    uniqueResults.map((rest) => {
        var x = {restaurant:rest, averageRating:0}
        var frequency = 0
        ratingData.filter((rating) => {return rating.restaurant == rest}).map((item) => {
            frequency++
            x.averageRating += item.rating
        })
        x.averageRating /= frequency
        answer.push(x)
    })

    return answer;
}

findAverage(ratingData)

////// output for part a when tested with given test case
/*
    0: {restaurant: 'KFC', averageRating: 4}
    1: {restaurant: 'Burger King', averageRating: 4}
    2: {restaurant: 'Domino', averageRating: 1.5}
    3: {restaurant: 'Subway', averageRating: 3.5}
    4: {restaurant: 'Pizza Hut', averageRating: 5}
*/

/////////////////////// part b

function filterBetterRes(ratingData, base){
    return findAverage(ratingData).filter((res) => {return res.averageRating > base})
}

filterBetterRes(ratingData, 4)

////// output for part b when tested with given test case
/*
    0: {restaurant: 'Pizza Hut', averageRating: 5}
*/