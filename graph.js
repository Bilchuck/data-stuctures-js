const graph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0],
];
// distance from node to other nodes
const bfs = (graph, index) => {
    // setup
    const result = {};
    graph.forEach((_, i) => result[i] = Infinity);
    result[index] = 0;

    const queue = [index];
    let steps = 1;
    while(queue.length) {
        const currentNode = graph[queue.shift()];
        currentNode
            .forEach((v, i) => {
                if (v === 1 && result[i] === Infinity) {
                        result[i] = steps;
                        queue.push(i);
                }
            });
        steps += 1;
    }

    return result;
}



console.log(bfs(graph, 1));