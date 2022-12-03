const input = {
    a: {
      b: {
        c: 1
      }                                                                                                                                  
    },
    d: {
      e: 2
    },
    f: {
      g: 3,
      h: 4
    },
    i: 5,
    x: 10,
    m: {
        n: {
            o: {
                p: 11
            }
        }
    }
  };

  function traverse(tree, path, op) {

        const keys = Object.keys(tree);

        keys.forEach(element => {
            if(typeof tree[element] === 'object') {
               path.push(element); 
               traverse(tree[element], path, op);
            } else {

                path.push(element);

                const consolidatedPath = path.join('.');
                
                op[consolidatedPath] = tree[element];
                
                // console.log({ [consolidatedPath]: tree[element] })
            }

            path.pop();
        })

        
        return op;
  }

  function traverseJson(input) {
    const path = [];
    const op = {};
    const output = traverse(input, path, op);
    
    console.log(output);
  }

  traverseJson(input);
  
  // Output
  // {
  // 'a.b.c': 1,
  // 'd.e': 2,
  // 'f.g': 3,
  // 'f.h': 4,
  // 'i': 5,
  // }
  

