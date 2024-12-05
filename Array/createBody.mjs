export function createBody(pizzas, headers) {
  return `
    <tbody>
      ${pizzas
        .map(
          (pizza) => `
        <tr>
          ${headers
            .map(
              (header) =>
                // `<td>${
                  
                //     pizza[header]
                    
                // }</td>`
                `<td>${
                  Array.isArray(pizza[header])
                    ? pizza[header].join(" + ")
                    : pizza[header]
                }</td>`
            )
            .join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  `;
}
