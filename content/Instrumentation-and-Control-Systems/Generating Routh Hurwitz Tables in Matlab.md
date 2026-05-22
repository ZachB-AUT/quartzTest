---
title: Routh-Hurwitz in Matlab
tags:
  - instrumentation-and-control-systems
---
## General Example:
```matlab
syms s

Gs = 1000/((s+2)*(s+3)*(s+5)); % Forward transfer function
Hs = 1; % Feedback transfer function

Tf = simplify(Gs / (1+Gs*Hs)); % Equation for a closed loop transfer function

[N,D] = numden(Tf); % Get numerator and denominator
coefficients = flip(coeffs(D,s)); % get coefficients

% Number of rows is equal to the number of coefficients 
numRows = length(coefficients);

% Make empty table
routhTable = zeros(numRows,ceil(numRows/2));

% Fill in first two rows
routhTable(1,:) = coefficients(1:2:end);
routhTable(2,:) = coefficients(2:2:end);

for i = 3:numRows
	for j = 3:(ceil(numRows/2)-1)

	routhTable(i,j) = (routhTable(i-1,1) * routhTable(i-2,j+1) - routhTable(i-2,1)*routhTable(i-1, j+1)) / routhTable(i-1,1);
	end
end

disp("Routh-Hurwitz Table");
disp(routhTable);
```

## Special Cases:

### Row of Zeros

```matlab
coefficients = [1,7,6,42,8,56]; % Example coefficients

% Number of rows is equal to the number of coefficients 
numRows = length(coefficients);

% Make empty table
routhTable = zeros(numRows,ceil(numRows/2));

% Fill in first two rows
routhTable(1,:) = coefficients(1:2:end);
routhTable(2,:) = coefficients(2:2:end);

for i = 3:numRows
	for j = 3:(ceil(numRows/2)-1)

	routhTable(i,j) = (routhTable(i-1,1) * routhTable(i-2,j+1) - routhTable(i-2,1)*routhTable(i-1), j+1)) / routhTable(i-1,1);
	end
end

disp("Routh-Hurwitz Table");
disp(routhTable);

% -------------------------------
% THE TABLE CURRENTLY CONTAINS A ZERO ROW
% -------------------------------

% Polynomial before row of zeros
polynomial = 7*s^4 +42* s^2 +56;

diff_poly = diff(polynomial);
coeff_poly = flip(coeffs(diff_poly));

routhTable(3,1) = coeff_poly(1);
routhTable(3,2) = coeff_poly(2);

% Calculate new Routh Table
for i = 4:numRows
	for j = (1:ceil(numRows/2)-1)
	routhTable(i,j) = (routhTable(i-1,1) * routhTable(i-2,j+1) - routhTable(i-2,1)*routhTable(i-1, j+1)) / routhTable(i-1,1);
	end
end

disp("New Routh-Hurwitz Table");
disp(routhTable);
```

### Zero in first column of row:

```matlab
clear clc syms s;

coefficients = [1,2,3,6,5,3]; % Example coefficients

numRows = length(coefficients); 

% Initialize the Routh table with zeros 
routhTable = zeros(numRows,ceil(numRows/2)); 

% Fill in the first two rows of the table with coefficients 
routhTable(1, :) = coefficients(1:2:end);
routhTable(2, :) = coefficients(2:2:end);

% Populate the remaining rows of the Routh table 
for i = 3:numRows 
	for j = 1:(ceil(numRows/2) - 1)

	% Replace zeros with a small number
	if routhTable(i, 1) == 0
		routhTable(i, 1) = 1e-4;
	end

	routhTable(i, j) = (routhTable(i - 1, 1) * routhTable(i - 2, j + 1) - routhTable(i - 2, 1) * routhTable(i - 1, j + 1)) / routhTable(i - 1, 1);

	end
end

% Display the Routh table
disp("Routh-Hurwitz Table:");
disp(routhTable);
```

Another change to make this technically different.
Testing