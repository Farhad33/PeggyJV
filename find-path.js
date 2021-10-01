let paths = [['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND'], ['ATL', 'GSO']]
console.log(findPath(paths))

function findPath(paths) {
    let obj = {}
    let result = []
    paths.forEach(path => {
        path.forEach((airport, index) => {
            if (obj[airport]) {
                obj[airport].count++
            } else {
                obj[airport] = {count: 1}
            }
            if (index === 0) {
                obj[airport].source = true
            }
        })
    })
    for (const target in obj) {
        if (obj[target].source && obj[target].count === 1) {
            result.unshift(target)
        } else if (obj[target].count === 1) {
            result.push(target)
        }
    }
    return result
}
