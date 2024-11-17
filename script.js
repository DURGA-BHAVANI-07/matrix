function isSymmetricMatrix(matrix) {
  const rows = matrix.length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i].length !== rows) {
      return false; 
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false; 
      }
    }
  }

  return true; 
}

const matrix1 = [
  [1, 2, 3],
  [2, 5, 6],
  [3, 6, 9],
];

const matrix2 = [
  [1, 0, 3],
  [2, 5, 6],
  [3, 6, 9],
];

console.log(isSymmetricMatrix(matrix1)); 
console.log(isSymmetricMatrix(matrix2)); 




function rotateMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix(inputMatrix);
console.log(rotatedMatrix);



function multiplyMatrices(matrix1, matrix2) {
    const rows1 = matrix1.length; 
    const cols1 = matrix1[0].length; 
    const rows2 = matrix2.length; 
    const cols2 = matrix2[0].length; 

    if (cols1 !== rows2) {
        throw new Error("Matrix multiplication not possible: Incompatible dimensions.");
    }

    const result = Array.from({ length: rows1 }, () => Array(cols2).fill(0));

    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

const matrix3 = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

const matrix4 = [
    [1, 2],
    [1, 2],
    [1, 2]
];

const result = multiplyMatrices(matrix3, matrix4);
console.log(result);

